import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import FeaturedWork from '../components/home/FeaturedWork';
import CTA from '../components/home/CTA';

const Work = () => {
  return (
    <PageTransition>
      <div className="w-full pt-16">
        <Container className="py-24 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8 text-balance"
          >
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">performance.</span>
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
