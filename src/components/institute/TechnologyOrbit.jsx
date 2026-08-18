import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────
   TECH ICONS — distributed across 3 rings
   All use devicons CDN (most reliable, no CORS issues)
───────────────────────────────────────────────────────── */
const RINGS = [
  {
    radius: 1.8,
    speed: 0.4,
    color: '#4488ff',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', label: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', label: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', label: 'JS' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TS' },
    ],
  },
  {
    radius: 3.0,
    speed: -0.28,
    color: '#2255cc',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js', invert: true },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', label: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', label: 'MongoDB' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', label: 'Docker' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', label: 'AWS', bright: true },
    ],
  },
  {
    radius: 4.2,
    speed: 0.18,
    color: '#1133aa',
    icons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', label: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', label: 'MySQL' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', label: 'Git' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', label: 'Tailwind' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', label: 'WordPress', bright: true },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', label: 'Vue' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   ICON BADGE — HTML billboard, always faces camera
───────────────────────────────────────────────────────── */
const IconBadge = ({ position, src, label, invert = false, bright = false }) => (
  <Html position={position} center zIndexRange={[10, 0]}>
    <div
      title={label}
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: bright ? 'rgba(255,255,255,0.1)' : 'rgba(6,6,18,0.9)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.15)',
        boxShadow: '0 4px 24px rgba(0,20,80,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <img
        src={src}
        alt={label}
        style={{
          width: 26,
          height: 26,
          objectFit: 'contain',
          // invert black icons to white, brighten dim icons
          filter: invert
            ? 'invert(1) brightness(1.5)'
            : bright
            ? 'brightness(2) saturate(1.5)'
            : 'none',
        }}
      />
    </div>
  </Html>
);

/* ─────────────────────────────────────────────────────────
   FLAT ORBITAL RING — stretched into a wide row/ellipse
───────────────────────────────────────────────────────── */
const FlatRing = ({ radius, speed, color, icons }) => {
  const rotRef = useRef();

  useFrame(({ clock }) => {
    rotRef.current.rotation.y = clock.getElapsedTime() * speed;
  });

  return (
    // Tilt group less and stretch X-axis heavily to make a wide row
    <group rotation={[Math.PI * 0.05, 0, 0]} scale={[1.85, 1, 1.1]}>
      {/* Oval ring line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.018, radius + 0.018, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>

      {/* Rotating icon group */}
      <group ref={rotRef}>
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          return (
            <group key={icon.label} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
              {/* Counter-scale the icon wrapper so badges remain perfectly circular instead of stretched */}
              <group scale={[1/1.85, 1, 1/1.1]}>
                <IconBadge
                  src={icon.src}
                  label={icon.label}
                  invert={icon.invert}
                  bright={icon.bright}
                />
              </group>
            </group>
          );
        })}
      </group>
    </group>
  );
};

/* ─────────────────────────────────────────────────────────
   GLOWING CORE STAR
───────────────────────────────────────────────────────── */
const CoreStar = () => {
  const pulseRef = useRef();

  useFrame(({ clock }) => {
    pulseRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2.5) * 0.08);
  });

  return (
    <group rotation={[Math.PI * 0.05, 0, 0]} scale={[1.85, 1, 1.1]}>
      <group scale={[1/1.85, 1, 1/1.1]}>
      {/* Outer glow */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial
          color="#2244ff"
          emissive="#1133ee"
          emissiveIntensity={2.5}
          transparent
          opacity={0.22}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.52, 48, 48]} />
        <meshStandardMaterial
          color="#1a3aff"
          emissive="#1133cc"
          emissiveIntensity={5}
          roughness={0.05}
          metalness={0.4}
        />
      </mesh>

      {/* "AI" label */}
      <Html center zIndexRange={[20, 0]}>
        <div style={{
          color: 'rgba(255,255,255,0.95)',
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: 3,
          pointerEvents: 'none',
          textShadow: '0 0 12px #fff',
        }}>AI</div>
      </Html>

      <pointLight position={[0, 0, 0]} intensity={8} color="#3366ff" distance={10} />
      </group>
    </group>
  );
};

/* ─────────────────────────────────────────────────────────
   SCENE
───────────────────────────────────────────────────────── */
const Scene = () => (
  <>
    <color attach="background" args={['#050507']} />
    <ambientLight intensity={0.35} />
    <directionalLight position={[4, 6, 4]} intensity={0.7} color="#aabbff" />

    <CoreStar />

    {RINGS.map((ring, i) => (
      <FlatRing key={i} {...ring} />
    ))}

    <Sparkles count={60} scale={14} size={1.0} speed={0.2} opacity={0.08} color="#aabbff" />

    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
    />
    <Environment preset="city" />
  </>
);

/* ─────────────────────────────────────────────────────────
   EXPORTED SECTION
───────────────────────────────────────────────────────── */
const TechnologyOrbit = () => (
  <section className="py-0 bg-[#050505] relative overflow-hidden border-t border-white/5">
    {/* Header */}
    <Container>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-24 pb-6">
        <div>
          <p className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
            Technologies You Will Learn
          </p>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
            Master the modern stack.
          </h3>
        </div>
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sm font-medium text-[#ADADAE] hover:text-white transition-colors pb-1"
        >
          View All <ArrowRight size={16} />
        </motion.button>
      </div>
    </Container>

    {/* Full-width canvas — height increased to prevent clipping outer rings */}
    <div className="w-full" style={{ height: 600 }}>
      <Canvas
        camera={{ position: [0, 5, 16], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
    </div>

    {/* Bottom padding spacer */}
    <div className="pb-16" />
  </section>
);

export default TechnologyOrbit;
