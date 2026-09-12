import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';

const DirectorUK = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-12 md:py-16 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image & Flag Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className={`relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border ${
              isDark ? 'border-white/10 bg-white/[0.02]' : 'border-neutral-200 bg-neutral-100 shadow-xl'
            }`}>
              <img 
                src="/images/team.jpg" 
                alt="Talha Mughal - CEO & Founder" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                onError={(e) => { e.target.src = '/images/big1.png'; }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
              Leadership
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-2 leading-tight">
              Talha Mughal
            </h2>
            
            <div className="mb-6 space-y-1">
              <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                CEO &amp; Founder
              </p>
              <p className="text-secondary text-sm md:text-base font-medium tracking-wide">
                Tech Entrepreneur | IT Consultant
              </p>
            </div>

            <div className="space-y-4 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                We focused on delivering modern software, web, cloud, and digital solutions. With a strong background in software engineering and technology, he leads the company with a vision to solve real-world business challenges through innovative, scalable, and practical digital solutions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <p className="font-semibold text-primary text-base md:text-lg tracking-wide">
                Building Technology. Solving Problems. Creating Digital Impact.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default DirectorUK;
