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
      <div className="w-full bg-white text-neutral-900 min-h-screen pt-28">
        <Container className="pt-6 pb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-6 leading-[1.1] text-neutral-900"
          >
            Proof of <br />
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #111827 0%, #374151 50%, #6B7280 100%)' }}
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
            className="text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Explore our selected case studies. We build products that scale, systems that perform, and designs that convert.
          </motion.p>
        </Container>

        <div className="-mt-4">
          <FeaturedWork showAll={true} showHeading={false} theme="light" />
        </div>
        <CTA theme="light" />
      </div>
    </PageTransition>
  );
};

export default Work;
