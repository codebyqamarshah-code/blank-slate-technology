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
  Building2,
  ShieldCheck
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getServiceBySlug, allServices } from '../data/servicesData';

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
          <p className="text-secondary max-w-md mb-8">The system you are looking for might have been moved or updated.</p>
          <Link to="/services">
            <Button variant="primary" icon={ArrowLeft}>Back to Services</Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  const IconComponent = service.icon || Globe;
  const relatedServices = allServices.filter(s => s.categoryId === service.categoryId && s.slug !== service.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/923320901442?text=Hello%20Blank%20Slate%20Technologies%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20system.`;

  return (
    <PageTransition>
      <div className="w-full pt-28 pb-20 overflow-hidden">
        
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="relative pb-16 md:pb-24 border-b border-white/5">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#3366ff]/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <Container className="relative z-10">
            {/* Breadcrumb Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs md:text-sm text-[#ADADAE] mb-8"
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
                  <span>{service.categoryName}</span>
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
                  className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mb-8"
                >
                  {service.heroDescription}
                </motion.p>

                {/* Highlights Tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
                >
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact">
                    <Button variant="primary" className="!px-7 !py-3.5 text-base" icon={ArrowRight}>
                      Request System Proposal
                    </Button>
                  </Link>

                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300 font-medium text-sm shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:scale-105"
                  >
                    <FaWhatsapp size={18} />
                    <span>Instant WhatsApp Consultation</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Visual Card */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <IconComponent size={32} />
                  </div>

                  <h3 className="text-xl font-display font-medium text-white mb-2">Engineered For Scale</h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    Custom-built architecture, high-availability database replication, automated testing, and 100% complete IP transfer.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-white/80">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Deployment Mode</span>
                      <span className="font-semibold text-white">Cloud / On-Premise</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Code Ownership</span>
                      <span className="font-semibold text-white">100% IP Transfer</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary">Post-Launch Warranty</span>
                      <span className="font-semibold text-white">Full SLA & Support</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================
            BUSINESS SOLUTIONS DELIVERED
        ========================================================= */}
        {service.solutionsDelivered && service.solutionsDelivered.length > 0 && (
          <section className="py-20 md:py-28 bg-surface/30 border-b border-white/5 relative">
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
                      {/* Operational Context */}
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-2">
                        Operational Challenge
                      </span>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        "{item.challenge}"
                      </p>

                      {/* Custom Solution */}
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

                    {/* Value Badge */}
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
            KEY CAPABILITIES
        ========================================================= */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Capabilities</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                System modules & capabilities.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 md:p-10 rounded-2xl bg-surface/50 border border-white/10 hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white">{cap.title}</h3>
                  </div>
                  <p className="text-secondary text-sm md:text-base leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            TECH STACK
        ========================================================= */}
        <section className="py-16 md:py-20 bg-surface/30 border-y border-white/5">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {service.techStack.map((tech, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-center"
                >
                  <span className="text-white font-medium text-base mb-1">{tech.name}</span>
                  <span className="text-xs text-secondary">{tech.role}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            DEVELOPMENT LIFECYCLE / PROCESS
        ========================================================= */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Our Methodology</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                How we deliver your custom system.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <span className="text-3xl font-display font-bold text-accent/50 mb-4 block">{step.step}</span>
                    <h3 className="text-lg font-medium text-white mb-2">{step.name}</h3>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================================
            FAQS SECTION
        ========================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-surface/20 border-t border-white/5">
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
            RELATED SERVICES
        ========================================================= */}
        {relatedServices.length > 0 && (
          <section className="py-20 md:py-24 border-t border-white/5">
            <Container>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">Explore More</p>
                  <h2 className="text-2xl md:text-4xl font-display font-medium text-white">
                    Related Systems
                  </h2>
                </div>
                <Link to="/services" className="text-sm font-medium text-accent hover:text-white flex items-center gap-2 transition-colors">
                  View All Services <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => {
                  const RelIcon = rel.icon || Globe;
                  return (
                    <Link
                      key={rel.slug}
                      to={`/services/${rel.slug}`}
                      className="p-6 md:p-8 rounded-2xl bg-surface/40 border border-white/5 hover:border-accent/40 hover:bg-surface transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                          <RelIcon size={24} />
                        </div>
                        <h3 className="text-xl font-display font-medium text-white mb-2 group-hover:text-accent transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-sm text-secondary line-clamp-2 mb-6">
                          {rel.shortDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                        <span>Learn More</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </section>
        )}

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section className="pt-12">
          <Container>
            <div className="relative rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#0c1322] via-[#09090b] to-[#050505] border border-white/10 overflow-hidden text-center shadow-2xl">
              <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-accent inline-block mb-6">
                  Custom Software Architecture
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
                  Ready to automate your enterprise operations?
                </h2>
                <p className="text-secondary text-base mb-8">
                  Schedule a discovery session with our Lead Solutions Architect to design your custom software blueprint.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="primary" className="!px-8 !py-3.5 text-base" icon={ArrowRight}>
                      Book Strategy Call
                    </Button>
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm"
                  >
                    <FaWhatsapp size={18} className="text-[#25D366]" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
