import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import { portfolioProjects, portfolioCategories } from '../../data/projectsData';

const WHATSAPP_NUMBER = '923320901442';

const ProjectCard = ({ project, index, enableStagger = true }) => {
  const offsetClass = enableStagger && index % 2 !== 0 ? 'lg:mt-24' : '';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Blank Slate, I saw your portfolio project "${project.title}" and would like to discuss building a similar solution for my business.`
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col ${offsetClass}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Inquire about ${project.title}`}
        className="block"
      >
        <TiltCard intensity={10} glare={true} scale={1.02} className="rounded-[2rem] mb-6 cursor-pointer">
          {/* Advanced Ambient Image Wrapper */}
          <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#0c0c0e] aspect-[4/3] sm:aspect-[16/11]">
            {/* Ambient Blurred Background (creates dynamic ambient glow matching the image) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-150 blur-3xl opacity-35 mix-blend-screen group-hover:scale-[1.7] group-hover:opacity-60 transition-all duration-1000 ease-out"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
            </div>

            {/* Foreground Mockup Image */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-2 sm:p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/80 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.src = '/images/big2.png';
                }}
              />
            </div>

            {/* Premium Hover Overlay & Action Button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center pointer-events-none">
              <div className="px-5 py-3 rounded-full bg-white text-background font-medium text-sm flex items-center gap-2 shadow-xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[0.22,1,0.36,1]">
                <MessageCircle size={18} className="text-emerald-600" />
                <span>Discuss Project</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </div>

            {/* Subtle inner border */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-30 pointer-events-none" />
          </div>
        </TiltCard>
      </a>

      {/* Card Content */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center justify-between gap-3 text-secondary text-sm font-medium">
          <div className="flex items-center gap-3">
            <span className="text-accent tracking-widest font-mono text-xs">{project.id}</span>
            <span className="w-6 h-px bg-border/80 flex-shrink-0" />
            <span className="uppercase tracking-widest text-[11px] font-semibold text-secondary/80 group-hover:text-white transition-colors duration-300">
              {project.category}
            </span>
          </div>

          {project.stats && (
            <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-0.5 rounded-full">
              {project.stats}
            </span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 group-hover:text-white transition-colors leading-tight">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 decoration-accent/50"
          >
            {project.title}
          </a>
        </h3>

        <p className="text-secondary text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-secondary/90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const FeaturedWork = ({ showAll = false, showHeading = true, limit = 4 }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    let list = portfolioProjects;
    if (showAll) {
      if (selectedCategory !== 'All') {
        list = list.filter((p) => p.category === selectedCategory);
      }
      return list;
    }
    return list.slice(0, limit);
  }, [showAll, selectedCategory, limit]);

  return (
    <section className="py-16 md:py-20 relative">
      <Container>
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Work that speaks for itself."
              className="mb-0 max-w-xl"
            />
            {!showAll && (
              <Link to="/work" className="shrink-0">
                <Button variant="ghost" icon={ArrowRight}>
                  View All Projects
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Category Filters on Full Portfolio View */}
        {showAll && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 md:mb-16">
            {portfolioCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                      : 'bg-surface/80 border border-white/10 text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                enableStagger={!showAll || selectedCategory === 'All'}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA when viewing full portfolio */}
        {showAll && (
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-secondary text-base mb-6">
              Have a unique project in mind? We design and engineer tailored software and digital platforms for global businesses.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hello Blank Slate, I have an upcoming project and would like to schedule a consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
            >
              <MessageCircle size={18} />
              <span>Start Your Project With Us</span>
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedWork;
