import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import InsightsPreview from '../components/home/Insights';
import CTA from '../components/home/CTA';

const InsightsPage = () => {
  return (
    <PageTransition>
      <div className="w-full pt-16">
        <Container className="py-16 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8 text-balance"
          >
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Perspectives.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary"
          >
            Deep dives into technology trends, design philosophy, and the future of digital business.
          </motion.p>
        </Container>

        <div className="-mt-16">
          <InsightsPreview />
        </div>
        <CTA />
      </div>
    </PageTransition>
  );
};

export default InsightsPage;
