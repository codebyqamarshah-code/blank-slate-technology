"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si';
import { RiRobot2Fill } from 'react-icons/ri';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { useTheme } from '../../context/ThemeContext';

const coreServices = [
  {
    id: '01',
    slug: 'javascript-development',
    title: 'JavaScript Development',
    category: 'Modern Web Development',
    badge: 'JavaScript Development',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    description: 'Build fast, interactive, and scalable digital experiences with modern JavaScript architecture for websites, web applications, APIs, and business platforms.',
    tags: ['JavaScript ES6+', 'REST APIs', 'Async Programming', 'Web APIs'],
  },
  {
    id: '02',
    slug: 'react-nextjs-development',
    title: 'React & Next.js Development',
    category: 'Frontend & SSR',
    badge: 'React & Next.js Development',
    icon: SiReact,
    brandColor: '#61DAFB',
    description: 'Bespoke web applications, modern Next.js architecture, dynamic SaaS dashboards, server-side rendering, and lightning-fast digital experiences.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '03',
    slug: 'nodejs-expressjs-development',
    title: 'Node.js & Express.js Development',
    category: 'Backend & APIs',
    badge: 'Node.js & Express.js Development',
    icon: SiNodedotjs,
    brandColor: '#339933',
    description: 'Secure and scalable backend systems, RESTful APIs, authentication, third-party integrations, and server-side architecture engineered for growing applications.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    id: '04',
    slug: 'mongodb-mysql-solutions',
    title: 'MongoDB & MySQL Solutions',
    category: 'Database Engineering',
    badge: 'MongoDB & MySQL Solutions',
    icon: SiMongodb,
    brandColor: '#47A248',
    description: 'Reliable database architecture designed for modern applications—from flexible NoSQL data models to structured relational systems built for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Mongoose', 'Database Design'],
  },
  {
    id: '05',
    slug: 'python-development',
    title: 'Python Development',
    category: 'Backend & Intelligent Systems',
    badge: 'Python Development',
    icon: SiPython,
    brandColor: '#3776AB',
    description: 'Powerful Python solutions for backend development, data processing, API integrations, automation, and intelligent business applications.',
    tags: ['Python', 'FastAPI', 'Django', 'REST APIs'],
  },
  {
    id: '06',
    slug: 'ai-automation-solutions',
    title: 'AI Automation Solutions',
    category: 'AI & Workflow Automation',
    badge: 'AI Automation Solutions',
    icon: RiRobot2Fill,
    brandColor: '#8B5CF6',
    description: 'Transform repetitive business processes into intelligent automated workflows with AI agents, smart assistants, API integrations, and custom business automation.',
    tags: ['AI Agents', 'LLMs', 'n8n', 'API Integrations'],
  },
];

const CoreServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard intensity={8} glare={true} scale={1.02} className="h-full rounded-3xl">
        <div
          className="h-full p-7 md:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
          style={{
            backgroundColor: isDark
              ? (isHovered ? 'rgba(16, 16, 22, 0.85)' : 'rgba(255, 255, 255, 0.02)')
              : (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'),
            borderColor: isHovered
              ? `${service.brandColor}80`
              : (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'),
            boxShadow: isHovered
              ? `0 0 40px -5px ${service.brandColor}35, 0 12px 30px -5px rgba(0,0,0,${isDark ? '0.6' : '0.1'}), inset 0 0 25px -8px ${service.brandColor}20`
              : (isDark ? 'none' : '0 4px 20px -2px rgba(0, 0, 0, 0.05)'),
          }}
        >
          {/* Ambient Halo Glow on Hover */}
          <div
            className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(ellipse at 50% 0%, ${service.brandColor}18 0%, transparent 65%), radial-gradient(circle at 100% 100%, ${service.brandColor}14 0%, transparent 55%), radial-gradient(circle at 0% 100%, ${service.brandColor}14 0%, transparent 55%)`,
            }}
          />

          <div className="relative z-10">
            {/* Icon Badge */}
            <div className="flex items-center justify-between mb-5">
              <div
                className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500"
                style={{
                  backgroundColor: `${service.brandColor}15`,
                  borderColor: isHovered ? `${service.brandColor}80` : `${service.brandColor}30`,
                  boxShadow: isHovered ? `0 0 30px ${service.brandColor}40` : `0 0 15px ${service.brandColor}15`,
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <Icon size={28} style={{ color: service.brandColor }} />
              </div>
            </div>

            {/* Category */}
            <span
              className="text-[10px] uppercase tracking-[0.2em] font-semibold block mb-2 transition-colors duration-300"
              style={{ color: isHovered ? service.brandColor : (isDark ? 'rgba(255, 255, 255, 0.5)' : '#94a3b8') }}
            >
              {service.category}
            </span>

            {/* Title */}
            <h3
              className="text-xl md:text-[1.35rem] font-display font-semibold mb-3 leading-snug transition-colors duration-300"
              style={{ color: isHovered ? (isDark ? '#FFFFFF' : service.brandColor) : (isDark ? 'rgba(255, 255, 255, 0.95)' : '#0f172a') }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-secondary text-sm leading-relaxed mb-5">
              {service.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-lg border font-mono transition-all duration-300"
                  style={{
                    backgroundColor: isHovered
                      ? `${service.brandColor}12`
                      : (isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'),
                    borderColor: isHovered
                      ? `${service.brandColor}35`
                      : (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'),
                    color: isHovered
                      ? (isDark ? '#FFFFFF' : '#0f172a')
                      : (isDark ? 'rgba(255, 255, 255, 0.7)' : '#475569'),
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div
            className="relative z-10 pt-4 border-t transition-colors duration-300"
            style={{
              borderTopColor: isHovered ? `${service.brandColor}30` : (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'),
            }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border font-medium text-sm transition-all duration-300 w-full justify-center group/btn"
              style={{
                backgroundColor: isHovered
                  ? service.brandColor
                  : (isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9'),
                borderColor: isHovered
                  ? service.brandColor
                  : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'),
                color: isHovered
                  ? (service.brandColor === '#F7DF1E' ? '#000000' : '#FFFFFF')
                  : (isDark ? '#FFFFFF' : '#0f172a'),
                boxShadow: isHovered ? `0 0 20px ${service.brandColor}35` : 'none',
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

const FeaturedServices = () => {
  return (
    <section className="py-8 md:py-12 bg-surface/20 border-y border-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <SectionHeading
            eyebrow="Core Specializations"
            title="Engineered for Modern Digital Scale."
            description="We engineer high-performance web applications, scalable backend systems, intelligent databases, and AI-powered automation using modern technology stacks built for speed, security, and growth."
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
          >
            <span>Explore All Services</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Cards in 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, index) => (
            <CoreServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServices;
