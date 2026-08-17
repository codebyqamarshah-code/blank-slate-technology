import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// PageTransition — always dark, never shows white background
const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full"
      style={{ backgroundColor: '#050505' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
