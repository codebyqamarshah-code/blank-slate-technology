import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Hammer, Code, Rocket, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';
import { learningSteps } from '../../data/institute';

const iconMap = {
  Lightbulb, Hammer, Code, Rocket, TrendingUp
};

const LearningApproach = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Calculate the width of the active line based on scroll progress
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
            Our Learning Approach
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
            From concept to career.
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Background Track Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/10" />
          
          {/* Active Animated Line (Desktop) */}
          <motion.div 
            className="hidden md:block absolute top-12 left-[10%] h-0.5 bg-white origin-left"
            style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
          />

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-0">
            {learningSteps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Lightbulb;
              // Node activates based on its position along the scroll
              const activationPoint = idx / (learningSteps.length - 1);
              const isActive = useTransform(scrollYProgress, (v) => v >= activationPoint - 0.1);

              return (
                <div key={step.id} className="flex flex-col items-center flex-1 relative text-center">
                  
                  {/* Mobile connecting line */}
                  {idx !== learningSteps.length - 1 && (
                    <div className="md:hidden absolute top-24 bottom-[-3rem] left-1/2 w-0.5 bg-white/10 -translate-x-1/2" />
                  )}

                  <motion.div
                    className="relative mb-6"
                    style={{
                      scale: useTransform(isActive, (active) => active ? 1.1 : 1),
                      opacity: useTransform(isActive, (active) => active ? 1 : 0.4)
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Ring Glow */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-white/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      style={{ opacity: useTransform(isActive, (active) => active ? 1 : 0) }}
                    />
                    
                    <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center relative z-10">
                      <IconComponent size={32} className="text-white" strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  <motion.h4 
                    className="text-lg font-display font-medium text-white mb-2"
                    style={{ opacity: useTransform(isActive, (active) => active ? 1 : 0.5) }}
                  >
                    {step.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-sm text-[#ADADAE] max-w-[150px]"
                    style={{ opacity: useTransform(isActive, (active) => active ? 1 : 0.5) }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LearningApproach;
