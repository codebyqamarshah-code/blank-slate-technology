import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/common/SectionHeading';
import Values from '../components/home/Values';
import Team from '../components/home/Team';
import CTA from '../components/home/CTA';
import ZigzagHeroBackground from '../components/ui/ZigzagHeroBackground';
import DirectorUK from '../components/about/DirectorUK';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <PageTransition>
      <div className="w-full">
        {/* Zigzag Animated Hero */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Animated zigzag background — replaces image */}
          <ZigzagHeroBackground />
          {/* Subtle dark overlay so text stays readable */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

          <Container className="relative z-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6"
            >
              Building the <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 60%, #7a7a7c 100%)' }}>future.</span>
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
        <section className="py-10 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="mb-6 md:mb-7">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-3"
                  >
                    Our Story
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
                  >
                    A legacy of innovation.
                  </motion.h2>
                </div>
                <div className="space-y-6 text-secondary text-base md:text-lg leading-relaxed">
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
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  />
                </motion.div>
                {/* Floating animated element */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 bg-surface/80 backdrop-blur-md border border-border p-6 rounded-2xl shadow-xl hidden md:block"
                >
                  <div className="text-4xl font-display font-bold text-white mb-1">11+</div>
                  <div className="text-secondary text-sm uppercase tracking-wider">Years of Excellence</div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        <DirectorUK />
        <Values />
        <Team />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default About;
