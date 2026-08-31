import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

const Layout = () => {
  const location = useLocation();

  // Smooth scroll-driven progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#050505' }}>
      
      {/* Neon scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Render outlet directly — no AnimatePresence wrapper here.
          Each page has its own PageTransition for the enter animation.
          Removing mode="wait" eliminates the black flash between pages. */}
      <main className="flex-grow" style={{ backgroundColor: '#050505' }}>
        <Outlet />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
};

export default Layout;

