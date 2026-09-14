"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const hasMarginOverride = className.includes('mb-');

  return (
    <div className={`max-w-2xl ${hasMarginOverride ? '' : 'mb-6 md:mb-8'} ${aligns[align]} ${className}`}>
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm md:text-base mb-2 md:mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-[3.25rem] font-semibold mb-3 md:mb-4 text-balance leading-tight tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-secondary text-lg md:text-xl leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
