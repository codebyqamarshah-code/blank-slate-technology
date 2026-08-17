import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

// Page transition variants - fade only, no position shifts that cause white gaps
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const Layout = () => {
  const location = useLocation();

  // Smooth scroll-driven progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // Scroll to top on route change — prevents leftover scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    // The outer div is always dark — never shows white
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#050505' }}>
      
      {/* Neon scroll progress bar — stays at top, always visible */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex-grow" style={{ backgroundColor: '#050505' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ backgroundColor: '#050505', minHeight: '100%' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
