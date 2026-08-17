import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scene text transitions — smooth cinematic fade-slide
const textVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(4px)' },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, x: 8, transition: { duration: 0.25 } },
};

const HeroSceneContent = ({ scene }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none"
      >
        {/* Eyebrow category */}
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-3 block"
          style={{ color: scene.accentColor }}
        >
          {scene.category}
        </motion.span>

        {/* Main title */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-base md:text-lg font-display font-medium leading-snug max-w-[200px] md:max-w-[240px] mb-5"
        >
          {scene.title}
        </motion.p>

        {/* Tag items */}
        <div className="flex flex-col gap-1.5">
          {scene.items.map((item, i) => (
            <motion.span
              key={item}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-xs font-medium px-3 py-1 rounded-full border"
              style={{
                color: scene.accentColor,
                borderColor: `${scene.accentColor}44`,
                backgroundColor: `${scene.accentColor}10`,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSceneContent;
