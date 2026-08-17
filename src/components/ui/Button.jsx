import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', icon: Icon }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 gap-2";
  
  const variants = {
    primary: "bg-white text-background hover:bg-white/90 px-8 py-3.5",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white/50 px-8 py-3.5",
    outline: "bg-transparent text-white border border-border hover:bg-surface px-8 py-3.5",
    ghost: "bg-transparent text-white hover:bg-white/5 px-6 py-3",
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
