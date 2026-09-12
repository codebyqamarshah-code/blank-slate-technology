import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/**
 * ZigzagHeroBackground
 * Animated zigzag ribbon on the About page hero.
 * Light mode: Clean white background with architectural grid and energetic moving black line.
 * Dark mode: Dark carbon background with glowing silver ribbon and light sweeps.
 */
const ZigzagHeroBackground = () => {
  const { isDark } = useTheme();

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
      className="absolute inset-0 overflow-hidden transition-colors duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(160deg, #060604 0%, #0c0b06 100%)'
          : 'linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dark mode glow filter */}
          <filter id="goldGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Light mode drop shadow filter for sharp contrast */}
          <filter id="darkGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.18" />
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
            <line
              x1="0" y1="0" x2="16" y2="0"
              stroke={isDark ? '#222222' : '#cbd5e1'}
              strokeWidth={isDark ? '0.65' : '0.8'}
            />
            <line
              x1="0" y1="0" x2="0" y2="16"
              stroke={isDark ? '#222222' : '#cbd5e1'}
              strokeWidth={isDark ? '0.65' : '0.8'}
            />
          </pattern>
        </defs>

        {/* ── Diagonal architectural bands ── */}
        <polygon
          points="-60,520  290,-20  390,-20   40,520"
          fill={isDark ? '#111111' : '#f1f5f9'}
          opacity={isDark ? 0.95 : 0.75}
        />
        <polygon
          points="490,520  840,-20 1020,-20  670,520"
          fill={isDark ? '#0d0d0d' : '#e2e8f0'}
          opacity={isDark ? 0.95 : 0.8}
        />
        <polygon
          points="1100,520 1450,-20 1540,-20 1190,520"
          fill={isDark ? '#111111' : '#f1f5f9'}
          opacity={isDark ? 0.95 : 0.75}
        />

        {/* ── Zigzag ribbon — base fill ── */}
        <path
          d={pathD}
          fill="none"
          stroke={isDark ? '#0d0d0d' : '#f8fafc'}
          strokeWidth="98"
          strokeLinecap="butt"
        />

        {/* ── Grid texture clipped to ribbon ── */}
        <rect
          x="0"
          y="0"
          width="1440"
          height="520"
          fill="url(#innerGrid)"
          clipPath="url(#ribbonClip)"
          opacity={isDark ? 0.95 : 0.9}
        />

        {/* ── Outer ambient border around ribbon ── */}
        <path
          d={pathD}
          fill="none"
          stroke={isDark ? '#CFCFD0' : '#0f172a'}
          strokeWidth={isDark ? '4' : '3'}
          filter={isDark ? 'url(#goldGlow)' : undefined}
          opacity={isDark ? 0.35 : 0.12}
        />

        {/* ── Main line contour ── */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={isDark ? '#CFCFD0' : '#0f172a'}
          strokeWidth={isDark ? '1.8' : '2'}
          filter={isDark ? 'url(#goldGlow)' : 'url(#darkGlow)'}
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Highlight shimmer line ── */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={isDark ? '#ffffff' : '#334155'}
          strokeWidth="0.8"
          animate={{ opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* ── Travelling light/dark sweep 1 (The Moving Line) ── */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={isDark ? '#CFCFD0' : '#000000'}
          strokeWidth={isDark ? '3' : '3.5'}
          strokeDasharray="120 2500"
          filter={isDark ? 'url(#goldGlow)' : 'url(#darkGlow)'}
          animate={{ strokeDashoffset: [120, -2600] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          opacity={isDark ? 0.85 : 0.95}
        />

        {/* ── Travelling light/dark sweep 2 ── */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={isDark ? '#CFCFD0' : '#1e293b'}
          strokeWidth={isDark ? '2' : '2.5'}
          strokeDasharray="70 2500"
          filter={isDark ? 'url(#goldGlow)' : 'url(#darkGlow)'}
          animate={{ strokeDashoffset: [70, -2600] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2.5 }}
          opacity={isDark ? 0.6 : 0.8}
        />

        {/* ── Sparkle stars at the 3 key corner points ── */}
        {sparkles.map((pt, i) => (
          <motion.g
            key={i}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: pt.delay }}
          >
            {/* Center dot */}
            <circle
              cx={pt.cx}
              cy={pt.cy}
              r="4.5"
              fill={isDark ? '#CFCFD0' : '#000000'}
              filter={isDark ? 'url(#sparkleGlow)' : 'url(#darkGlow)'}
            />
            {/* Vertical ray */}
            <line
              x1={pt.cx} y1={pt.cy - 22}
              x2={pt.cx} y2={pt.cy + 22}
              stroke={isDark ? '#CFCFD0' : '#0f172a'}
              strokeWidth="1.2"
              filter={isDark ? 'url(#sparkleGlow)' : undefined}
            />
            {/* Horizontal ray */}
            <line
              x1={pt.cx - 22} y1={pt.cy}
              x2={pt.cx + 22} y2={pt.cy}
              stroke={isDark ? '#CFCFD0' : '#0f172a'}
              strokeWidth="1.2"
              filter={isDark ? 'url(#sparkleGlow)' : undefined}
            />
            {/* Diagonal rays */}
            <line
              x1={pt.cx - 13} y1={pt.cy - 13}
              x2={pt.cx + 13} y2={pt.cy + 13}
              stroke={isDark ? '#CFCFD0' : '#0f172a'}
              strokeWidth="0.7"
              filter={isDark ? 'url(#sparkleGlow)' : undefined}
              opacity={0.6}
            />
            <line
              x1={pt.cx + 13} y1={pt.cy - 13}
              x2={pt.cx - 13} y2={pt.cy + 13}
              stroke={isDark ? '#CFCFD0' : '#0f172a'}
              strokeWidth="0.7"
              filter={isDark ? 'url(#sparkleGlow)' : undefined}
              opacity={0.6}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default ZigzagHeroBackground;
