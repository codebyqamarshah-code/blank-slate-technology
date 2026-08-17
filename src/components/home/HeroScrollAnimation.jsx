import React, { useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import HeroScene3D from './HeroScene3D';

// ─── Scene data ──────────────────────────────────────────────────────────────
const stages = [
  {
    id: 0,
    label: '01',
    category: 'Digital Products',
    headline: 'Web. Mobile.\nE-Commerce.',
    tags: ['Web Platforms', 'Native Apps', 'E-Commerce'],
    accent: '#3b82f6',
    range: [0, 0.25],
  },
  {
    id: 1,
    label: '02',
    category: 'Intelligent Technology',
    headline: 'AI. Automation.\nMachine Learning.',
    tags: ['Artificial Intelligence', 'Automation', 'Data Science'],
    accent: '#8b5cf6',
    range: [0.25, 0.5],
  },
  {
    id: 2,
    label: '03',
    category: 'Cloud & Data',
    headline: 'Scalable.\nConnected. Intelligent.',
    tags: ['Cloud Infrastructure', 'Business Intelligence', 'IoT'],
    accent: '#06b6d4',
    range: [0.5, 0.75],
  },
  {
    id: 3,
    label: '04',
    category: 'Digital Transformation',
    headline: 'Ideas → Technology\n→ Growth.',
    tags: ['Strategy', 'Innovation', 'Scale'],
    accent: '#10b981',
    range: [0.75, 1],
  },
];

// ─── Single HTML Text Layer ──────────────────────────────────────────────────
const StageText = ({ stage, smoothProgress, prefersReducedMotion }) => {
  const [start, end] = stage.range;
  const isFirst = stage.id === 0;
  const isLast = stage.id === stages.length - 1;

  const opacityIn = isFirst ? 0 : start - 0.04;
  const opacityOut = isLast ? 1 : end - 0.04;
  const opacity = useTransform(
    smoothProgress,
    [opacityIn, start + 0.04, opacityOut, isLast ? 1 : end + 0.04],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  const y = useTransform(
    smoothProgress,
    [opacityIn, start + 0.04, opacityOut, isLast ? 1 : end + 0.04],
    [20, 0, 0, -20]
  );

  return (
    <motion.div
      style={{ opacity, y: prefersReducedMotion ? 0 : y, scale: prefersReducedMotion ? 1 : 0.98 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 z-20 pointer-events-none"
    >
      <div
        className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-3 sm:mb-4"
        style={{ color: stage.accent, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
      >
        {stage.category}
      </div>

      <h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-display font-medium text-white tracking-tight leading-[1.15] mb-5 sm:mb-7 whitespace-pre-line"
        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
      >
        {stage.headline}
      </h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {stage.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              color: '#ffffff',
              borderColor: `${stage.accent}80`,
              backgroundColor: `${stage.accent}22`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: stage.accent }}
            />
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Single progress dot (hooks must live in component, not inside map) ───────
const ProgressDot = ({ s, smoothProgress }) => {
  const [start, end] = s.range;
  const active = useTransform(smoothProgress, [start, start + 0.01, end - 0.01, end], [0, 1, 1, 0]);
  const labelOpacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0.3, 1, 1, 0.3]);
  return (
    <motion.div className="flex flex-col items-center gap-1">
      <div className="w-8 h-[2px] rounded-full bg-white/20 overflow-hidden">
        <motion.div style={{ opacity: active, backgroundColor: s.accent }} className="w-full h-full rounded-full" />
      </div>
      <motion.span
        style={{ opacity: labelOpacity, color: s.accent }}
        className="text-[8px] sm:text-[10px] font-medium tracking-widest drop-shadow-md"
      >
        {s.label}
      </motion.span>
    </motion.div>
  );
};

// ─── Progress Indicators ──────────────────────────────────────────────────────
const ProgressDots = ({ smoothProgress }) => (
  <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-none">
    {stages.map((s) => (
      <ProgressDot key={s.id} s={s} smoothProgress={smoothProgress} />
    ))}
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const HeroScrollAnimation = ({ scrollYProgress, prefersReducedMotion }) => {
  const autoProgress = useMotionValue(0);

  useEffect(() => {
    // Auto-slide through all 4 stages over 16 seconds (4s per stage), looping infinitely
    const controls = animate(autoProgress, 1, {
      duration: 16,
      ease: "linear",
      repeat: Infinity,
    });
    return controls.stop;
  }, [autoProgress]);

  // Combine scroll progress and auto progress.
  // If user scrolls down slightly (>0.005), snap to their scroll position and pause auto-slide effect.
  const combinedProgress = useTransform(
    [scrollYProgress, autoProgress],
    ([scroll, auto]) => (scroll > 0.005 ? scroll : auto)
  );

  // Smooth spring — higher stiffness = faster response, higher damping = no bouncing
  const smoothProgress = useSpring(combinedProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.0005,
  });

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[580px] rounded-[1.75rem] sm:rounded-[2.5rem] border border-white/[0.07] overflow-hidden bg-[#050505]">
      
      {/* 3D WebGL Canvas Layer */}
      <HeroScene3D smoothProgress={smoothProgress} prefersReducedMotion={prefersReducedMotion} />

      {/* HTML Text Overlays */}
      {stages.map((stage) => (
        <StageText
          key={stage.id}
          stage={stage}
          smoothProgress={smoothProgress}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}

      <ProgressDots smoothProgress={smoothProgress} />
      
      {/* Subtle glass reflection overlay */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/5 pointer-events-none z-40 bg-gradient-to-br from-white/[0.03] to-transparent" />
    </div>
  );
};

export default HeroScrollAnimation;
