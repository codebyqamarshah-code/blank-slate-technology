import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Server } from 'lucide-react';
import { SiReact, SiFlutter } from 'react-icons/si';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { additionalEnterpriseServices } from '../../data/servicesData';

const coreServices = [
  {
    id: '01',
    slug: 'react-nextjs-development',
    title: 'React & Next.js Development',
    category: 'Web & Full-Stack',
    badge: 'Frontend & SSR',
    icon: SiReact,
    brandColor: '#61DAFB',
    accentBg: 'bg-[#61DAFB]/10',
    accentBorder: 'border-[#61DAFB]/30',
    accentGlow: 'group-hover:shadow-[0_0_30px_rgba(97,218,251,0.25)]',
    description: 'Bespoke web applications, Next.js 15 App Router, dynamic SaaS dashboards, and lightning-fast edge rendering.',
    highlights: ['Next.js SSR & Server Components', 'Sub-second page load times', 'Interactive SaaS dashboards'],
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '02',
    slug: 'flutter-app-development',
    title: 'Flutter App Development',
    category: 'Mobile Engineering',
    badge: 'iOS & Android',
    icon: SiFlutter,
    brandColor: '#54C5F8',
    accentBg: 'bg-[#54C5F8]/10',
    accentBorder: 'border-[#54C5F8]/30',
    accentGlow: 'group-hover:shadow-[0_0_30px_rgba(84,197,248,0.25)]',
    description: 'Cross-platform mobile apps for iOS and Android from a single codebase with 60fps native animations and offline-first capabilities.',
    highlights: ['Unified iOS & Android codebase', '60-120 FPS native motion', 'Offline-first SQLite sync'],
    tags: ['Flutter 3', 'Dart', 'Bloc / Riverpod', 'Offline Sync'],
  },
  {
    id: '03',
    slug: 'backend-cloud-development',
    title: 'Backend & Cloud Development',
    category: 'Cloud & Infrastructure',
    badge: 'Microservices & APIs',
    icon: Server,
    brandColor: '#34D399',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    accentGlow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]',
    description: 'Scalable microservices, robust REST & GraphQL APIs, AWS/GCP cloud architecture, and high-security databases.',
    highlights: ['High-throughput REST & GraphQL', 'AWS & Docker cloud architecture', 'PostgreSQL & Redis caching'],
    tags: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker & AWS'],
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 md:py-28 bg-surface/20 border-y border-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* =========================================================
            1. TOP 3 CORE SPECIALIZATION CARDS
        ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <SectionHeading
            eyebrow="Core Specializations"
            title="Engineered for modern digital scale."
            description="We build high-performance web applications, fluid mobile experiences, and resilient cloud backends tailored for fast-moving businesses."
            className="mb-0 max-w-2xl"
          />

          <Link
            to="/services"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors group"
          >
            <span>Explore All Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <TiltCard intensity={8} glare={true} scale={1.02} className="h-full rounded-3xl">
                  <div className="glass-card h-full p-7 md:p-8 rounded-3xl border border-white/10 bg-surface/40 hover:bg-surface/70 hover:border-white/20 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                    {/* Subtle top-right ambient glow */}
                    <div
                      className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: service.brandColor }}
                    />

                    <div>
                      {/* Real Tech Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl ${service.accentBg} ${service.accentBorder} border flex items-center justify-center transition-all duration-500 ${service.accentGlow} group-hover:scale-105`}
                        >
                          <Icon size={32} style={{ color: service.brandColor }} />
                        </div>

                        <span className="text-[11px] font-mono uppercase tracking-wider text-secondary/70 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                          {service.badge}
                        </span>
                      </div>

                      {/* Service Category */}
                      <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                        {service.category}
                      </span>

                      {/* Service Title */}
                      <h3 className="text-2xl font-display font-medium text-white group-hover:text-white transition-colors mb-3 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-secondary text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-secondary/80 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View More Button */}
                    <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 font-medium text-sm group/btn shadow-lg w-full justify-center"
                      >
                        <span>View More</span>
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            2. ADDITIONAL 6 ENTERPRISE SERVICES (Reference Image)
        ========================================================= */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-2">
                Specialized Offerings
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white">
                Enterprise & Application Services
              </h3>
            </div>
            <p className="text-sm text-secondary max-w-md">
              Full-cycle product engineering, multi-tenant SaaS architecture, conversion-focused eCommerce, and modern content platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {additionalEnterpriseServices.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    to={`/services/${item.slug}`}
                    className="group block p-7 md:p-8 rounded-3xl bg-surface/40 border border-white/10 hover:border-accent/40 hover:bg-surface/80 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${item.brandColor}15`,
                            borderColor: `${item.brandColor}40`,
                            boxShadow: `0 0 25px ${item.brandColor}20`,
                          }}
                        >
                          <ItemIcon size={26} style={{ color: item.brandColor }} />
                        </div>

                        <span className="text-[11px] font-mono text-secondary/80 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-accent transition-colors mb-3">
                        {item.title}
                      </h4>

                      <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-sm font-medium text-white/90 group-hover:text-accent transition-colors">
                      <span>Explore Technical Architecture</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View More Button (Green pill matching reference image) */}
          <div className="flex justify-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-105"
            >
              <span>View More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServices;
