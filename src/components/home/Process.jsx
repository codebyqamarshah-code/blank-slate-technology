import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import { Compass, Lightbulb, Code2, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const steps = [
  {
    num: '01',
    phase: 'PHASE 01',
    title: 'Discover',
    icon: Compass,
    color: '#38BDF8', // Cyan
    gradient: 'from-[#38BDF8] to-[#818CF8]',
    description: 'Understanding the business, challenges, and opportunities through deep research and stakeholder alignment.'
  },
  {
    num: '02',
    phase: 'PHASE 02',
    title: 'Strategize',
    icon: Lightbulb,
    color: '#818CF8', // Indigo
    gradient: 'from-[#818CF8] to-[#A855F7]',
    description: 'Defining the right technology architecture and digital direction to ensure long-term scalability.'
  },
  {
    num: '03',
    phase: 'PHASE 03',
    title: 'Build',
    icon: Code2,
    color: '#A855F7', // Purple
    gradient: 'from-[#A855F7] to-[#10B981]',
    description: 'Designing, developing, and rigorously testing the solution using modern, robust frameworks.'
  },
  {
    num: '04',
    phase: 'PHASE 04',
    title: 'Evolve',
    icon: Rocket,
    color: '#10B981', // Emerald
    gradient: 'from-[#10B981] to-[#34D399]',
    description: 'Launching, optimizing, and providing continuous support to ensure sustained growth and performance.'
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();

  // Track scroll progress across this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'center 45%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-10 md:py-16 bg-surface/20 border-y border-border relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading 
          eyebrow="How We Work"
          title="A proven process for digital excellence."
          description="We take a systematic approach to turning complex problems into elegant, scalable solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mt-20">
          {/* Desktop Connecting Line Background */}
          <div className={`hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] z-0 ${
            isDark ? 'bg-white/10' : 'bg-neutral-200'
          }`} />

          {/* Desktop Animated Color Gradient Progress Line */}
          <motion.div 
            className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] via-[#A855F7] to-[#10B981] z-0 origin-left rounded-full blur-[2px] opacity-70"
            style={{ scaleX: smoothProgress }}
          />
          <motion.div 
            className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] via-[#A855F7] to-[#10B981] z-0 origin-left rounded-full"
            style={{ scaleX: smoothProgress }}
          />

          {steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle with Color and Glow */}
                <div 
                  className={`w-28 h-28 rounded-full border flex flex-col items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-105 shadow-xl ${
                    isDark ? 'bg-[#0E0E12] border-white/10' : 'bg-white border-neutral-200 shadow-neutral-200/50'
                  }`}
                  style={{
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Subtle color ring on hover */}
                  <div 
                    className="absolute inset-0 rounded-full transition-all duration-500 opacity-20 group-hover:opacity-100"
                    style={{
                      border: `1.5px solid ${step.color}`,
                      boxShadow: `0 0 25px ${step.color}35, inset 0 0 15px ${step.color}20`
                    }}
                  />

                  {/* Ambient blur halo */}
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-10 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Step Number with Color highlight */}
                  <span 
                    className="text-2xl font-display font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>

                  <StepIcon 
                    size={16} 
                    className="mt-1 transition-colors duration-300 opacity-60 group-hover:opacity-100"
                    style={{ color: step.color }} 
                  />
                </div>

                {/* Phase Pill */}
                <span 
                  className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border mb-3 transition-colors duration-300"
                  style={{
                    backgroundColor: `${step.color}10`,
                    borderColor: `${step.color}30`,
                    color: step.color
                  }}
                >
                  {step.phase}
                </span>
                
                {/* Step Title */}
                <h3 className="text-xl font-display font-semibold mb-3 text-primary transition-colors">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-secondary text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Process;
