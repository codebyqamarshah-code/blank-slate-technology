import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', icon: Icon }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 gap-2";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-3.5 shadow-sm",
    secondary: "bg-transparent text-neutral-800 border border-neutral-300 hover:border-neutral-900 dark:text-white dark:border-white/20 dark:hover:border-white/50 px-8 py-3.5",
    outline: "bg-transparent text-neutral-800 border border-neutral-300 hover:bg-neutral-100 dark:text-white dark:border-border dark:hover:bg-surface px-8 py-3.5",
    ghost: "bg-transparent text-neutral-700 hover:text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5 px-6 py-3",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </motion.button>
  );
};

export default Button;
