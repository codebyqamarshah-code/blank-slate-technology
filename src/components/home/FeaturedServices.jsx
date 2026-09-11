import React, { useState } from 'react';
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
    description: 'Scalable microservices, robust REST & GraphQL APIs, AWS/GCP cloud architecture, and high-security databases.',
    highlights: ['High-throughput REST & GraphQL', 'AWS & Docker cloud architecture', 'PostgreSQL & Redis caching'],
    tags: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker & AWS'],
  },
];

const CoreServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard intensity={8} glare={true} scale={1.02} className="h-full rounded-3xl">
        <div
          className="h-full p-7 md:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
          style={{
            backgroundColor: isHovered ? 'rgba(16, 16, 22, 0.85)' : 'rgba(255, 255, 255, 0.02)',
            borderColor: isHovered ? `${service.brandColor}80` : 'rgba(255, 255, 255, 0.08)',
            boxShadow: isHovered
              ? `0 0 40px -5px ${service.brandColor}40, 0 12px 30px -5px rgba(0,0,0,0.6), inset 0 0 25px -8px ${service.brandColor}20`
              : 'none',
          }}
        >
          {/* Ambient Side and Background Halo Glow */}
          <div
            className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(ellipse at 50% 0%, ${service.brandColor}18 0%, transparent 65%), radial-gradient(circle at 100% 100%, ${service.brandColor}14 0%, transparent 55%), radial-gradient(circle at 0% 100%, ${service.brandColor}14 0%, transparent 55%)`,
            }}
          />

          <div className="relative z-10">
            {/* Real Tech Icon Badge */}
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500"
                style={{
                  backgroundColor: `${service.brandColor}15`,
                  borderColor: isHovered ? `${service.brandColor}80` : `${service.brandColor}30`,
                  boxShadow: `0 0 25px ${service.brandColor}25`,
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <Icon size={32} style={{ color: service.brandColor }} />
              </div>

              <span
                className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border transition-colors duration-300"
                style={{
                  backgroundColor: isHovered ? `${service.brandColor}15` : 'rgba(255, 255, 255, 0.04)',
                  borderColor: isHovered ? `${service.brandColor}40` : 'rgba(255, 255, 255, 0.1)',
                  color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {service.badge}
              </span>
            </div>

            {/* Service Category */}
            <span
              className="text-xs uppercase tracking-widest font-medium block mb-2 transition-colors duration-300"
              style={{ color: isHovered ? service.brandColor : 'rgba(255, 255, 255, 0.6)' }}
            >
              {service.category}
            </span>

            {/* Service Title */}
            <h3
              className="text-2xl font-display font-medium mb-3 leading-snug transition-colors duration-300"
              style={{ color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.95)' }}
            >
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
                  className="text-xs px-2.5 py-1 rounded-lg border font-mono transition-colors duration-300"
                  style={{
                    backgroundColor: isHovered ? `${service.brandColor}10` : 'rgba(255, 255, 255, 0.03)',
                    borderColor: isHovered ? `${service.brandColor}30` : 'rgba(255, 255, 255, 0.08)',
                    color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div
            className="relative z-10 pt-5 border-t flex items-center justify-between transition-colors duration-300"
            style={{
              borderTopColor: isHovered ? `${service.brandColor}30` : 'rgba(255, 255, 255, 0.08)',
            }}
          >
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border font-medium text-sm transition-all duration-300 w-full justify-center group/btn shadow-lg"
              style={{
                backgroundColor: isHovered ? `${service.brandColor}20` : 'rgba(255, 255, 255, 0.05)',
                borderColor: isHovered ? service.brandColor : 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                boxShadow: isHovered ? `0 0 20px ${service.brandColor}30` : 'none',
              }}
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
};

const EnterpriseServiceCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ItemIcon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/services/${item.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group block p-7 md:p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between"
        style={{
          backgroundColor: isHovered ? 'rgba(16, 16, 22, 0.85)' : 'rgba(255, 255, 255, 0.02)',
          borderColor: isHovered ? `${item.brandColor}80` : 'rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered
            ? `0 0 40px -5px ${item.brandColor}35, 0 12px 30px -5px rgba(0,0,0,0.6), inset 0 0 25px -8px ${item.brandColor}18`
            : 'none',
        }}
      >
        {/* Ambient Side and Background Halo Glow */}
        <div
          className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(ellipse at 50% 0%, ${item.brandColor}18 0%, transparent 65%), radial-gradient(circle at 100% 100%, ${item.brandColor}14 0%, transparent 55%), radial-gradient(circle at 0% 100%, ${item.brandColor}14 0%, transparent 55%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300"
              style={{
                backgroundColor: `${item.brandColor}18`,
                borderColor: isHovered ? `${item.brandColor}80` : `${item.brandColor}40`,
                boxShadow: `0 0 25px ${item.brandColor}25`,
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <ItemIcon size={26} style={{ color: item.brandColor }} />
            </div>

            <span
              className="text-[11px] font-mono px-3 py-1 rounded-full border transition-colors duration-300"
              style={{
                backgroundColor: isHovered ? `${item.brandColor}15` : 'rgba(255, 255, 255, 0.04)',
                borderColor: isHovered ? `${item.brandColor}40` : 'rgba(255, 255, 255, 0.1)',
                color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {item.badge}
            </span>
          </div>

          <h4
            className="text-xl md:text-2xl font-display font-medium mb-3 transition-colors duration-300"
            style={{
              color: isHovered ? item.brandColor : '#FFFFFF',
            }}
          >
            {item.title}
          </h4>

          <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        <div
          className="relative z-10 pt-4 border-t flex items-center justify-between text-sm font-medium transition-colors duration-300"
          style={{
            borderTopColor: isHovered ? `${item.brandColor}30` : 'rgba(255, 255, 255, 0.06)',
            color: isHovered ? item.brandColor : 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <span>Explore Technical Architecture</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300"
            style={{
              transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedServices = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-surface/20 border-y border-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* =========================================================
            1. TOP 3 CORE SPECIALIZATION CARDS
        ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
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
          {coreServices.map((service, index) => (
            <CoreServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* =========================================================
            2. ADDITIONAL 6 ENTERPRISE SERVICES
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
            {additionalEnterpriseServices.map((item, index) => (
              <EnterpriseServiceCard key={item.slug} item={item} index={index} />
            ))}
          </div>

          {/* View More Button */}
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
