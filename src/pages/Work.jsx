import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import FeaturedWork from '../components/home/FeaturedWork';
import CTA from '../components/home/CTA';
import TypewriterText from '../components/ui/TypewriterText';

const Work = () => {
  return (
    <PageTransition>
      <div className="w-full pt-16">
        <Container className="py-16 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-8 leading-[1.1]"
          >
            Proof of <br />
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 60%, #7a7a7c 100%)' }}
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
            className="text-xl text-secondary"
          >
            Explore our selected case studies. We build products that scale, systems that perform, and designs that convert.
          </motion.p>
        </Container>

        <div className="-mt-16">
          <FeaturedWork />
        </div>
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Work;
