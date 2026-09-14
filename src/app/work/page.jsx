"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/layout/PageTransition';
import Container from '../../components/ui/Container';
import FeaturedWork from '../../components/home/FeaturedWork';
import CTA from '../../components/home/CTA';
import TypewriterText from '../../components/ui/TypewriterText';
import { useTheme } from '../../context/ThemeContext';

const Work = () => {
  const { isDark } = useTheme();

  return (
    <PageTransition>
      <div className="w-full bg-background text-primary min-h-screen pt-28 transition-colors duration-300">
        <Container className="pt-6 pb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-6 leading-[1.1] text-primary"
          >
            Proof of <br />
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: isDark
                  ? 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 50%, #7a7a7c 100%)'
                  : 'linear-gradient(90deg, #111827 0%, #374151 50%, #6B7280 100%)'
              }}
            >
              <TypewriterText
                words={['performance.', 'excellence.', 'results.']}
                typingSpeed={65}
                pauseTime={2800}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary leading-relaxed"
          >
            Explore our selected case studies. We build products that scale, systems that perform, and designs that convert.
          </motion.p>
        </Container>

        <div className="-mt-4">
          <FeaturedWork showAll={true} showHeading={false} />
        </div>
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Work;
