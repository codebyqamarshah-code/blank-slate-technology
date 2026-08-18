import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import HeroScrollAnimation from './HeroScrollAnimation';
import TypewriterText from '../ui/TypewriterText';

// Detect OS reduced-motion preference
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Staggered entry variants for the left text block
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const leftRef = useRef(null);
  const isInView = useInView(leftRef, { amount: 0.3, once: true });

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden pt-20">

      {/* Background: full dark base + dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff09_1px,transparent_1px)] bg-[size:34px_34px]" />
        {/* Ambient left glow */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-accent/15 blur-[120px]"
        />
        {/* Ambient right glow */}
        <motion.div
          animate={{ opacity: [0.06, 0.14, 0.06], scale: [1, 1.18, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[110px]"
        />
      </div>

      {/* ── Two-column content grid ── */}
      <Container className="relative z-10 flex-grow flex items-center py-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center w-full">

          {/* LEFT: Headline + CTA */}
          <motion.div
            ref={leftRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0"
          >
            {/* Eyebrow line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent flex-shrink-0" />
              <span className="text-secondary uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium">
                Digital Technology Partner
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-display font-medium text-white tracking-tight leading-[1.1] mb-5"
            >
              Empowered by <br />
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 60%, #7a7a7c 100%)' }}
              >
                <TypewriterText words={['Innovation.', 'Learning.', 'Digital Skills.']} typingSpeed={60} pauseTime={2500} />
              </span>
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary max-w-lg mb-8 leading-relaxed"
            >
              We design and build digital products, intelligent systems, and technology solutions that help ambitious businesses move forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <Link to="/contact">
                <Button variant="primary" icon={ArrowRight} className="group !px-6 !py-3">
                  Start a Project
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" className="!px-6 !py-3">Explore Our Work</Button>
              </Link>
            </motion.div>

            {/* Trust / Stats micro-indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 sm:gap-12">
              {[
                { value: '10+', label: 'Years' },
                { value: '150+', label: 'Projects' },
                { value: '30+', label: 'Team' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-display font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-secondary uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Auto-playing 3D animation panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 w-full"
          >
            <HeroScrollAnimation prefersReducedMotion={prefersReducedMotion} />
          </motion.div>

        </div>
      </Container>

      {/* Premium Scroll Hint — Minimalist Mouse */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-20"
        >
          <span className="text-[9px] text-secondary/60 uppercase tracking-[0.3em] font-medium drop-shadow-md">
            Explore
          </span>
          <div className="w-[26px] h-[42px] rounded-full border border-white/20 flex justify-center pt-2 backdrop-blur-sm bg-white/5 shadow-lg">
            <motion.div
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[3px] h-[6px] rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,1)]"
            />
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default Hero;
