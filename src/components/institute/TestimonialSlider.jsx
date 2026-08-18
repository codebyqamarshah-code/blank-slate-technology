import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import { testimonials } from '../../data/institute';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
              Student Success Stories
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
              Hear from our alumni.
            </h3>
          </div>
          
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#ADADAE] hover:text-white hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#ADADAE] hover:text-white hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-12"
              >
                <Quote size={40} className="text-white/10 mb-8" />
                <p className="text-xl md:text-2xl font-display font-medium text-white leading-relaxed mb-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#111]">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-[#ADADAE]">
                      {testimonials[currentIndex].role} at <span className="text-white">{testimonials[currentIndex].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls & Dots */}
          <div className="flex items-center justify-center gap-4 mt-12 md:hidden">
             <button onClick={handlePrev} className="text-[#ADADAE] hover:text-white p-2">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
             <button onClick={handleNext} className="text-[#ADADAE] hover:text-white p-2">
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Desktop Dots */}
          <div className="hidden md:flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
