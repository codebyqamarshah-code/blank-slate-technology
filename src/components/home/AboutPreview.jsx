import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-driven parallax values
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const imageRotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  
  const badgeY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 overflow-hidden perspective-[1200px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-full flex items-center justify-center">
            <motion.div 
              style={{ y: imageY, scale: imageScale, rotateX: imageRotateX }}
              className="relative w-full max-w-md mx-auto lg:mx-0 z-10 will-change-transform"
            >
              <TiltCard intensity={15} glare={true} className="rounded-3xl">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full bg-surface shadow-2xl shadow-black/50">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
                  <img 
                    src="/images/big1.png" 
                    alt="Technology team at Blank Slate" 
                    className="absolute inset-0 object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => { e.target.src = '/images/team.jpg'; }}
                  />
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none" />
                </div>
              </TiltCard>
            </motion.div>
            
            {/* Decorative scrolling badge */}
            <motion.div
              style={{ y: badgeY, rotate: badgeRotate }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-border/60 rounded-full flex items-center justify-center backdrop-blur-md bg-surface/40 z-20 hidden md:flex shadow-2xl"
            >
              <div className="text-center transform rotate-12">
                <span className="block text-3xl font-bold text-white drop-shadow-lg">100%</span>
                <span className="text-xs text-secondary tracking-widest uppercase font-medium">Driven</span>
              </div>
            </motion.div>

            {/* Background glow behind image */}
            <motion.div 
              style={{ y: imageY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/20 blur-[100px] rounded-full pointer-events-none z-0" 
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
              className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-5"
            >
              Who We Are
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8 text-balance leading-tight"
            >
              Pioneering digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-secondary">
                growth and innovation.
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 text-secondary text-lg leading-relaxed mb-10 max-w-xl"
            >
              <p>
                Blank Slate Technologies is a premium digital development and technology agency. We partner with forward-thinking businesses to design, engineer, and scale solutions that drive real impact.
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
              <Button variant="outline" className="group border-white/20 hover:border-white" icon={ArrowRight}>
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
