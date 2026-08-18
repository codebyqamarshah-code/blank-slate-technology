import React from 'react';
import { motion } from 'framer-motion';

/**
 * ZigzagHeroBackground
 * Animated golden zigzag ribbon on dark background — replaces the About page hero image.
 * Colors and style match the reference image exactly: black bg, diagonal dark bands,
 * golden glowing W-shaped zigzag, grid texture inside the ribbon, sparkle stars at peaks.
 */
const ZigzagHeroBackground = () => {
  // Main W-shaped zigzag path — 2 peaks, smooth sharp angles
  const pathD = 'M 0 420 L 360 95 L 720 420 L 1080 95 L 1440 420';

  // Sparkle positions: at the 2 peaks and center valley
  const sparkles = [
    { cx: 360,  cy: 95,  delay: 0 },
    { cx: 720,  cy: 420, delay: 0.9 },
    { cx: 1080, cy: 95,  delay: 1.8 },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060604 0%, #0c0b06 100%)' }}
    >
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden glow filter */}
          <filter id="goldGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong sparkle glow */}
          <filter id="sparkleGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip the grid to the ribbon shape */}
          <clipPath id="ribbonClip">
            <path d={pathD} strokeWidth="95" stroke="white" fill="none" strokeLinecap="butt" />
          </clipPath>

          {/* Fine grid pattern inside the ribbon */}
          <pattern id="innerGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="16" y2="0" stroke="#222222" strokeWidth="0.65" />
            <line x1="0" y1="0" x2="0" y2="16" stroke="#222222" strokeWidth="0.65" />
          </pattern>
        </defs>

        {/* ── Dark diagonal bands (fixed angle, independent of zigzag) ── */}
        <polygon points="-60,520  290,-20  390,-20   40,520" fill="#111111" opacity="0.95" />
        <polygon points="490,520  840,-20 1020,-20  670,520" fill="#0d0d0d" opacity="0.95" />
        <polygon points="1100,520 1450,-20 1540,-20 1190,520" fill="#111111" opacity="0.95" />

        {/* ── Zigzag ribbon — dark base fill ── */}
        <path d={pathD} fill="none" stroke="#0d0d0d" strokeWidth="98" strokeLinecap="butt" />

        {/* ── Grid texture clipped to ribbon ── */}
        <rect x="0" y="0" width="1440" height="520"
          fill="url(#innerGrid)"
          clipPath="url(#ribbonClip)"
          opacity="0.95"
        />

        {/* ── Outer ambient glow around the ribbon ── */}
        <path d={pathD} fill="none" stroke="#CFCFD0" strokeWidth="4"
          filter="url(#goldGlow)" opacity="0.35" />

        {/* ── Main bright line ── */}
        <motion.path
          d={pathD} fill="none"
          stroke="#CFCFD0" strokeWidth="1.8"
          filter="url(#goldGlow)"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Bright highlight shimmer on top ── */}
        <motion.path
          d={pathD} fill="none"
          stroke="#ffffff" strokeWidth="0.8"
          animate={{ opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* ── Travelling light sweep ── */}
        <motion.path
          d={pathD} fill="none"
          stroke="#CFCFD0" strokeWidth="3"
          strokeDasharray="100 2500"
          filter="url(#goldGlow)"
          animate={{ strokeDashoffset: [100, -2600] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          opacity="0.85"
        />
        {/* Second sweep offset for continuous effect */}
        <motion.path
          d={pathD} fill="none"
          stroke="#CFCFD0" strokeWidth="2"
          strokeDasharray="60 2500"
          filter="url(#goldGlow)"
          animate={{ strokeDashoffset: [100, -2600] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2.5 }}
          opacity="0.6"
        />

        {/* ── Sparkle stars at the 3 key corner points ── */}
        {sparkles.map((pt, i) => (
          <motion.g
            key={i}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: pt.delay }}
          >
            {/* Center bright dot */}
            <circle cx={pt.cx} cy={pt.cy} r="4.5" fill="#CFCFD0" filter="url(#sparkleGlow)" />
            {/* Vertical ray */}
            <line x1={pt.cx} y1={pt.cy - 22} x2={pt.cx} y2={pt.cy + 22}
              stroke="#CFCFD0" strokeWidth="1.2" filter="url(#sparkleGlow)" />
            {/* Horizontal ray */}
            <line x1={pt.cx - 22} y1={pt.cy} x2={pt.cx + 22} y2={pt.cy}
              stroke="#CFCFD0" strokeWidth="1.2" filter="url(#sparkleGlow)" />
            {/* Diagonal rays (thinner) */}
            <line x1={pt.cx - 13} y1={pt.cy - 13} x2={pt.cx + 13} y2={pt.cy + 13}
              stroke="#CFCFD0" strokeWidth="0.7" filter="url(#sparkleGlow)" opacity="0.6" />
            <line x1={pt.cx + 13} y1={pt.cy - 13} x2={pt.cx - 13} y2={pt.cy + 13}
              stroke="#CFCFD0" strokeWidth="0.7" filter="url(#sparkleGlow)" opacity="0.6" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default ZigzagHeroBackground;
