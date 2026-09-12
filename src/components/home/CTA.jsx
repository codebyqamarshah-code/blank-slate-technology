import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const WHATSAPP_URL = 'https://wa.me/923320901442?text=Hello%20Blank%20Slate%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20it.';

const CTA = ({ theme, className = '' }) => {
  const { isDark } = useTheme();
  const isLight = theme ? theme === 'light' : !isDark;

  return (
    <section className={`pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden bg-background transition-colors duration-300 ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className={`w-[800px] h-[800px] rounded-full blur-[140px] ${isLight ? 'bg-blue-500/8' : 'bg-accent/12'}`} />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl p-10 md:p-20 text-center max-w-5xl mx-auto transition-colors duration-300 ${
            isLight
              ? 'bg-neutral-50/95 border border-neutral-200/80 shadow-2xl'
              : 'bg-surface/70 backdrop-blur-xl border border-white/10 shadow-2xl'
          }`}
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} />
            <span>Let's Build Something Great</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`text-3xl sm:text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6 leading-[1.15] ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            Have a project in mind? <br className="hidden md:block" /> Let's bring it to life.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className={`text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              isLight ? 'text-neutral-600' : 'text-secondary'
            }`}
          >
            From custom web & mobile apps to AI automation and scalable cloud platforms — our engineering team turns your business requirements into robust, high-performing software.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button
                variant="primary"
                icon={ArrowRight}
                className={`!px-8 !py-4 text-base font-semibold ${
                  isLight
                    ? '!bg-black !text-white hover:!bg-neutral-800 shadow-xl'
                    : ''
                }`}
              >
                Start Your Project
              </Button>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-black font-semibold text-base hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:scale-105"
            >
              <FaWhatsapp size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8 pt-6 border-t border-border/50 text-sm md:text-base text-secondary"
          >
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle size={17} className="text-accent" /> 24-Hour Response
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle size={17} className="text-accent" /> 100% Code & IP Ownership
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle size={17} className="text-accent" /> Direct Architect Consultation
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
