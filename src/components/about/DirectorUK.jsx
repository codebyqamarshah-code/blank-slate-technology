import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
            {/* Main Image - Sized to match Our Story */}
            <div className={`relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] border ${
              isDark ? 'border-white/10 bg-white/[0.02]' : 'border-neutral-200 bg-neutral-100 shadow-xl'
            }`}>
              <img 
                src="/images/team.jpg" 
                alt="Director of UK" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                onError={(e) => { e.target.src = '/images/big1.png'; }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* UK Flag & Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`absolute -bottom-5 -right-5 md:bottom-6 md:-right-6 border p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3.5 ${
                isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-neutral-200 shadow-xl'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {/* UK Flag SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full object-cover">
                  <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z"/>
                  </clipPath>
                  <clipPath id="t">
                    <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
                  </clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-primary font-medium text-base sm:text-lg leading-tight">London, UK</p>
                <p className="text-secondary text-xs sm:text-sm flex items-center gap-1 mt-0.5">
                  <MapPin size={12} /> Global Operations
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-primary tracking-tight mb-6 leading-tight">
              Spearheading our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                UK Operations.
              </span>
            </h2>

            <div className="space-y-5 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                As Blank Slate Technologies continues its global expansion, our UK division serves as a strategic hub for innovation, enterprise partnerships, and European market strategies.
              </p>
              <p>
                We bridge cutting-edge engineering with the dynamic UK business landscape, delivering scalable software architectures and high-performance digital products tailored to our European clientele.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default DirectorUK;
