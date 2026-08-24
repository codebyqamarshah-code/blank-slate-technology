import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Globe } from 'lucide-react';
import Container from '../ui/Container';

const DirectorUK = () => {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
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
            {/* Main Image (Using CEO's image as requested) */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-white/10 bg-white/[0.02]">
              <img 
                src="/images/team.jpg" 
                alt="Director of UK" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = '/images/big1.png'; }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            </div>

            {/* UK Flag & Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
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
                <p className="text-white font-medium text-lg leading-tight">London, UK</p>
                <p className="text-[#ADADAE] text-sm flex items-center gap-1 mt-0.5">
                  <MapPin size={12} /> Global HQ
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 font-medium tracking-wide">
              <Globe size={16} />
              <span>Global Expansion</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
              Spearheading our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                UK Operations.
              </span>
            </h2>
            
            <h3 className="text-2xl text-white font-medium mb-2">Director of UK</h3>
            
            <div className="w-12 h-1 bg-blue-500/50 mb-6 rounded-full" />

            <div className="space-y-5 text-[#ADADAE] text-lg leading-relaxed">
              <p>
                As Blank Slate Technologies continues its global expansion, our UK division serves as a critical hub for innovation, enterprise partnerships, and European market strategies. 
              </p>
              <p>
                Led by our Director of UK, we are bridging the gap between cutting-edge technological advancements and the dynamic business landscape of the United Kingdom. Our focus remains on delivering scalable, high-performance solutions tailored to the unique needs of our European clientele.
              </p>
              <p>
                From fostering local tech talent to executing large-scale digital transformations for UK-based enterprises, our mission is to empower businesses with world-class engineering and unparalleled design.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group"
            >
              Connect with our UK Team
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <ArrowRight size={16} />
              </div>
            </motion.button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default DirectorUK;
