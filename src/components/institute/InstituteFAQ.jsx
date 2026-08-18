import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '../ui/Container';
import { faqs } from '../../data/institute';

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#ADADAE] transition-colors pr-8">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white/5 transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#ADADAE] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InstituteFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-[#050505]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Title */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
              Got questions?<br />We have answers.
            </h3>
            <p className="text-sm text-[#ADADAE]">
              Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {faqs.map((faq, idx) => (
                <FAQItem 
                  key={idx} 
                  faq={faq} 
                  isOpen={idx === openIndex} 
                  onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default InstituteFAQ;
