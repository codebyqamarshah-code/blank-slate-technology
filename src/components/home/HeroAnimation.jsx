import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { heroScenes } from '../../data/heroScenes';
import HeroSceneContent from './HeroSceneContent';
import HeroControls from './HeroControls';

// SVG icons for each scene — GPU-friendly, no external library needed
const SceneIcon = ({ type, color }) => {
  const icons = {
    web: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <rect x="10" y="20" width="100" height="70" rx="8" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="10" y="20" width="100" height="14" rx="8" fill={color} fillOpacity="0.08" />
        <circle cx="22" cy="27" r="3" fill={color} fillOpacity="0.6" />
        <circle cx="33" cy="27" r="3" fill={color} fillOpacity="0.4" />
        <circle cx="44" cy="27" r="3" fill={color} fillOpacity="0.2" />
        <rect x="20" y="46" width="80" height="6" rx="3" fill={color} fillOpacity="0.15" />
        <rect x="20" y="58" width="55" height="4" rx="2" fill={color} fillOpacity="0.1" />
        <rect x="20" y="68" width="70" height="4" rx="2" fill={color} fillOpacity="0.1" />
        <rect x="20" y="78" width="40" height="4" rx="2" fill={color} fillOpacity="0.1" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="22" stroke={color} strokeWidth="1.5" />
        <circle cx="60" cy="60" r="6" fill={color} fillOpacity="0.4" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 60 + 22 * Math.cos(rad);
          const y1 = 60 + 22 * Math.sin(rad);
          const x2 = 60 + 42 * Math.cos(rad);
          const y2 = 60 + 42 * Math.sin(rad);
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" strokeOpacity="0.4" />
              <circle cx={x2} cy={y2} r="3.5" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
            </g>
          );
        })}
        <circle cx="60" cy="60" r="50" stroke={color} strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 6" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <path d="M35 72 Q20 72 20 57 Q20 44 33 42 Q34 28 50 28 Q62 28 66 40 Q78 36 84 48 Q96 48 96 60 Q96 72 82 72 Z"
          stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.06" />
        <line x1="42" y1="72" x2="42" y2="88" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="60" y1="72" x2="60" y2="92" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <line x1="78" y1="72" x2="78" y2="86" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="42" cy="92" r="3" fill={color} fillOpacity="0.5" />
        <circle cx="60" cy="96" r="3" fill={color} fillOpacity="0.5" />
        <circle cx="78" cy="90" r="3" fill={color} fillOpacity="0.5" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <path d="M30 90 L60 20 L90 90 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.06" />
        <path d="M40 70 L80 70" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="60" cy="20" r="5" fill={color} fillOpacity="0.4" />
        <circle cx="30" cy="90" r="5" fill={color} fillOpacity="0.3" />
        <circle cx="90" cy="90" r="5" fill={color} fillOpacity="0.3" />
        <circle cx="60" cy="60" r="12" stroke={color} strokeWidth="1" strokeOpacity="0.3" fill="none" strokeDasharray="3 4" />
      </svg>
    ),
    transform: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <rect x="12" y="46" width="26" height="26" rx="6" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
        <rect x="47" y="46" width="26" height="26" rx="6" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
        <rect x="82" y="46" width="26" height="26" rx="6" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
        <path d="M38 59 L47 59" stroke={color} strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M73 59 L82 59" stroke={color} strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M44 55 L47 59 L44 63" stroke={color} strokeWidth="1.2" strokeOpacity="0.6" />
        <path d="M79 55 L82 59 L79 63" stroke={color} strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="25" cy="59" r="4" fill={color} fillOpacity="0.4" />
        <circle cx="60" cy="59" r="4" fill={color} fillOpacity="0.4" />
        <circle cx="95" cy="59" r="4" fill={color} fillOpacity="0.4" />
      </svg>
    ),
  };
  return icons[type] || icons.web;
};

