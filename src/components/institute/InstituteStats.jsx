import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { instituteStats } from '../../data/institute';

const InstituteStats = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-[#050505]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-24">
          {instituteStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-4xl md:text-5xl font-display font-medium text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#ADADAE] uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InstituteStats;
