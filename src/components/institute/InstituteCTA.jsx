import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const InstituteCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* 3D-like Glowing Background Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" />
        
        {/* Subtle grid to simulate tech environment */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6">
            Ready to Build<br />Your Future?
          </h2>
          <p className="text-lg md:text-xl text-[#ADADAE] mb-12">
            Join thousands of students building successful careers in technology. 
            Enroll today and take the first step toward your new career.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" icon={ArrowRight} className="w-full sm:w-auto !px-8 !py-4 text-base shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Explore Programs
            </Button>
            <Button variant="outline" className="w-full sm:w-auto !px-8 !py-4 text-base">
              Apply Now
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default InstituteCTA;
