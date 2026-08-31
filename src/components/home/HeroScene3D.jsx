import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ─── Color palette ────────────────────────────────────────────────────────────
const stageColors = [
  new THREE.Color('#3b82f6'),
  new THREE.Color('#8b5cf6'),
  new THREE.Color('#06b6d4'),
  new THREE.Color('#10b981'),
];
const _tmp = new THREE.Color();
function getStageColor(p) {
  const c = Math.max(0, Math.min(1, p));
  if (c <= 0) return stageColors[0];
  if (c >= 1) return stageColors[3];
  const t = c * 3, i = Math.floor(t);
  _tmp.lerpColors(stageColors[i], stageColors[Math.min(i + 1, 3)], t - i);
  return _tmp;
}

// ─── TechCore ─────────────────────────────────────────────────────────────────
function TechCore({ progressRef, autoRotRef, dragRef, prefersReducedMotion, isMobile }) {
  const coreRef       = useRef();
  const outerRef      = useRef();
  const innerRef      = useRef();
  const ring1Ref      = useRef();
  const ring2Ref      = useRef();
  const ring3Ref      = useRef();
  const pointLightRef = useRef();

  // Smooth target rotation (lerped toward auto+drag)
  const smoothRot = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    const p  = progressRef.current;
    const ar = autoRotRef.current;   // { x, y } auto-rotation accumulator
    const dr = dragRef.current;      // { x, y } user drag

    // ── idle spin for shells / rings ─────────────────────────────────────
    const sp = prefersReducedMotion ? 0.03 : 0.14;
    if (outerRef.current) { outerRef.current.rotation.x -= delta * sp * 1.3; outerRef.current.rotation.y += delta * sp * 0.7; }
    if (innerRef.current) { innerRef.current.rotation.y -= delta * sp * 2.1; innerRef.current.rotation.z += delta * sp; }
    if (ring1Ref.current) { ring1Ref.current.rotation.x += delta * sp * 0.6; ring1Ref.current.rotation.y -= delta * sp * 1.0; }
    if (ring2Ref.current) { ring2Ref.current.rotation.x -= delta * sp * 0.9; ring2Ref.current.rotation.z += delta * sp * 0.8; }
    if (ring3Ref.current) { ring3Ref.current.rotation.y += delta * sp * 0.5; ring3Ref.current.rotation.z -= delta * sp * 0.4; }

    // ── scale from scroll ─────────────────────────────────────────────────
    let sc;
    if      (p < 0.33) sc = THREE.MathUtils.lerp(1.0, 1.2, p / 0.33);
    else if (p < 0.66) sc = THREE.MathUtils.lerp(1.2, 0.9, (p - 0.33) / 0.33);
    else               sc = THREE.MathUtils.lerp(0.9, 1.4, (p - 0.66) / 0.34);
    const fsc = isMobile ? sc * 0.7 : sc;
    if (coreRef.current)  coreRef.current.scale.setScalar(fsc);
    if (outerRef.current) outerRef.current.scale.setScalar(fsc * 1.3);
    if (innerRef.current) innerRef.current.scale.setScalar(fsc * 0.65);

    // ── CORE rotation: scroll + auto-rotate + user drag (lerped smooth) ──
    const targetX = p * Math.PI * 1.5 + ar.x + dr.y;
    const targetY = p * Math.PI * 2.5 + ar.y + dr.x;
    smoothRot.current.x = THREE.MathUtils.lerp(smoothRot.current.x, targetX, delta * 4);
    smoothRot.current.y = THREE.MathUtils.lerp(smoothRot.current.y, targetY, delta * 4);

    if (coreRef.current) {
      coreRef.current.rotation.x = smoothRot.current.x;
      coreRef.current.rotation.y = smoothRot.current.y;
    }

    // ── ring expansion on final stage ────────────────────────────────────
    const exp = p > 0.7 ? (p - 0.7) * 5 : 0;
    if (ring1Ref.current) ring1Ref.current.scale.setScalar(1 + exp);
    if (ring2Ref.current) ring2Ref.current.scale.setScalar(1.2 + exp * 1.5);

    // ── colours & glow ────────────────────────────────────────────────────
    const col = getStageColor(p);
    if (coreRef.current?.material) {
      coreRef.current.material.color.copy(col);
      coreRef.current.material.emissive.copy(col);
      coreRef.current.material.emissiveIntensity = 0.18 + p * 0.55;
    }
    if (outerRef.current?.material) {
      outerRef.current.material.color.copy(col);
      outerRef.current.material.opacity = 0.1 + Math.sin(p * Math.PI) * 0.18;
    }
    if (ring1Ref.current?.children[0]?.material) ring1Ref.current.children[0].material.color.copy(col);
    if (pointLightRef.current) {
      pointLightRef.current.color.copy(col);
      pointLightRef.current.intensity = 2 + p * 3;
    }
  });

  return (
    <group>
      <pointLight ref={pointLightRef} distance={14} intensity={2.5} color="#3b82f6" />

      {/* Glass icosahedron core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhysicalMaterial
          color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.18}
          roughness={0.08} metalness={0.65} transparent opacity={0.88} clearcoat={1}
        />
      </mesh>

      {/* Outer wireframe shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1}
          blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Inner octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2}
          blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Ring 1 — equatorial */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[3.2, 0.013, 16, 120]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} depthWrite={false} />
        </mesh>
        {[0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].map((a, i) => (
          <mesh key={i} position={[Math.cos(a) * 3.2, Math.sin(a) * 3.2, 0]}>
            <sphereGeometry args={[0.07, 10, 10]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>

      {/* Ring 2 — tilted */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[4.5, 0.018, 16, 120]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.06} depthWrite={false} />
        </mesh>
        {[0, Math.PI].map((a, i) => (
          <mesh key={i} position={[Math.cos(a) * 4.5, Math.sin(a) * 4.5, 0]}>
            <sphereGeometry args={[0.09, 10, 10]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>

      {/* Ring 3 — vertical */}
      <group ref={ring3Ref} rotation={[Math.PI / 2, 0, Math.PI / 5]}>
        <mesh>
          <torusGeometry args={[5.5, 0.009, 12, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.04} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
}

// ─── Camera Rig ───────────────────────────────────────────────────────────────
function CameraRig({ progressRef, dragRef, prefersReducedMotion }) {
  const { camera, pointer } = useThree();

  useFrame((_, delta) => {
    const p = progressRef.current;

    let tx = 0, ty = 0, tz = 8;
    if      (p < 0.33) { tx = THREE.MathUtils.lerp(0,  2, p / 0.33);          tz = THREE.MathUtils.lerp(8, 7, p / 0.33); }
    else if (p < 0.66) { tx = THREE.MathUtils.lerp(2, -2, (p - 0.33) / 0.33); tz = THREE.MathUtils.lerp(7, 9, (p - 0.33) / 0.33); }
    else               { tx = THREE.MathUtils.lerp(-2, 0, (p - 0.66) / 0.34); ty = THREE.MathUtils.lerp(0, 1, (p - 0.66) / 0.34); tz = THREE.MathUtils.lerp(9, 6, (p - 0.66) / 0.34); }

    if (!prefersReducedMotion && !dragRef.current.isDragging) {
      tx += pointer.x * 0.35;
      ty += pointer.y * 0.35;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, delta * 2.5);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, delta * 2.5);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, tz, delta * 2.5);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Particles ────────────────────────────────────────────────────────────────
function Particles({ progressRef, count }) {
  const meshRef = useRef();
  const dummy   = useMemo(() => new THREE.Object3D(), []);
  const data    = useMemo(() => Array.from({ length: count }, () => ({
    t: Math.random() * 100,
    speed: 0.006 + Math.random() / 200,
    xF: (Math.random() - 0.5) * 22,
    yF: (Math.random() - 0.5) * 22,
    zF: (Math.random() - 0.5) * 22,
  })), [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    const p = progressRef.current;
    const exp = p > 0.7 ? (p - 0.7) * 16 : 0;
    data.forEach((d, i) => {
      d.t += d.speed;
      const { t, xF, yF, zF } = d;
      const s = Math.abs(Math.cos(t)) * 0.15 + 0.02;
      dummy.position.set(
        xF + Math.cos(t / 8) * 4 + Math.cos(t) * exp,
        yF + Math.sin(t / 8) * 4 + Math.sin(t) * exp,
        zF + Math.cos(t / 9) * 4,
      );
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <circleGeometry args={[0.06, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.22}
        depthWrite={false} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
}

// ─── Inner Scene ──────────────────────────────────────────────────────────────
function Scene({ progressRef, autoRotRef, dragRef, prefersReducedMotion, isMobile, particleCount }) {
  return (
    <>
      <color attach="background" args={['#060608']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]}  intensity={1.1} color="#ffffff" />
      <directionalLight position={[-8, -8, -4]} intensity={0.5} color="#8b5cf6" />
      <CameraRig progressRef={progressRef} dragRef={dragRef} prefersReducedMotion={prefersReducedMotion} />
      <Float speed={prefersReducedMotion ? 0 : 1.4} rotationIntensity={0} floatIntensity={prefersReducedMotion ? 0 : 0.3}>
        <TechCore progressRef={progressRef} autoRotRef={autoRotRef} dragRef={dragRef}
          prefersReducedMotion={prefersReducedMotion} isMobile={isMobile} />
      </Float>
      {!prefersReducedMotion && <Particles progressRef={progressRef} count={particleCount} />}
    </>
  );
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
class ErrorBoundary extends React.Component {
  constructor(p) { super(p); this.state = { err: false }; }
  static getDerivedStateFromError() { return { err: true }; }
  componentDidCatch(e) { console.warn('3D scene (non-fatal):', e); }
  render() {
    if (this.state.err) return (
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#060608]">
        <div className="w-64 h-64 rounded-full border border-white/10 bg-white/[0.03] animate-pulse" />
      </div>
    );
    return this.props.children;
  }
}

// ─── Public Export ────────────────────────────────────────────────────────────
export default function HeroScene3D({ smoothProgress, prefersReducedMotion }) {
  const progressRef = useRef(0);
  useEffect(() => {
    const unsub = smoothProgress.on('change', v => { progressRef.current = v; });
    return () => unsub();
  }, [smoothProgress]);

  // Auto-rotation — runs continuously, pauses when user is dragging
  const autoRotRef = useRef({ x: 0, y: 0 });
  const dragRef    = useRef({ x: 0, y: 0, isDragging: false });
  const pointerRef = useRef({ x: 0, y: 0 });
  const hoverRef   = useRef(false);
  const rafRef     = useRef(null);

  // Auto-rotate loop using rAF (outside R3F to allow pause)
  useEffect(() => {
    if (prefersReducedMotion) return;
    let last = performance.now();
    const tick = (now) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      // Only auto-rotate when user is NOT dragging
      if (!dragRef.current.isDragging) {
        autoRotRef.current.y += delta * 0.22;
        autoRotRef.current.x += delta * 0.08;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [prefersReducedMotion]);

  const isMobile      = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 25 : 80; // reduced from 40/130

  // ── Pointer / Drag handlers ──────────────────────────────────────────────
  const onPointerDown = useCallback((e) => {
    dragRef.current.isDragging = true;
    pointerRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - pointerRef.current.x;
    const dy = e.clientY - pointerRef.current.y;
    dragRef.current.x += dx / 180;
    dragRef.current.y += dy / 180;
    pointerRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onPointerUp   = useCallback(() => { dragRef.current.isDragging = false; }, []);
  const onPointerEnter = useCallback(() => { hoverRef.current = true; }, []);
  const onPointerLeave = useCallback(() => { hoverRef.current = false; dragRef.current.isDragging = false; }, []);

  return (
    <ErrorBoundary>
      <div
        className="absolute inset-0 z-0 select-none"
        style={{ cursor: dragRef.current.isDragging ? 'grabbing' : 'grab' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        onPointerEnter={onPointerEnter}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={1}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        >
          <React.Suspense fallback={null}>
            <Scene
              progressRef={progressRef}
              autoRotRef={autoRotRef}
              dragRef={dragRef}
              prefersReducedMotion={prefersReducedMotion}
              isMobile={isMobile}
              particleCount={particleCount}
            />
          </React.Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}
