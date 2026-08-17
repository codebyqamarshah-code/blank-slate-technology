import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/common/SectionHeading';
import Values from '../components/home/Values';
import Team from '../components/home/Team';
import CTA from '../components/home/CTA';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <PageTransition>
      <div className="w-full">
        {/* Parallax Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-background/80 z-10" />
            <img 
              src="/images/big2.png" 
              alt="About Blank Slate" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/images/team3.jpeg'; }}
            />
          </motion.div>

          <Container className="relative z-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">future.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              We are a team of passionate technologists and designers dedicated to pushing boundaries.
            </motion.p>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading 
                  eyebrow="Our Story"
                  title="A legacy of innovation."
                  className="mb-8"
                />
                <div className="space-y-6 text-secondary text-lg leading-relaxed">
                  <p>
                    Blank Slate Technologies was founded on a simple premise: technology should be an enabler, not a bottleneck. We saw businesses struggling to adapt to the digital age and decided to build an agency that bridges the gap between complex engineering and beautiful design.
                  </p>
                  <p>
                    Over the years, we have partnered with startups and enterprise clients alike to deliver transformative digital products. Our approach is always the same: understand the core problem, design with empathy, and build with rigorous technical standards.
                  </p>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-surface"
                >
                  <img 
                    src="/images/team.jpg" 
                    alt="Our Office" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </motion.div>
                {/* Floating animated element */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 bg-surface/80 backdrop-blur-md border border-border p-6 rounded-2xl shadow-xl hidden md:block"
                >
                  <div className="text-4xl font-display font-bold text-white mb-1">10+</div>
                  <div className="text-secondary text-sm uppercase tracking-wider">Years of Excellence</div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        <Values />
        <Team />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default About;
