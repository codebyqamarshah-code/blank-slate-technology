import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { admissionsSteps } from '../../data/institute';

const AdmissionsTimeline = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
            Admissions Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
            Your journey starts here.
          </h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] border-t border-dashed border-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
            {admissionsSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center flex-1 relative text-center"
              >
                {/* Mobile connecting line */}
                {idx !== admissionsSteps.length - 1 && (
                  <div className="md:hidden absolute top-12 bottom-[-3rem] left-1/2 w-[1px] border-l border-dashed border-white/20 -translate-x-1/2" />
                )}

                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-lg font-display font-medium text-white mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)] relative z-10">
                  {step.id}
                </div>

                <h4 className="text-base font-medium text-white mb-2">
                  {step.title}
                </h4>
                
                <p className="text-sm text-[#ADADAE] max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionsTimeline;
