import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-surface/60 backdrop-blur-md border border-border/50 rounded-3xl p-12 md:p-24 text-center max-w-5xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-semibold mb-6"
          >
            Have a challenge <br className="hidden md:block" /> worth solving?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto"
          >
            Let's create something meaningful with technology. Partner with us to design, build, and scale your next big idea.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <Button variant="primary" icon={ArrowRight} className="!px-10 !py-4 text-lg">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
