import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, OrbitControls, Environment, ContactShadows, Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────────────────
   REALISTIC GRADUATION CAP
   Matches reference: wide flat board, cylinder base, tassel
   Color: site palette – near-black with white/silver tassel
───────────────────────────────────────────────────────── */
const GraduationCap = () => {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Gentle float up/down
    group.current.position.y = 0.5 + Math.sin(t * 1.0) * 0.14;
    // Very slow rotation
    group.current.rotation.y = -0.4 + Math.sin(t * 0.3) * 0.15;
  });

  // Tassel cord points (hangs from front-left corner of board)
  const cordPoints = [
    new THREE.Vector3(-1.2, 0.03, 1.2),  // corner of board
    new THREE.Vector3(-1.1, -0.3, 1.1),
    new THREE.Vector3(-1.0, -0.9, 1.0),  // bead position top
  ];
  const cordCurve = new THREE.CatmullRomCurve3(cordPoints);
  const cordGeometry = new THREE.TubeGeometry(cordCurve, 20, 0.022, 8, false);

  return (
    <group ref={group}>

      {/* ── BOARD (square mortarboard top) ─────────────── */}
      {/* Main board – wide, flat, slightly angled */}
      <mesh position={[0, 0.04, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.3, 0.11, 3.3]} />
        <meshStandardMaterial
          color="#090909"
          metalness={0.5}
          roughness={0.25}
          envMapIntensity={1.8}
        />
      </mesh>

      {/* Board subtle edge highlight */}
      <mesh position={[0, 0.04, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[3.32, 0.08, 3.32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.6}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── CYLINDRICAL SKULLCAP BASE ───────────────────── */}
      <mesh position={[0, -0.42, 0]} castShadow>
        <cylinderGeometry args={[0.88, 0.88, 0.72, 64]} />
        <meshStandardMaterial
          color="#080808"
          metalness={0.4}
          roughness={0.3}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Bottom cap of cylinder */}
      <mesh position={[0, -0.79, 0]} rotation={[Math.PI, 0, 0]}>
        <circleGeometry args={[0.88, 64]} />
        <meshStandardMaterial color="#080808" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* ── CENTER BUTTON on top of board ───────────────── */}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.1, 24]} />
        <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* ── TASSEL CORD ─────────────────────────────────── */}
      <mesh geometry={cordGeometry}>
        <meshStandardMaterial color="#C8A96E" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* ── TASSEL BEAD (round knob) ─────────────────────── */}
      <mesh position={[-1.0, -0.94, 1.0]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshStandardMaterial color="#C8A96E" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* ── TASSEL FRINGE strands ────────────────────────── */}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 9) * Math.PI * 1.4 - 0.7;
        const ox = Math.sin(angle) * 0.055;
        const oz = Math.cos(angle) * 0.055;
        const len = 0.38 + Math.random() * 0.12;
        return (
          <mesh key={i} position={[-1.0 + ox, -0.94 - len / 2, 1.0 + oz]}>
            <cylinderGeometry args={[0.012, 0.008, len, 6]} />
            <meshStandardMaterial color="#B8924A" metalness={0.2} roughness={0.6} />
          </mesh>
        );
      })}

    </group>
  );
};

