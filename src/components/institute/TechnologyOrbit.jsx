import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Container from '../ui/Container';

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const RINGS = [
  {
    radius: 2.0,
    speed: 0.32,
    color: '#3b82f6',
    opacity: 0.55,
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        label: 'React',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        label: 'Node.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        label: 'JavaScript',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        label: 'TypeScript',
      },
    ],
  },

  {
    radius: 3.05,
    speed: -0.22,
    color: '#2563eb',
    opacity: 0.38,
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        label: 'Next.js',
        invert: true,
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        label: 'Python',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        label: 'MongoDB',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        label: 'Docker',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        label: 'AWS',
        bright: true,
      },
    ],
  },

  {
    radius: 4.05,
    speed: 0.14,
    color: '#1d4ed8',
    opacity: 0.28,
    icons: [
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        label: 'Figma',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        label: 'MySQL',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        label: 'Git',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        label: 'Tailwind CSS',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
        label: 'WordPress',
        bright: true,
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        label: 'Vue',
      },
    ],
  },
];

/* =========================================================
   ICON BADGE
========================================================= */

const IconBadge = ({
  position,
  src,
  label,
  invert = false,
  bright = false,
}) => {
  return (
    <Html
      position={position}
      center
      distanceFactor={7}
      zIndexRange={[10, 0]}
      transform={false}
    >
      <div
        title={label}
        className="tech-icon-badge"
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: bright
            ? 'rgba(255,255,255,0.12)'
            : 'rgba(5,5,10,0.94)',
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow:
            '0 8px 30px rgba(0,30,100,0.45), inset 0 0 20px rgba(255,255,255,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          transition:
            'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <img
          src={src}
          alt={label}
          draggable="false"
          style={{
            width: 27,
            height: 27,
            objectFit: 'contain',
            filter: invert
              ? 'invert(1) brightness(1.6)'
              : bright
                ? 'brightness(1.8) saturate(1.4)'
                : 'none',
          }}
        />
      </div>
    </Html>
  );
};

/* =========================================================
   ORBITAL RING
========================================================= */

const FlatRing = ({
  radius,
  speed,
  color,
  opacity,
  icons,
  mouseX,
  mouseY,
}) => {
  const ringRef = useRef();
  const iconGroupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (ringRef.current) {
      ringRef.current.rotation.y = time * speed;

      ringRef.current.rotation.x =
        Math.sin(time * 0.3) * 0.025 + mouseY.current * 0.08;

      ringRef.current.rotation.z = mouseX.current * 0.04;
    }

    if (iconGroupRef.current) {
      iconGroupRef.current.rotation.y = time * speed;
    }
  });

  return (
    <group
      rotation={[Math.PI * 0.08, 0, 0]}
      scale={[1.6, 1, 0.95]}
    >
      {/* Ring */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <ringGeometry
          args={[
            radius - 0.012,
            radius + 0.012,
            128,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Rotating group */}

      <group ref={ringRef}>
        <group ref={iconGroupRef}>
          {icons.map((icon, index) => {
            const angle =
              (index / icons.length) * Math.PI * 2;

            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            return (
              <group
                key={icon.label}
                position={[x, 0, z]}
              >
                <group
                  scale={[
                    1 / 1.6,
                    1,
                    1 / 0.95,
                  ]}
                >
                  <IconBadge
                    position={[0, 0, 0]}
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
    </group>
  );
};

/* =========================================================
   CENTRAL 3D CORE
========================================================= */

const CoreStar = ({
  mouseX,
  mouseY,
}) => {
  const groupRef = useRef();
  const glowRef = useRef();
  const coreRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y =
        time * 0.18 + mouseX.current * 0.12;

      groupRef.current.rotation.x =
        Math.sin(time * 0.45) * 0.08 +
        mouseY.current * 0.1;

      groupRef.current.position.y =
        Math.sin(time * 0.8) * 0.08;
    }

    if (glowRef.current) {
      const pulse =
        1 + Math.sin(time * 2.4) * 0.08;

      glowRef.current.scale.setScalar(pulse);
    }

    if (coreRef.current) {
      coreRef.current.rotation.x =
        time * 0.25;

      coreRef.current.rotation.y =
        time * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Large outer glow */}

      <mesh ref={glowRef}>
        <sphereGeometry
          args={[1.0, 32, 32]}
        />

        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.10}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main glowing core */}

      <mesh ref={coreRef}>
        <icosahedronGeometry
          args={[0.68, 2]}
        />

        <meshStandardMaterial
          color="#173eff"
          emissive="#1238ff"
          emissiveIntensity={3.2}
          metalness={0.55}
          roughness={0.12}
          transparent
          opacity={0.96}
        />
      </mesh>

      {/* Inner glass layer */}

      <mesh scale={1.12}>
        <icosahedronGeometry
          args={[0.68, 1]}
        />

        <meshBasicMaterial
          color="#4f7cff"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* AI label */}

      <Html
        center
        distanceFactor={7}
        zIndexRange={[20, 0]}
        style={{
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '4px',
            textShadow:
              '0 0 10px rgba(80,130,255,0.9), 0 0 25px rgba(40,80,255,0.7)',
            whiteSpace: 'nowrap',
          }}
        >
          TECH
        </div>
      </Html>

      {/* Lights */}

      <pointLight
        position={[0, 0, 0]}
        intensity={10}
        distance={8}
        color="#3366ff"
      />

      <pointLight
        position={[3, 2, 4]}
        intensity={3}
        distance={10}
        color="#6699ff"
      />
    </group>
  );
};

