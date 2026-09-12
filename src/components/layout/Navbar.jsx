import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Globe, Sun, Moon } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { allServices } from '../../data/servicesData';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const { theme, toggleTheme, isDark } = useTheme();

  // In light mode, navbar is always light. In dark mode, it turns light on scroll or on /work.
  const isLightNav = !isDark || isScrolled || location.pathname === '/work';

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
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightNav
            ? 'py-3 md:py-3.5 bg-white shadow-sm border-b border-neutral-200'
            : 'py-6 bg-transparent'
        }`}
      >
        <Container className="relative flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeAllMenus} className="relative z-50 flex items-center">
            <img
              src={isLightNav ? '/images/logo-dark.png' : '/images/Blank Slate IT Logo-02.png'}
              alt="Blank Slate Technologies"
              className={`object-contain transition-all duration-300 ${
                isLightNav ? 'h-11 md:h-14' : 'h-14 md:h-17'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 text-base font-medium">
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
                            ? isLightNav ? 'text-black font-semibold' : 'text-white'
                            : isLightNav ? 'text-neutral-600 hover:text-black' : 'text-secondary hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isServicesOpen
                              ? isLightNav ? 'rotate-180 text-black' : 'rotate-180 text-white'
                              : isLightNav ? 'text-neutral-500' : 'text-secondary'
                          }`}
                        />
                      </button>

                      {isServicesActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className={`absolute bottom-0.5 left-0 right-0 h-[2px] rounded-full ${
                            isLightNav ? 'bg-black' : 'bg-[#3366ff]'
                          }`}
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
                      className={`relative transition-colors ${
                        isLightNav ? 'text-neutral-600 hover:text-black' : 'text-secondary hover:text-white'
                      }`}
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
                      isActive
                        ? isLightNav ? 'text-black font-semibold' : 'text-white'
                        : isLightNav ? 'text-neutral-600 hover:text-black' : 'text-secondary hover:text-white'
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className={`absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full ${
                          isLightNav ? 'bg-black' : 'bg-[#3366ff]'
                        }`}
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

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isLightNav
                  ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-yellow-400 border border-white/10'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: -8, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-neutral-700" />}
                </motion.div>
              </AnimatePresence>
            </button>

            <Link to="/contact" onClick={closeAllMenus}>
              <Button
                variant="primary"
                className={`!px-6 !py-2.5 text-sm transition-all duration-300 ${
                  isLightNav
                    ? '!bg-black !text-white hover:!bg-neutral-800 shadow-md'
                    : '!bg-white !text-black hover:!bg-white/90'
                }`}
              >
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
                className="hidden md:block absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[1200px] max-w-[calc(100vw-2.5rem)] z-50 pt-2 pointer-events-auto"
              >
                <div
                  className={`rounded-3xl p-7 lg:p-8 overflow-hidden transition-all duration-300 ${
                    isLightNav
                      ? 'bg-white/98 backdrop-blur-2xl border border-neutral-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)]'
                      : 'bg-[#0c0c14]/98 backdrop-blur-2xl border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]'
                  }`}
                >
                  {/* 4 Curated Category Columns */}
                  <div className="grid grid-cols-4 gap-6 lg:gap-8">
                    {serviceColumns.map((col) => (
                      <div key={col.category} className="space-y-3">
                        <div
                          className={`flex items-center gap-2.5 pb-2.5 border-b ${
                            isLightNav ? 'border-neutral-200' : 'border-white/[0.08]'
                          }`}
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ 
                              backgroundColor: col.color,
                              boxShadow: `0 0 8px ${col.color}90`
                            }}
                          />
                          <span
                            className={`text-xs font-semibold uppercase tracking-wider font-display ${
                              isLightNav ? 'text-neutral-700' : 'text-white/80'
                            }`}
                          >
                            {col.category}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {col.slugs.map((slug) => {
                            const service = serviceMap.get(slug);
                            if (!service) return null;
                            const Icon = service.icon || Globe;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={closeAllMenus}
                                className={`group/item flex items-center gap-3 p-2.5 rounded-2xl border transition-all duration-200 ${
                                  isLightNav
                                    ? 'hover:bg-neutral-100/90 border-transparent hover:border-neutral-200'
                                    : 'hover:bg-white/[0.06] border-transparent hover:border-white/10'
                                }`}
                              >
                                <div
                                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110 border"
                                  style={{
                                    backgroundColor: isLightNav
                                      ? `${service.brandColor || col.color}18`
                                      : `${service.brandColor || col.color}15`,
                                    borderColor: `${service.brandColor || col.color}35`,
                                    color: service.brandColor || col.color,
                                    boxShadow: `0 0 15px ${service.brandColor || col.color}20`,
                                  }}
                                >
                                  <Icon size={18} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div
                                    className={`text-[13px] font-medium transition-colors leading-tight ${
                                      isLightNav
                                        ? 'text-neutral-900 group-hover/item:text-black font-medium'
                                        : 'text-white/90 group-hover/item:text-white'
                                    }`}
                                  >
                                    {service.title}
                                  </div>
                                  {service.badge && (
                                    <div
                                      className={`text-[11px] mt-0.5 transition-colors truncate font-sans ${
                                        isLightNav
                                          ? 'text-neutral-500 group-hover/item:text-blue-600'
                                          : 'text-white/45 group-hover/item:text-cyan-400'
                                      }`}
                                    >
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
                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between text-xs md:text-sm px-2 ${
                      isLightNav
                        ? 'border-neutral-200 text-neutral-600'
                        : 'border-white/[0.08] text-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-medium">End-to-End Enterprise Architecture & Agile Engineering</span>
                    </div>
                    <Link
                      to="/contact"
                      onClick={closeAllMenus}
                      className={`font-semibold flex items-center gap-2 transition-colors group/cta ${
                        isLightNav
                          ? 'text-blue-600 hover:text-blue-700'
                          : 'text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>Free Architecture Consultation</span>
                      <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2 relative z-50">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                isLightNav && !isMobileMenuOpen
                  ? 'bg-neutral-100 text-neutral-800 border border-neutral-200 shadow-sm'
                  : 'bg-white/10 text-yellow-400 border border-white/10'
              }`}
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-neutral-700" />}
            </button>

            <button
              className={`p-2 -mr-2 transition-colors cursor-pointer ${
                isMobileMenuOpen
                  ? isDark ? 'text-white' : 'text-neutral-900'
                  : isLightNav ? 'text-neutral-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            className={`fixed inset-0 z-40 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col overflow-y-auto ${
              isDark ? 'bg-[#050505]/95 text-white' : 'bg-white/98 text-neutral-900'
            }`}
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
                      className={`border-b pb-3 ${isDark ? 'border-white/10' : 'border-neutral-200'}`}
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between pl-4 text-left border-l-2 transition-all cursor-pointer ${
                          isServicesActive
                            ? isDark ? 'text-white border-[#3366ff]' : 'text-black border-neutral-900 font-semibold'
                            : isDark ? 'text-white/70 hover:text-white border-transparent' : 'text-neutral-600 hover:text-black border-transparent'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            isMobileServicesOpen
                              ? isDark ? 'rotate-180 text-cyan-400' : 'rotate-180 text-blue-600'
                              : isDark ? 'text-white/50' : 'text-neutral-400'
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
                                  className={`flex items-center gap-3 py-2 px-2.5 rounded-lg text-sm transition-colors ${
                                    isDark
                                      ? 'hover:bg-white/5 text-white/80 hover:text-white'
                                      : 'hover:bg-neutral-100 text-neutral-700 hover:text-black'
                                  }`}
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
                                    <div className={`truncate font-medium text-xs ${
                                      isDark ? 'text-white/90' : 'text-neutral-900'
                                    }`}>
                                      {service.title}
                                    </div>
                                    {service.badge && (
                                      <div className={`text-[10px] truncate ${
                                        isDark ? 'text-white/40' : 'text-neutral-500'
                                      }`}>
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
                        className={`block pl-4 border-l-2 transition-all ${
                          isDark
                            ? 'text-white/60 hover:text-white border-transparent'
                            : 'text-neutral-600 hover:text-black border-transparent'
                        }`}
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
                          ? isDark ? 'text-white border-[#3366ff]' : 'text-black border-neutral-900 font-semibold'
                          : isDark ? 'text-white/60 hover:text-white border-transparent' : 'text-neutral-600 hover:text-black border-transparent'
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