/* ─────────────────────────────────────────────────────────
   GLOBE ORBITING ICONS
───────────────────────────────────────────────────────── */
const OrbitingIcons = () => {
  const groupRef = useRef();

  const icons = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', label: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js', invert: true },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', label: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', label: 'WordPress' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', label: 'AWS', invert: true },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', label: 'Docker' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', label: 'MongoDB' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', label: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', label: 'Tailwind' },
  ];

  useFrame(({ clock }) => {
    // Rotate the entire globe group
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.35;
    // Add a slight wobble
    groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
    groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Globe rings to make it look like an orbital sphere */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[3.48, 3.5, 64]} />
        <meshBasicMaterial color="#3366ff" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <ringGeometry args={[3.48, 3.5, 64]} />
        <meshBasicMaterial color="#3366ff" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>

      {icons.map((icon, i) => {
        // Distribute around a sphere-like path
        const angle = (i / icons.length) * Math.PI * 2;
        const radius = 3.5;
        // Alternate up and down to create a globe effect
        const yOffset = Math.sin(angle * 3) * 1.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Html key={icon.label} position={[x, yOffset, z]} center zIndexRange={[10, 0]}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '14px',
                background: 'rgba(6,6,15,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={icon.src}
                alt={icon.label}
                style={{
                  width: 26,
                  height: 26,
                  objectFit: 'contain',
                  filter: icon.invert ? 'invert(1)' : 'none',
                }}
              />
            </div>
          </Html>
        );
      })}
    </group>
  );
};

/* ─────────────────────────────────────────────────────────
   GLOWING PLATFORM BASE
───────────────────────────────────────────────────────── */
const Platform = () => {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ring1.current.rotation.z -= 0.007;
    ring2.current.rotation.z += 0.005;
  });

  return (
    <group position={[0, -2.0, 0]}>
      {/* Solid disc */}
      <mesh receiveShadow>
        <cylinderGeometry args={[3.5, 4.0, 0.28, 72]} />
        <meshStandardMaterial color="#060608" metalness={0.95} roughness={0.08} />
      </mesh>

      {/* Glow core */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[1.0, 1.0, 0.04, 48]} />
        <meshStandardMaterial color="#2244cc" emissive="#1133bb" emissiveIntensity={3} roughness={1} />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.62, 72]} />
        <meshBasicMaterial color="#3366ff" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.3, 72]} />
        <meshBasicMaterial color="#1144cc" transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>

      {/* Ring 3 */}
      <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.0, 3.08, 72]} />
        <meshBasicMaterial color="#0a2299" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Central glow light */}
      <pointLight position={[0, 0.8, 0]} intensity={5} color="#2255ff" distance={7} />
    </group>
  );
};

/* ─────────────────────────────────────────────────────────
   MOUSE PARALLAX CAMERA
───────────────────────────────────────────────────────── */
const MouseParallax = () => {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.5, 9));

  useFrame(() => {
    target.current.set(pointer.x * 1.0, 0.5 + pointer.y * 0.6, 9);
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0.2, 0);
  });

  return null;
};

/* ─────────────────────────────────────────────────────────
   FULL SCENE
───────────────────────────────────────────────────────── */
const Scene = () => (
  <>
    <color attach="background" args={['#050505']} />
    <fog attach="fog" args={['#050505', 12, 24]} />

    {/* Main lighting */}
    <ambientLight intensity={0.5} />
    {/* Key light from upper-right (matches reference image light direction) */}
    <directionalLight
      position={[4, 8, 5]}
      intensity={1.8}
      color="#ffffff"
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
    {/* Fill light from left */}
    <directionalLight position={[-4, 3, 2]} intensity={0.4} color="#aaaacc" />
    {/* Blue rim from below (platform glow) */}
    <pointLight position={[0, -1.5, 0]} intensity={2} color="#2244ff" distance={8} />

    <MouseParallax />

    <GraduationCap />
    <Platform />
    <OrbitingIcons />

    {/* Stars */}
    <Sparkles count={60} scale={10} size={1.2} speed={0.25} opacity={0.12} color="#aabbff" />

    <ContactShadows
      position={[0, -2.25, 0]}
      opacity={0.7}
      scale={14}
      blur={3}
      far={5}
      color="#000308"
    />

    <Environment preset="city" />
  </>
);

/* ─────────────────────────────────────────────────────────
   EXPORTED CANVAS
───────────────────────────────────────────────────────── */
const InstituteHero3D = () => (
  <div className="w-full h-full absolute inset-0 overflow-hidden">
    <Canvas
      shadows
      camera={{ position: [0, 0.5, 9], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: false }}
    >
      <Scene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  </div>
);

export default InstituteHero3D;
