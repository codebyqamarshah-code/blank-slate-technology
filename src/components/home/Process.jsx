import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Discover',
    description: 'Understanding the business, challenges, and opportunities through deep research and stakeholder alignment.'
  },
  {
    num: '02',
    title: 'Strategize',
    description: 'Defining the right technology architecture and digital direction to ensure long-term scalability.'
  },
  {
    num: '03',
    title: 'Build',
    description: 'Designing, developing, and rigorously testing the solution using modern, robust frameworks.'
  },
  {
    num: '04',
    title: 'Evolve',
    description: 'Launching, optimizing, and providing continuous support to ensure sustained growth and performance.'
  }
];

const Process = () => {
  return (
    <section className="py-16 md:py-20 bg-surface/20 border-y border-border">
      <Container>
        <SectionHeading 
          eyebrow="How We Work"
          title="A proven process for digital excellence."
          description="We take a systematic approach to turning complex problems into elegant, scalable solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-border z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center mb-8 relative transition-colors duration-300 group-hover:border-accent">
                <span className="text-2xl font-display font-medium text-secondary group-hover:text-white transition-colors">
                  {step.num}
                </span>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 text-white">
                {step.title}
              </h3>
              
              <p className="text-secondary text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
