import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';

const projects = [
  {
    id: '01',
    title: 'Enterprise Fintech Platform',
    category: 'Custom Development',
    description: 'A scalable, high-security financial dashboard processing thousands of transactions daily.',
    image: '/images/c1.png',
  },
  {
    id: '02',
    title: 'Smart Logistics IoT',
    category: 'Advanced Technology',
    description: 'Real-time fleet tracking and predictive maintenance using IoT sensors and machine learning.',
    image: '/images/b1.png',
  },
  {
    id: '03',
    title: 'Modern E-Commerce Experience',
    category: 'Digital Development',
    description: 'Headless commerce architecture with sub-second page loads and seamless checkout.',
    image: '/images/c2.png',
  },
  {
    id: '04',
    title: 'Healthcare Patient Portal',
    category: 'UI/UX Design',
    description: 'HIPAA-compliant patient management system with intuitive booking and telemedicine features.',
    image: '/images/b4.png',
  },
];

const ProjectCard = ({ project, index }) => {
  const offsetClass = index % 2 !== 0 ? 'lg:mt-32' : '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col ${offsetClass}`}
    >
      <TiltCard intensity={12} glare={true} scale={1.03} className="rounded-[2rem] mb-8">
        {/* Advanced Ambient Image Wrapper */}
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-surface aspect-[4/3] sm:aspect-[16/11]">
          
          {/* Ambient Blurred Background (prevents ugly cropping) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={project.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-150 blur-3xl opacity-40 mix-blend-screen group-hover:scale-[1.7] group-hover:opacity-60 transition-all duration-1000 ease-out"
              aria-hidden="true"
            />
            {/* Dark gradient overlay to blend into the card */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
          </div>

          {/* Foreground Image (Always perfectly contained, no cropping) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-8 sm:p-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain rounded-xl shadow-2xl shadow-black/50 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-3"
              onError={(e) => { e.target.src = '/images/big2.png'; }}
            />
          </div>

          {/* Premium Hover Overlay & Action Button */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-white text-background flex items-center justify-center scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[0.22,1,0.36,1]">
              <ArrowUpRight size={28} strokeWidth={2.5} />
            </div>
          </div>
          
          {/* Subtle inner border */}
          <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-30 pointer-events-none" />
        </div>
      </TiltCard>

      {/* Card Content with staggered reveal */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-3 text-secondary text-sm font-medium">
          <span className="text-accent tracking-widest">{project.id}</span>
          <span className="w-6 h-px bg-border/80 flex-shrink-0" />
          <span className="uppercase tracking-widest text-[11px] font-semibold text-secondary/80 group-hover:text-white transition-colors duration-300">{project.category}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-medium text-white/90 group-hover:text-white transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-secondary text-base leading-relaxed max-w-md">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
};

const FeaturedWork = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <SectionHeading 
            eyebrow="Our Portfolio"
            title="Work that speaks for itself."
            className="mb-0 max-w-xl"
          />
          <Link to="/work" className="shrink-0">
            <Button variant="ghost" icon={ArrowRight}>
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
