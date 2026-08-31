import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/923320901442?text=Hello%20Blank%20Slate%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mr-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#18181b] border border-white/15 text-xs text-white font-medium shadow-2xl backdrop-blur-md pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Blank Slate"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative group flex items-center justify-center w-14 h-14 md:w-15 md:h-15 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.65)] transition-shadow duration-300"
      >
        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        <FaWhatsapp size={28} className="relative z-10 text-white drop-shadow-md" />
      </motion.a>
    </aside>
  );
};

export default FloatingWhatsApp;
