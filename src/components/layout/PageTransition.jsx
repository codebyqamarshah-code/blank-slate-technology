"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname(); const location = { pathname };

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full bg-background text-primary transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
