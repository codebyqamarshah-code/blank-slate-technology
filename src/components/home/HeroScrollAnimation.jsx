import React, { useState, useEffect } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
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
    range: [0, 0.25], // midpoint: 0.125
  },
  {
    id: 1,
    label: '02',
    category: 'Intelligent Technology',
    headline: 'AI. Automation.\nMachine Learning.',
    tags: ['Artificial Intelligence', 'Automation', 'Data Science'],
    accent: '#8b5cf6',
    range: [0.25, 0.5], // midpoint: 0.375
  },
  {
    id: 2,
    label: '03',
    category: 'Cloud & Data',
    headline: 'Scalable.\nConnected. Intelligent.',
    tags: ['Cloud Infrastructure', 'Business Intelligence', 'IoT'],
    accent: '#06b6d4',
    range: [0.5, 0.75], // midpoint: 0.625
  },
  {
    id: 3,
    label: '04',
    category: 'Digital Transformation',
    headline: 'Ideas → Technology\n→ Growth.',
    tags: ['Strategy', 'Innovation', 'Scale'],
    accent: '#10b981',
    range: [0.75, 1], // midpoint: 0.875
  },
];

// ─── Progress Indicators ──────────────────────────────────────────────────────
const ProgressDots = ({ currentIndex, onDotClick }) => (
  <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
    {stages.map((s, index) => (
      <button 
        key={s.id} 
        onClick={() => onDotClick(index)}
        className="flex flex-col items-center gap-1 group outline-none"
      >
        <div className="w-8 h-[2px] rounded-full bg-white/20 overflow-hidden">
          <motion.div 
            initial={false}
            animate={{ 
              backgroundColor: index === currentIndex ? s.accent : 'transparent',
              opacity: index === currentIndex ? 1 : 0
            }}
            className="w-full h-full rounded-full transition-all duration-300"
          />
        </div>
        <span
          className={`text-[8px] sm:text-[10px] font-medium tracking-widest drop-shadow-md transition-all duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'}`}
          style={{ color: index === currentIndex ? s.accent : '#fff' }}
        >
          {s.label}
        </span>
      </button>
    ))}
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const HeroScrollAnimation = ({ prefersReducedMotion }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stages.length);
    }, 4500); // Wait 4.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // Drive the 3D globe using a spring motion value based on the active stage's midpoint
  const smoothProgress = useSpring(0.125, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const activeStage = stages[currentIndex];
    const targetProgress = (activeStage.range[0] + activeStage.range[1]) / 2;
    smoothProgress.set(targetProgress);
  }, [currentIndex, smoothProgress]);

  const activeStage = stages[currentIndex];

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[580px] rounded-[1.75rem] sm:rounded-[2.5rem] border border-white/[0.07] overflow-hidden bg-[#050505]">
      
      {/* 3D WebGL Canvas Layer */}
      <HeroScene3D smoothProgress={smoothProgress} prefersReducedMotion={prefersReducedMotion} />

      {/* HTML Text Overlay (AnimatePresence guarantees no overlapping text) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 z-20 pointer-events-none"
        >
          <div
            className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-3 sm:mb-4 drop-shadow-md"
            style={{ color: activeStage.accent, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            {activeStage.category}
          </div>
          
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-display font-medium text-white tracking-tight leading-[1.15] mb-5 sm:mb-7 whitespace-pre-line"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            {activeStage.headline}
          </h2>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {activeStage.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-md"
                style={{
                  color: '#ffffff',
                  borderColor: `${activeStage.accent}80`,
                  backgroundColor: `${activeStage.accent}33`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 shadow-[0_0_8px_currentColor]"
                  style={{ backgroundColor: activeStage.accent }}
                />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <ProgressDots currentIndex={currentIndex} onDotClick={setCurrentIndex} />
      
      {/* Subtle glass reflection overlay */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/5 pointer-events-none z-40 bg-gradient-to-br from-white/[0.03] to-transparent" />
    </div>
  );
};

export default HeroScrollAnimation;
