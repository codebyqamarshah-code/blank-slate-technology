"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Sparkles, Target, Users, Compass, Heart, ShieldCheck } from 'lucide-react';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

const values = [
  { 
    title: "Pushing Boundaries", 
    desc: "We constantly challenge the status quo to discover innovative solutions that propel businesses forward.",
    color: "#38BDF8", // Cyan / Electric Blue
    icon: Rocket
  },
  { 
    title: "Rapid Advancement", 
    desc: "Agility is at our core. We move fast, adapt quickly, and deliver results without compromising quality.",
    color: "#F59E0B", // Amber / Gold
    icon: Zap
  },
  { 
    title: "Enthusiasm", 
    desc: "We bring passion and energy to every project, deeply caring about the outcomes we generate.",
    color: "#EC4899", // Pink / Rose
    icon: Sparkles
  },
  { 
    title: "Attention to Detail", 
    desc: "Precision matters. We craft pixel-perfect designs and write robust, maintainable code.",
    color: "#818CF8", // Indigo
    icon: Target
  },
  { 
    title: "Teamwork", 
    desc: "Collaboration is our superpower. We work seamlessly with our partners to achieve shared goals.",
    color: "#10B981", // Emerald Green
    icon: Users
  },
  { 
    title: "Self-Driven", 
    desc: "Proactive and autonomous, we take ownership of our work and drive it to successful completion.",
    color: "#A855F7", // Purple / Violet
    icon: Compass
  },
  { 
    title: "Humility", 
    desc: "We leave egos at the door, remaining open to feedback and constantly eager to learn.",
    color: "#06B6D4", // Teal / Cyan
    icon: Heart
  },
  { 
    title: "Commitment", 
    desc: "We are dedicated to long-term success, standing by our partners through every stage of growth.",
    color: "#3B82F6", // Royal Blue
    icon: ShieldCheck
  },
];

const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDark } = useTheme();

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <div className="md:w-1/3">
            <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-primary font-display">
              Our Core Values
            </h2>
            <p className="text-secondary leading-relaxed text-base">
              These principles guide everything we do—from how we write code to how we partner with our clients to engineer digital success.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-3.5 md:gap-5">
              {values.map((val, i) => {
                const isHovered = hoveredIndex === i;
                const ValueIcon = val.icon;

                return (
                  <div 
                    key={val.title}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="px-5 py-3.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center gap-2.5 relative select-none"
                      style={{
                        backgroundColor: isHovered
                          ? `${val.color}15`
                          : (isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.04)'),
                        borderColor: isHovered
                          ? val.color
                          : (isDark ? `${val.color}30` : `${val.color}50`),
                        boxShadow: isHovered 
                          ? `0 0 25px ${val.color}40, inset 0 0 15px ${val.color}15` 
                          : (isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.03)'),
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                      }}
                    >
                      {/* Vibrant Icon */}
                      <span 
                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? `${val.color}25` : `${val.color}15`,
                        }}
                      >
                        <ValueIcon 
                          size={15} 
                          style={{ color: val.color }} 
                          className="transition-transform duration-300 group-hover:scale-110" 
                        />
                      </span>

                      {/* Title */}
                      <span 
                        className="font-medium text-sm md:text-base transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? (isDark ? '#FFFFFF' : val.color)
                            : (isDark ? 'rgba(255, 255, 255, 0.85)' : '#1e293b'),
                        }}
                      >
                        {val.title}
                      </span>
                    </motion.div>
                    
                    {/* Tooltip Card with Matching Color Accent */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-64 md:w-72 p-4 rounded-2xl border shadow-2xl z-30 pointer-events-none ${
                            isDark ? 'bg-[#0F0F14]' : 'bg-white shadow-xl'
                          }`}
                          style={{
                            borderColor: `${val.color}60`,
                            boxShadow: `0 15px 35px -5px rgba(0,0,0,${isDark ? '0.8' : '0.15'}), 0 0 25px ${val.color}25`
                          }}
                        >
                          {/* Colorful top accent bar */}
                          <div 
                            className="h-1 w-12 rounded-full mb-2.5" 
                            style={{ backgroundColor: val.color }} 
                          />
                          <p className={`text-xs md:text-sm leading-relaxed font-sans ${
                            isDark ? 'text-gray-300' : 'text-neutral-700'
                          }`}>
                            {val.desc}
                          </p>
                          {/* Arrow */}
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent"
                            style={{ borderTopColor: val.color }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Values;
