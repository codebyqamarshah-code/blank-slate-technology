import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Institute', path: 'https://blankslateinstitute.pk/', isExternal: true },
    { label: 'Insights', path: '/insights' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center">
            <img
              src="/images/Blank Slate IT Logo-02.png"
              alt="Blank Slate Technologies"
              className={`object-contain transition-all duration-300 ${
                isScrolled
                  ? 'h-11 md:h-13'
                  : 'h-14 md:h-17'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = !link.isExternal && location.pathname === link.path;

                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative transition-colors text-secondary hover:text-white"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`relative transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-secondary hover:text-white'
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#3366ff] rounded-full"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link to="/contact">
              <Button
                variant="primary"
                className="!px-6 !py-2.5 text-sm"
              >
                Let's Talk
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-display">
              {navLinks.map((link, i) => {
                const isActive = !link.isExternal && location.pathname === link.path;

                if (link.isExternal) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block pl-4 border-l-2 transition-all text-white/60 hover:text-white border-transparent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block pl-4 border-l-2 transition-all ${
                        isActive
                          ? 'text-white border-[#3366ff]'
                          : 'text-white/60 hover:text-white border-transparent'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;