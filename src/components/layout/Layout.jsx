"use client";
import React, { useEffect } from 'react';

import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Layout = ({ children }) => {
  

  // Smooth scroll-driven progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // Scroll to top on route change
  

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary transition-colors duration-300">
      
      {/* Neon scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Render outlet directly — no AnimatePresence wrapper here.
          Each page has its own PageTransition for the enter animation.
          Removing mode="wait" eliminates the black flash between pages. */}
      <main className="flex-grow bg-background text-primary transition-colors duration-300">
        {children}
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
};

export default Layout;

