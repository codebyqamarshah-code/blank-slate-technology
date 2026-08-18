import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MonitorPlay, Briefcase } from 'lucide-react';
import Container from '../ui/Container';
import { features } from '../../data/institute';

const iconMap = {
  BookOpen, Users, MonitorPlay, Briefcase
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || BookOpen;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group flex flex-col items-center text-center p-6"
              >
                <div className="relative mb-8 perspective-[1000px]">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* 3D Icon Container */}
                  <motion.div 
                    whileHover={{ rotateY: 15, rotateX: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <IconComponent size={32} className="text-white transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-display font-medium text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-[#ADADAE] leading-relaxed max-w-[250px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
