import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import Container from '../ui/Container';
import TiltCard from '../ui/TiltCard';
import { useTheme } from '../../context/ThemeContext';

const FreeCertification = () => {
  const containerRef = useRef(null);
  const { isDark } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const highlights = [
    'Industry-standard skills assessment',
    'Official verified digital certificate',
    'Instant share on LinkedIn & resume',
    '100% free with lifetime credential verification'
  ];

  return (
    <section ref={containerRef} className="relative pt-4 md:pt-6 pb-8 md:pb-12 overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient Golden Halo Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <motion.div
          style={{ y, opacity }}
          className={`relative rounded-[2.5rem] border p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-xl transition-all duration-500 ${
            isDark
              ? 'border-amber-500/25 bg-gradient-to-b from-[#14120c]/90 via-[#0c0c10]/95 to-[#060608] shadow-[0_0_80px_-20px_rgba(245,158,11,0.25)]'
              : 'border-amber-400/40 bg-gradient-to-b from-amber-50/95 via-orange-50/40 to-white shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)]'
          }`}
        >
          {/* Decorative golden ambient corners */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-600/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-sm mb-6 font-medium shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                <Sparkles size={15} className="text-amber-400" />
                <span className="font-mono text-xs tracking-wider uppercase">Official Skill Assessment</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 leading-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Prove your skills. <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] drop-shadow-sm">
                  Earn a Free Certificate.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-base md:text-lg mb-8 max-w-lg leading-relaxed font-sans ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                Take our comprehensive online technical assessment. Pass the evaluation to receive a verified, tamper-proof digital credential recognized across modern technology ecosystems.
              </motion.p>

              {/* Golden Bullet Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9"
              >
                {highlights.map((item) => (
                  <div key={item} className={`flex items-start gap-2.5 text-xs md:text-sm ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700 font-medium'
                  }`}>
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] text-black font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95"
                >
                  <span>Take Free Test</span>
                  <ExternalLink size={16} />
                </a>

                <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-300/80 font-mono font-medium">
                  <ShieldCheck size={16} className="text-amber-500" />
                  <span>Instant Verification</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual / 3D Luxury Gold Badge */}
            <div className="relative flex justify-center items-center">
              <TiltCard intensity={15} glare={true} scale={1.03} className="w-full max-w-[360px] sm:max-w-[400px]">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className={`relative w-full aspect-square rounded-[2rem] border p-6 sm:p-8 flex flex-col items-center justify-center backdrop-blur-xl group overflow-hidden ${
                    isDark
                      ? 'border-amber-500/30 bg-gradient-to-b from-[#18150d]/80 via-[#100f14]/90 to-[#09080c] shadow-[0_0_50px_rgba(245,158,11,0.2)]'
                      : 'border-amber-400/50 bg-gradient-to-b from-amber-100/70 via-orange-50/60 to-white shadow-[0_15px_40px_rgba(245,158,11,0.15)]'
                  }`}
                >
                  {/* Rotating Concentric Golden Dashed Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-dashed border-amber-500/25 pointer-events-none"
                  />

                  {/* Soft Radial Ambient Behind Badge */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-transparent blur-2xl pointer-events-none" />

                  {/* 3D Embossed Gold Badge Image */}
                  <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-400/40 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/images/gold-badge.jpg" 
                      alt="Certified Excellence 3D Gold Badge" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Specular shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Floating Certified Pill Badge (Bottom-Right) */}
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className={`absolute -bottom-3 -right-2 sm:bottom-4 sm:right-2 border px-5 py-2.5 rounded-2xl flex items-center gap-2.5 backdrop-blur-md ${
                      isDark
                        ? 'bg-[#0d0c0a]/95 border-amber-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.9)]'
                        : 'bg-white/95 border-amber-400/60 shadow-[0_10px_25px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    <Award size={18} className="text-amber-500" />
                    <div>
                      <span className={`block text-xs font-bold tracking-wide ${isDark ? 'text-white' : 'text-neutral-900'}`}>100% FREE</span>
                      <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono tracking-wider uppercase font-semibold">Verified Seal</span>
                    </div>
                  </motion.div>

                  {/* Floating Rating Pill (Top-Left) */}
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className={`absolute -top-2 -left-2 sm:top-4 sm:left-2 border px-4 py-2 rounded-2xl flex items-center gap-2 backdrop-blur-md ${
                      isDark
                        ? 'bg-[#0d0c0a]/95 border-amber-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.9)]'
                        : 'bg-white/95 border-amber-400/60 shadow-[0_10px_25px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    <span className="text-amber-500 text-xs font-bold">★ 5.0</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      isDark ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>Accredited</span>
                  </motion.div>
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FreeCertification;
