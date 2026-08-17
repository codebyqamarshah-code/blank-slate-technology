import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-2xl mb-16 md:mb-24 ${aligns[align]} ${className}`}>
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-semibold mb-6 text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-secondary text-lg leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
