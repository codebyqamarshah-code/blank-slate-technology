import React from 'react';
import { motion } from 'framer-motion';

// Dot / numbered scene indicators at bottom of animation panel
const HeroControls = ({ scenes, activeScene, onSelect }) => {
  return (
    <div className="flex items-center gap-3" role="tablist" aria-label="Animation scenes">
      {scenes.map((scene) => {
        const isActive = scene.id === activeScene;
        return (
          <button
            key={scene.id}
            role="tab"
            aria-selected={isActive}
            aria-label={`Scene ${scene.label}: ${scene.category}`}
            onClick={() => onSelect(scene.id)}
            className="group flex flex-col items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            {/* Progress bar */}
            <div className="w-8 md:w-10 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                key={`bar-${scene.id}-${isActive}`}
                className="h-full rounded-full"
                style={{ backgroundColor: scene.accentColor }}
                initial={{ width: '0%' }}
                animate={{ width: isActive ? '100%' : '0%' }}
                transition={{ duration: isActive ? 5 : 0.3, ease: 'linear' }}
              />
            </div>
            {/* Label */}
            <span
              className="text-[9px] font-medium tracking-widest transition-colors duration-300"
              style={{ color: isActive ? scene.accentColor : 'rgba(161,161,170,0.5)' }}
            >
              {scene.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default HeroControls;
