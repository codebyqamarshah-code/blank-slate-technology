import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  ChevronDown, 
  Sparkles, 
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Clock,
  Lock,
  Code2
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getServiceBySlug, allServices } from '../data/servicesData';

const WHATSAPP_NUMBER = '923320901442';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-accent">
            <Layers size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Service Not Found</h1>
          <p className="text-secondary max-w-md mb-8">The technology or system you are looking for might have been moved or updated.</p>
          <Link to="/services">
            <Button variant="primary" icon={ArrowLeft}>Back to Services</Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  const IconComponent = service.icon || Globe;
  const brandColor = service.brandColor || '#3366ff';
  const relatedServices = allServices.filter(s => s.categoryId === service.categoryId && s.slug !== service.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Blank Slate, I am interested in your ${service.title} engineering services for an upcoming project.`
  )}`;

  return (
    <PageTransition>
      <div className="w-full pt-28 pb-20 overflow-hidden">
        
        {/* =========================================================
            1. HERO SECTION (With Real Tech Logo & Brand Glow)
        ========================================================= */}
        <section className="relative pb-16 md:pb-24 border-b border-white/5">
          {/* Ambient Glows */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none"
            style={{ backgroundColor: brandColor }}
          />

          <Container className="relative z-10">
            {/* Breadcrumb Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs md:text-sm text-secondary mb-8"
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white font-medium">{service.title}</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-accent mb-6"
                >
                  <Sparkles size={14} />
                  <span>{service.categoryName || 'Engineering Service'}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-white/80">{service.badge}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mb-10"
                >
                  {service.heroDescription}
                </motion.p>

                {/* Primary Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-sm hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:scale-105"
                  >
                    <FaWhatsapp size={19} />
                    <span>Instant WhatsApp Consultation</span>
                  </a>

                  <Link to="/contact">
                    <Button variant="ghost" className="!px-7 !py-3.5 text-base border border-white/10 hover:border-white/30" icon={ArrowRight}>
                      Request Technical Proposal
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right Column: Hero Visual Card with Brand Icon */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group"
                >
                  <div 
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: brandColor }}
                  />
                  
                  {/* Floating Brand Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl border flex items-center justify-center mb-6 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      backgroundColor: `${brandColor}15`, 
                      borderColor: `${brandColor}40`,
                      boxShadow: `0 0 35px ${brandColor}30` 
                    }}
                  >
                    <IconComponent size={40} style={{ color: brandColor }} />
                  </div>

                  <h3 className="text-xl font-display font-medium text-white mb-2">Engineered For Production</h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    Battle-tested architectural standards, high-availability data layers, automated testing, and guaranteed 100% intellectual property transfer.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/80">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-1.5"><Lock size={13} /> Code Ownership</span>
                      <span className="font-semibold text-white">100% IP Transfer</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-1.5"><Clock size={13} /> Sprint Cadence</span>
                      <span className="font-semibold text-white">2-Week Agile Drops</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-1.5"><ShieldCheck size={13} /> Post-Launch SLA</span>
                      <span className="font-semibold text-white">Dedicated Support</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            2. TECH CREDENTIALS & ECOSYSTEM STRIP (Image 3 inspired)
        ========================================================= */}
        {service.credentials && service.credentials.length > 0 && (
          <section className="py-6 border-b border-white/5 bg-white/[0.015]">
            <Container>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-secondary/60 font-mono">
                  Ecosystem & Standards:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {service.credentials.map((cred, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-white/90"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            3. ARCHITECTURE HIGHLIGHTS & OVERVIEW (Image 3 inspired)
        ========================================================= */}
        {service.highlights && service.highlights.length > 0 && (
          <section className="py-16 md:py-24 border-b border-white/5 bg-surface/30">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-3">
                    Architectural Excellence
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight mb-6">
                    What makes our engineering approach fundamentally different.
                  </h2>
                  <p className="text-secondary text-sm md:text-base leading-relaxed mb-8">
                    We do not use cookie-cutter templates or low-quality offshore shortcuts. Every line of code is written with clean architecture, strict type definitions, optimized network payloads, and complete security compliance.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
                  >
                    <span>Discuss your project specifications with an architect</span>
                    <ArrowRight size={15} />
                  </a>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="p-5 rounded-2xl bg-surface/60 border border-white/10 hover:border-accent/40 transition-all flex items-start gap-3.5 group"
                    >
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border"
                        style={{ backgroundColor: `${brandColor}15`, borderColor: `${brandColor}40` }}
                      >
                        <CheckCircle2 size={16} style={{ color: brandColor }} />
                      </div>
                      <span className="text-sm font-medium text-white/90 leading-snug group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            4. PERFORMANCE METRICS BAR (Image 3 inspired)
        ========================================================= */}
        {service.metrics && service.metrics.length > 0 && (
          <section className="py-12 border-b border-white/5 bg-gradient-to-r from-surface via-surface/80 to-surface">
            <Container>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {service.metrics.map((metric, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span 
                      className="text-3xl sm:text-4xl font-display font-bold block mb-1"
                      style={{ color: brandColor }}
                    >
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-secondary">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            5. BUSINESS SOLUTIONS DELIVERED
        ========================================================= */}
        {service.solutionsDelivered && service.solutionsDelivered.length > 0 && (
          <section className="py-20 md:py-28 bg-surface/20 border-b border-white/5 relative">
            <Container>
              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  <ShieldCheck size={14} />
                  <span>Engineered Business Solutions</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-4">
                  Transforming operational challenges into automated systems.
                </h2>
                <p className="text-secondary text-base md:text-lg">
                  How our tailored software architecture replaces manual bottlenecks with seamless, automated workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.solutionsDelivered.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-7 md:p-8 rounded-3xl bg-surface/60 border border-white/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-2">
                        Operational Challenge
                      </span>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        "{item.challenge}"
                      </p>

                      <div className="pt-6 border-t border-white/10 mb-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                          <CheckCircle size={15} className="text-accent" />
                          <span>The Blank Slate Architecture</span>
                        </div>
                        <p className="text-secondary text-sm leading-relaxed mb-6">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {item.value && (
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                          <TrendingUp size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-secondary/70 block">Business Result</span>
                          <span className="text-xs font-semibold text-white">{item.value}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            6. KEY CAPABILITIES (Modular Feature Grid)
        ========================================================= */}
        {service.capabilities && service.capabilities.length > 0 && (
          <section className="py-20 md:py-28 border-b border-white/5">
            <Container>
              <div className="max-w-2xl mb-16">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Capabilities</p>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                  Core capabilities & system modules.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-7 md:p-8 rounded-3xl bg-surface/50 border border-white/10 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-105"
                        style={{ backgroundColor: `${brandColor}15`, borderColor: `${brandColor}40` }}
                      >
                        <Zap size={18} style={{ color: brandColor }} />
                      </div>
                      <h3 className="text-xl font-display font-medium text-white mb-2">{cap.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed">{cap.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            7. TECH STACK (Ecosystem Badges)
        ========================================================= */}
        {service.techStack && service.techStack.length > 0 && (
          <section className="py-16 md:py-20 bg-surface/30 border-b border-white/5">
            <Container>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">Technologies</p>
                  <h2 className="text-2xl md:text-4xl font-display font-medium text-white">
                    Engineered with robust tech stacks.
                  </h2>
                </div>
                <p className="text-sm text-secondary max-w-md">
                  Modern, enterprise-tested technologies ensuring high concurrency, data integrity, and low latency.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
                {service.techStack.map((tech, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center"
                  >
                    <span className="text-white font-medium text-sm mb-1">{tech.name}</span>
                    <span className="text-[11px] text-secondary font-mono">{tech.role}</span>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            8. DEVELOPMENT LIFECYCLE / PROCESS
        ========================================================= */}
        {service.process && service.process.length > 0 && (
          <section className="py-20 md:py-28 border-b border-white/5">
            <Container>
              <div className="max-w-2xl mb-16">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Our Methodology</p>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                  How we deliver your custom system.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative p-6 rounded-2xl bg-surface/30 border border-white/5 flex flex-col justify-between h-full"
                  >
                    <div>
                      <span 
                        className="text-3xl font-display font-bold mb-4 block"
                        style={{ color: brandColor }}
                      >
                        {step.step}
                      </span>
                      <h3 className="text-lg font-medium text-white mb-2">{step.name}</h3>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            9. FAQS SECTION
        ========================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-surface/20 border-b border-white/5">
            <Container className="max-w-4xl">
              <div className="text-center mb-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">Got Questions?</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="rounded-2xl border border-white/10 bg-surface/40 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-medium text-white hover:text-accent transition-colors"
                      >
                        <span className="text-base md:text-lg">{faq.q}</span>
                        <ChevronDown 
                          size={20} 
                          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-secondary'}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 text-sm md:text-base text-secondary leading-relaxed border-t border-white/5 pt-4"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            10. DIRECT WHATSAPP & CONSULTATION CTA (Image 3 inspired)
        ========================================================= */}
        <section className="py-16 md:py-24">
          <Container className="max-w-4xl">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-surface/80 to-surface/40 border border-white/10 shadow-2xl text-center relative overflow-hidden">
              <div 
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ backgroundColor: brandColor }}
              />

              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center border shadow-xl"
                style={{ backgroundColor: `${brandColor}15`, borderColor: `${brandColor}40` }}
              >
                <IconComponent size={32} style={{ color: brandColor }} />
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-medium text-white mb-4">
                Ready to engineer your {service.title}?
              </h2>
              <p className="text-secondary text-base max-w-xl mx-auto mb-8">
                Speak directly with our senior software architects. Get an immediate technical evaluation and transparent timeline for your project.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-black font-semibold text-base hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:scale-105"
                >
                  <FaWhatsapp size={20} />
                  <span>Chat on WhatsApp Now</span>
                </a>

                <Link to="/contact">
                  <Button variant="ghost" className="!px-7 !py-4 text-base border border-white/10">
                    Schedule a Discovery Call
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