// Floating ambient particle — subtle depth effect
const FloatingParticle = ({ x, y, size, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, backgroundColor: color }}
    animate={{ y: [-6, 6, -6], opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const HeroAnimation = ({ isHovered, prefersReducedMotion }) => {
  const [activeScene, setActiveScene] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Parallax — mouse tracking on desktop only
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-4, 4]);

  const currentScene = heroScenes.find((s) => s.id === activeScene);

  const advanceScene = useCallback(() => {
    setActiveScene((prev) => (prev >= heroScenes.length ? 1 : prev + 1));
  }, []);

  // Auto-cycle every 5s — clear & restart whenever paused state or scene changes
  useEffect(() => {
    if (isPaused || isHovered) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(advanceScene, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, isHovered, advanceScene]);

  // Restart progress bar when scene changes due to auto-cycle
  const handleSelectScene = (id) => {
    clearInterval(intervalRef.current);
    setActiveScene(id);
  };

  // Mouse move for 3D tilt — disabled on reduced motion
  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Cinematic central visual animation per scene
  const centralAnim = {
    initial: { scale: 0.88, opacity: 0, rotate: -2 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  };

  // Subtle floating idle for the central SVG
  const idleAnim = prefersReducedMotion
    ? {}
    : {
        animate: { y: [-6, 6, -6], rotate: [-0.5, 0.5, -0.5] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <div
      className="relative w-full h-full flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ─── Device frame ─── */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
        className="relative flex-grow rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden"
        animate={{
          boxShadow: `0 0 60px ${currentScene.glowColor}, 0 0 0 1px rgba(255,255,255,0.05)`,
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm" />

        {/* Radial glow that changes color per scene */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ background: `radial-gradient(ellipse at 50% 50%, ${currentScene.glowColor} 0%, transparent 70%)` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Minimal grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        {/* Browser chrome strip */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-surface/80 border-b border-white/5 flex items-center px-4 gap-2 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="flex-1 mx-4 h-4 rounded-full bg-white/5 flex items-center px-2">
            <span className="text-[9px] text-white/20 truncate">blankslatetechnology.com</span>
          </div>
        </div>

        {/* ─── Central SVG Visual ─── */}
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              initial={centralAnim.initial}
              animate={centralAnim.animate}
              exit={{ scale: 0.92, opacity: 0, rotate: 1, filter: 'blur(4px)' }}
              transition={centralAnim.transition}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-6 rounded-full pointer-events-none"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: `radial-gradient(ellipse, ${currentScene.accentColor}22 0%, transparent 70%)` }}
              />

              {/* Idle float on the SVG */}
              <motion.div
                className="w-36 h-36 md:w-44 md:h-44 relative"
                {...idleAnim}
              >
                <SceneIcon type={currentScene.icon} color={currentScene.accentColor} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Floating particles ─── */}
        {!prefersReducedMotion && (
          <>
            <FloatingParticle x={15} y={20} size={4} delay={0} color={currentScene.accentColor} />
            <FloatingParticle x={80} y={15} size={3} delay={1.2} color={currentScene.accentColor} />
            <FloatingParticle x={88} y={75} size={5} delay={2} color={currentScene.accentColor} />
            <FloatingParticle x={10} y={80} size={3} delay={0.6} color={currentScene.accentColor} />
            <FloatingParticle x={50} y={12} size={4} delay={1.8} color={currentScene.accentColor} />
          </>
        )}

        {/* ─── Overlay scene text ─── */}
        <HeroSceneContent scene={currentScene} />
      </motion.div>

      {/* ─── Scene controls ─── */}
      <div className="mt-4 flex items-center justify-between px-1">
        <HeroControls
          scenes={heroScenes}
          activeScene={activeScene}
          onSelect={handleSelectScene}
        />
        <span className="text-[10px] text-secondary/40 tracking-widest uppercase">
          {currentScene.category}
        </span>
      </div>
    </div>
  );
};

export default HeroAnimation;
