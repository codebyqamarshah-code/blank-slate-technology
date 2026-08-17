import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/common/SectionHeading';
import FeaturedServices from '../components/home/FeaturedServices';
import Process from '../components/home/Process';
import CTA from '../components/home/CTA';

const Services = () => {
  return (
    <PageTransition>
      <div className="w-full pt-16">
        <Container className="py-24 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8"
          >
            Digital solutions for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">modern challenges.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary"
          >
            From concept to deployment, our end-to-end services are designed to accelerate your growth and establish your digital dominance.
          </motion.p>
        </Container>

        <FeaturedServices />
        <Process />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Services;
