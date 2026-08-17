import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
              <img 
                src="/images/big1.png" 
                alt="Technology team at Blank Slate" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.target.src = '/images/team.jpg'; // Fallback
                }}
              />
            </motion.div>
            
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-border rounded-full flex items-center justify-center backdrop-blur-sm bg-surface/30 z-20 hidden md:flex"
            >
              <div className="text-center">
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-secondary tracking-widest uppercase">Driven</span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-4"
            >
              Who We Are
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-balance"
            >
              Pioneering digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">
                growth and innovation.
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-secondary text-lg leading-relaxed mb-10"
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
              transition={{ delay: 0.3 }}
            >
              <Button variant="ghost" className="!pl-0 group" icon={ArrowRight}>
                Discover Our Story
              </Button>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
