import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import InstituteHero3D from './InstituteHero3D';
import { instituteStats } from '../../data/institute';

const InstituteHero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[60vh]">
          
          {/* Left Text Content */}
          <motion.div 
            style={{ y: yText, opacity }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-[#ADADAE] font-medium mb-8"
            >
              Tech Institute
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-6"
            >
              Learn Today.<br />
              <span className="text-white">Lead Tomorrow.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[#ADADAE] max-w-xl mb-10 leading-relaxed"
            >
              Industry-focused training, real-world projects, and expert mentorship to help you build in-demand skills and launch a successful career in tech.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" icon={ArrowRight} className="justify-between sm:justify-center" onClick={() => navigate('/apply')}>
                Apply Now
              </Button>
              <Button variant="outline" icon={Download} className="justify-between sm:justify-center">
                Download Brochure
              </Button>
            </motion.div>

          </motion.div>

          {/* Right 3D Visual - Now includes globe orbiting icons inside the 3D scene */}
          <div className="relative w-full h-[50vh] lg:h-[80vh] min-h-[400px]">
            <InstituteHero3D />
          </div>{/* end right panel */}

        </div>
      </Container>
    </section>
  );
};

export default InstituteHero;
