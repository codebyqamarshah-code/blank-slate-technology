import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

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

const FeaturedWork = () => {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <SectionHeading 
            eyebrow="Selected Work"
            title="Digital experiences built for ambitious ideas."
            className="mb-0"
          />
          <Button variant="ghost" className="shrink-0" icon={ArrowRight}>
            View All Work
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.2 }}
              className={`group flex flex-col ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-surface aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/big2.png'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-white text-background flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-4 text-secondary text-sm font-medium">
                  <span>{project.id}</span>
                  <span className="w-4 h-px bg-border"></span>
                  <span className="uppercase tracking-wider">{project.category}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-medium group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-secondary leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
