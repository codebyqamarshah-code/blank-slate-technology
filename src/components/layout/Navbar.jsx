import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Globe } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { allServices } from '../../data/servicesData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Create a quick lookup map for services by slug
  const serviceMap = useMemo(() => {
    const map = new Map();
    allServices.forEach((s) => map.set(s.slug, s));
    return map;
  }, []);

  // 4 Curated Columns covering all services
  const serviceColumns = useMemo(() => [
    {
      category: 'Core Engineering',
      color: '#61DAFB',
      slugs: [
        'react-nextjs-development',
        'flutter-app-development',
        'backend-cloud-development',
        'mobile-app-development',
        'custom-web-development',
      ],
    },
    {
      category: 'Enterprise & Scale',
      color: '#818CF8',
      slugs: [
        'product-engineering',
        'saas-application-development',
        'ecommerce-development',
        'cms-development',
        'custom-application-development',
        'api-backend-development',
      ],
    },
    {
      category: 'AI & Cloud Infrastructure',
      color: '#34D399',
      slugs: [
        'ai-solutions',
        'cloud-devops',
        'cybersecurity',
        'saas-enterprise-development',
      ],
    },
    {
      category: 'Design & Growth',
      color: '#F472B6',
      slugs: [
        'ui-ux-design-service',
        'brand-identity',
        'seo-growth',
        'google-ads-ppc',
        'linkedin-optimization-growth',
        'performance-marketing',
      ],
    },
  ], []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services', isDropdown: true },
    { label: 'Work', path: '/work' },
    { label: 'Institute', path: 'https://blankslateinstitute.pk/', isExternal: true },
    { label: 'Insights', path: '/insights' },
  ];

  // Mouse enter / leave debouncing for desktop dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const closeAllMenus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Close open dropdowns on route change
  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
        }`}
      >
        <Container className="relative flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeAllMenus} className="relative z-50 flex items-center">
            <img
              src="/images/Blank Slate IT Logo-02.png"
              alt="Blank Slate Technologies"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-11 md:h-13' : 'h-14 md:h-17'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => {
                // If it's the Services dropdown trigger
                if (link.isDropdown) {
                  const isServicesActive = location.pathname.startsWith('/services');
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isServicesActive || isServicesOpen
                            ? 'text-white'
                            : 'text-secondary hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180 text-white' : 'text-secondary'
                          }`}
                        />
                      </button>

                      {isServicesActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute bottom-0.5 left-0 right-0 h-[2px] bg-[#3366ff] rounded-full"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  );
                }

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

                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`relative transition-colors ${
                      isActive ? 'text-white' : 'text-secondary hover:text-white'
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

            <Link to="/contact" onClick={closeAllMenus}>
              <Button variant="primary" className="!px-6 !py-2.5 text-sm">
                Let's Talk
              </Button>
            </Link>
          </nav>

          {/* Desktop Services Mega Dropdown */}
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hidden md:block absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[980px] max-w-[calc(100vw-3rem)] z-50 pt-2 pointer-events-auto"
              >
                <div className="bg-[#0b0b12]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] p-6 overflow-hidden">
                  {/* 4 Curated Category Columns */}
                  <div className="grid grid-cols-4 gap-5">
                    {serviceColumns.map((col) => (
                      <div key={col.category} className="space-y-2">
                        <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: col.color }}
                          />
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                            {col.category}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {col.slugs.map((slug) => {
                            const service = serviceMap.get(slug);
                            if (!service) return null;
                            const Icon = service.icon || Globe;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={closeAllMenus}
                                className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all duration-150"
                              >
                                <div
                                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110"
                                  style={{
                                    backgroundColor: `${service.brandColor || col.color}18`,
                                    color: service.brandColor || col.color,
                                  }}
                                >
                                  <Icon size={14} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-medium text-white/85 group-hover/item:text-white transition-colors truncate">
                                    {service.title}
                                  </div>
                                  {service.badge && (
                                    <div className="text-[10px] text-white/40 group-hover/item:text-cyan-400 transition-colors truncate">
                                      {service.badge}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Quick Action Bar */}
                  <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs px-2">
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>End-to-End Enterprise Architecture & Agile Engineering</span>
                    </div>
                    <Link
                      to="/contact"
                      onClick={closeAllMenus}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1.5 transition-colors group/cta"
                    >
                      <span>Free Architecture Consultation</span>
                      <ArrowRight size={13} className="group-hover/cta:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-4 text-2xl font-display">
              {navLinks.map((link, i) => {
                // Services Accordion on Mobile
                if (link.isDropdown) {
                  const isServicesActive = location.pathname.startsWith('/services');
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="border-b border-white/10 pb-3"
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between pl-4 text-left border-l-2 transition-all cursor-pointer ${
                          isServicesActive
                            ? 'text-white border-[#3366ff]'
                            : 'text-white/70 hover:text-white border-transparent'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 text-white/50 ${
                            isMobileServicesOpen ? 'rotate-180 text-cyan-400' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pr-1 pt-3 space-y-1 max-h-[50vh] overflow-y-auto mt-2"
                          >
                            {allServices.map((service) => {
                              const Icon = service.icon || Globe;
                              return (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  onClick={closeAllMenus}
                                  className="flex items-center gap-3 py-2 px-2.5 rounded-lg hover:bg-white/5 text-sm text-white/80 hover:text-white transition-colors"
                                >
                                  <div
                                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                                    style={{
                                      backgroundColor: `${service.brandColor || '#3366ff'}20`,
                                      color: service.brandColor || '#3366ff',
                                    }}
                                  >
                                    <Icon size={14} />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="truncate font-medium text-xs text-white/90">
                                      {service.title}
                                    </div>
                                    {service.badge && (
                                      <div className="text-[10px] text-white/40 truncate">
                                        {service.badge}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                if (link.isExternal) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block pl-4 border-l-2 transition-all text-white/60 hover:text-white border-transparent"
                        onClick={closeAllMenus}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  );
                }

                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`block pl-4 border-l-2 transition-all ${
                        isActive
                          ? 'text-white border-[#3366ff]'
                          : 'text-white/60 hover:text-white border-transparent'
                      }`}
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" onClick={closeAllMenus}>
                <Button variant="primary" className="w-full">
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