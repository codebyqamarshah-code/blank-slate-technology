"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

const CoFounder = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-12 md:py-16 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Side (Left on desktop, 2nd on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20">
              Leadership
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-2 leading-tight">
              Hafiz Saqib Aslam
            </h2>
            
            <div className="mb-6 space-y-1">
              <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
                Co-Founder &amp; Full Stack Developer
              </p>
              <p className="text-secondary text-sm md:text-base font-medium tracking-wide">
                Web Development | Frontend | Backend | Database Solutions
              </p>
            </div>

            <div className="space-y-4 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Blank Slate Technology, focused on building modern, responsive, secure, and scalable web applications. He works across both frontend and backend technologies to develop complete digital solutions that deliver strong performance, smooth user experiences, and reliable functionality.
              </p>
              <p>
                With a practical and solution-driven approach, he contributes to turning business ideas into efficient, user-friendly, and scalable digital platforms.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
              <p className="font-semibold text-primary text-base md:text-lg tracking-wide">
                Building Complete Solutions. From Frontend to Backend.
              </p>
            </div>
          </motion.div>

          {/* Image Side (Right on desktop, 1st on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className={`relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border ${
              isDark ? 'border-white/10 bg-white/[0.02]' : 'border-neutral-200 bg-neutral-100 shadow-xl'
            }`}>
              <img 
                src="/images/saqib-aslam.jpg" 
                alt="Hafiz Saqib Aslam - Co-Founder & Full Stack Developer" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                onError={(e) => { e.target.src = '/images/team 2.jpg'; }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default CoFounder;