/* =========================================================
   MOUSE PARALLAX
========================================================= */

const MouseController = ({ mouseX, mouseY }) => {
  const { gl } = useThree();

  useMemo(() => {
    const element = gl.domElement;

    const handleMove = (event) => {
      const rect =
        element.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) /
          rect.width) *
          2 -
        1;

      const y =
        -(
          ((event.clientY - rect.top) /
            rect.height) *
            2 -
          1
        );

      mouseX.current = THREE.MathUtils.lerp(
        mouseX.current,
        x,
        0.08
      );

      mouseY.current = THREE.MathUtils.lerp(
        mouseY.current,
        y,
        0.08
      );
    };

    window.addEventListener(
      'pointermove',
      handleMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'pointermove',
        handleMove
      );
    };
  }, [gl, mouseX, mouseY]);

  return null;
};

/* =========================================================
   SCENE
========================================================= */

const Scene = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  return (
    <>
      <MouseController
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Lighting */}

      <ambientLight intensity={0.45} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={1.2}
        color="#b8c8ff"
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={2}
        color="#2455ff"
      />

      {/* Core */}

      <CoreStar
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Rings */}

      {RINGS.map((ring, index) => (
        <FlatRing
          key={index}
          {...ring}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}

      {/* Background particles */}

      <Sparkles
        count={70}
        scale={[12, 6, 12]}
        size={1.1}
        speed={0.18}
        opacity={0.16}
        color="#8caaff"
      />
    </>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TechnologyOrbit = () => {
  const sectionRef = useRef(null);

  /* Scroll progress */

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,
      offset: [
        'start end',
        'end start',
      ],
    });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 80,
      damping: 22,
      mass: 0.4,
    }
  );

  const canvasY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [70, 0, -70]
  );

  const canvasScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.7, 1],
    [0.88, 1, 1.04, 0.92]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.12, 0.85, 1],
    [0, 1, 1, 0.55]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        bg-[#050505]
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <Container>
        <div
          className="
            flex
            flex-col
            gap-6
            pt-24
            pb-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#ADADAE]
              "
            >
              Technologies You Will Learn
            </p>

            <h3
              className="
                max-w-xl
                text-3xl
                font-medium
                tracking-tight
                text-white
                md:text-4xl
                lg:text-5xl
              "
            >
              Master the modern stack.
            </h3>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-[#ADADAE]
              "
            >
              Learn the technologies powering
              modern digital products, scalable
              applications and intelligent
              systems.
            </p>
          </div>

          <motion.button
            whileHover={{
              x: 6,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              flex
              w-fit
              items-center
              gap-2
              text-sm
              font-medium
              text-[#ADADAE]
              transition-colors
              hover:text-white
            "
          >
            View All
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </Container>

      {/* =================================================
          3D EXPERIENCE
      ================================================= */}

      <motion.div
        style={{
          y: canvasY,
          scale: canvasScale,
          opacity,
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
        "
      >
        <div
          className="
            relative
            h-[430px]
            w-full
            sm:h-[500px]
            md:h-[560px]
            lg:h-[620px]
          "
        >
          <Canvas
            camera={{
              position: [0, 3.5, 15],
              fov: 45,
            }}
            dpr={[
              1,
              1.75,
            ]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference:
                'high-performance',
            }}
            frameloop="always"
            style={{
              width: '100%',
              height: '100%',
              background:
                'transparent',
            }}
          >
            <Scene />
          </Canvas>

          {/* Bottom fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-28
              bg-gradient-to-t
              from-[#050505]
              to-transparent
            "
          />

          {/* Top fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-20
              bg-gradient-to-b
              from-[#050505]
              to-transparent
            "
          />
        </div>
      </motion.div>

      {/* =================================================
          FOOT SPACING
      ================================================= */}

      <div className="h-12 md:h-20" />
    </section>
  );
};

export default TechnologyOrbit;