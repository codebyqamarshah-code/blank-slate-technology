import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';

const FreeCertification = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <motion.div
          style={{ y, opacity }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm"
        >
          {/* Decorative gradients inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 font-medium"
              >
                <Award size={16} />
                <span>Skill Assessment</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight"
              >
                Prove your skills. <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Earn a Free Certificate.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#ADADAE] text-lg mb-8 max-w-lg leading-relaxed"
              >
                Take our comprehensive online assessment to test your knowledge. Pass the exam and receive a verified digital certificate to showcase on your resume and LinkedIn.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Linked to FreeCodeCamp as a reliable free certification platform example */}
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Take Free Test <ExternalLink size={18} />
                </a>
              </motion.div>
            </div>

            {/* Right Visual / Animation */}
            <div className="relative flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[320px] aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center backdrop-blur-md shadow-2xl shadow-blue-500/10"
              >
                {/* Rotating dashed ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed border-white/20"
                />
                
                <Award size={100} className="text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.6)]" />
                
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-6 bg-[#050505] border border-white/10 px-6 py-3 rounded-2xl shadow-xl flex flex-col items-center justify-center"
                >
                  <span className="text-2xl font-bold text-white mb-1">100%</span>
                  <span className="text-xs text-[#ADADAE] uppercase tracking-wider">Free</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FreeCertification;
