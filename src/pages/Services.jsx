import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Building2,
  Users,
  Store,
  Wallet,
  Stethoscope,
  GraduationCap,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import Process from '../components/home/Process';
import CTA from '../components/home/CTA';
import TypewriterText from '../components/ui/TypewriterText';
import { serviceCategories, allServices, enterpriseSpecialties } from '../data/servicesData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(s => s.categoryId === selectedCategory);

  return (
    <PageTransition>
      <div className="w-full pt-16">
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <Container className="py-16 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-accent mb-6"
          >
            <Sparkles size={14} />
            <span>Full-Suite Software House & Enterprise Systems</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-8 leading-[1.1]"
          >
            Custom enterprise software for <br />
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 60%, #7a7a7c 100%)' }}
            >
              <TypewriterText
                words={['modern enterprises.', 'scaling businesses.', 'global industries.']}
                typingSpeed={65}
                pauseTime={2800}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-3xl mx-auto"
          >
            From custom Enterprise ERPs and Sales CRMs to high-speed Retail POS, Healthcare HMS, and AI systems, we build scalable software architectures that streamline business operations.
          </motion.p>
        </Container>

        {/* =========================================================
            FLAGSHIP ENTERPRISE SYSTEMS SHOWCASE
        ========================================================= */}
        <section className="py-16 bg-surface/20 border-y border-white/5">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">Core Solutions</p>
                <h2 className="text-2xl md:text-4xl font-display font-medium text-white">
                  Flagship Business Systems
                </h2>
              </div>
              <p className="text-sm text-secondary max-w-md">
                Pre-engineered architectural frameworks customized to match your company's operational hierarchy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseSpecialties.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={idx}
                    to={`/services/${item.slug}`}
                    className="p-7 rounded-3xl bg-surface/40 border border-white/10 hover:border-accent/40 hover:bg-surface/80 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all">
                        <ItemIcon size={22} />
                      </div>
                      <h3 className="text-xl font-display font-medium text-white mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-secondary leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                      <span>Explore Architecture</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =========================================================
            A-TO-Z SERVICES DIRECTORY & CATEGORY FILTERS
        ========================================================= */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
                All Engineering & Software Services
              </h2>
              <p className="text-sm text-secondary">
                Filter by category to view detailed technical specifications, tech stacks, and workflows.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                    : 'bg-surface/60 text-secondary hover:text-white hover:bg-surface border border-white/5'
                }`}
              >
                All Systems & Services ({allServices.length})
              </button>

              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black font-semibold shadow-lg shadow-white/10'
                      : 'bg-surface/60 text-secondary hover:text-white hover:bg-surface border border-white/5'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence>
                {filteredServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      layout
                      key={service.slug}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, delay: idx * 0.03 }}
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        className="group flex flex-col justify-between h-full p-8 rounded-3xl bg-surface/40 border border-white/10 hover:border-accent/40 hover:bg-surface/80 hover:shadow-[0_10px_30px_rgba(51,102,255,0.1)] transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                              <Icon size={24} />
                            </div>
                            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                              {service.badge}
                            </span>
                          </div>

                          <span className="text-xs uppercase tracking-wider text-accent/80 font-medium block mb-1">
                            {service.categoryName}
                          </span>
                          <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3 group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-secondary leading-relaxed mb-6">
                            {service.shortDescription}
                          </p>

                          {/* Quick Highlights */}
                          <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                            {service.highlights.slice(0, 2).map((hl, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-secondary">
                                <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold text-white group-hover:text-accent transition-colors">
                          <span>Explore System Specs</span>
                          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </Container>
        </section>

        <Process />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Services;
