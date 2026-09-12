import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import { useTheme } from '../../context/ThemeContext';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-driven subtle parallax values
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const imageRotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const textY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section ref={sectionRef} className="pt-8 md:pt-12 pb-6 md:pb-8 overflow-hidden perspective-[1200px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          <div className="order-2 lg:order-1 relative h-full flex items-center justify-center">
            <motion.div 
              style={{ y: imageY, scale: imageScale, rotateX: imageRotateX }}
              className="relative w-full max-w-[380px] lg:max-w-[420px] mx-auto lg:mx-0 z-10 will-change-transform"
            >
              <TiltCard intensity={12} glare={true} className="rounded-3xl">
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/4.8] w-full bg-surface shadow-2xl border group ${
                  isDark ? 'shadow-black/60 border-white/10' : 'shadow-neutral-300/60 border-neutral-200'
                }`}>
                  <img 
                    src="/images/digital-growth.jpg" 
                    alt="Digital growth and innovation at Blank Slate" 
                    className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.src = '/images/big1.png'; }}
                  />
                  {/* Subtle inner gradient shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className={`absolute inset-0 border rounded-3xl z-20 pointer-events-none ${
                    isDark ? 'border-white/10' : 'border-black/5'
                  }`} />
                </div>
              </TiltCard>
            </motion.div>

            {/* Background glow behind image */}
            <motion.div 
              style={{ y: imageY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0" 
            />
          </div>

          <motion.div 
            style={{ y: textY }}
            className="order-1 lg:order-2 z-10 relative"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block text-cyan-500 font-semibold tracking-[0.2em] uppercase text-xs mb-2.5"
            >
              Who We Are
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-display font-medium mb-4 text-balance leading-[1.08] tracking-tight text-primary"
            >
              Pioneering digital <br className="hidden sm:inline" />
              <span className={`text-transparent bg-clip-text ${
                isDark
                  ? 'bg-gradient-to-r from-white via-white to-secondary'
                  : 'bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-500'
              }`}>
                growth and innovation.
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-3 text-secondary text-sm sm:text-base md:text-[17px] leading-relaxed mb-6 max-w-xl"
            >
              <p>
                Blank Slate Technology is a premium digital development and technology agency. We partner with forward-thinking businesses to design, engineer, and scale solutions that drive real impact.
              </p>
              <p>
                From complex custom software to stunning digital experiences, we believe in pushing boundaries, rapid advancement, and a relentless attention to detail.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link to="/about">
                <Button variant="primary" className="group !py-3 !px-7 text-sm !bg-black !text-white hover:!bg-neutral-800 border-none shadow-lg hover:scale-105 transition-all duration-300" icon={ArrowRight}>
                  Discover Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
