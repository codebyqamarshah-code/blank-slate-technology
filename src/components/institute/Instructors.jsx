import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { instructors } from '../../data/institute';
import { Link2, MessageCircle, ArrowRight } from 'lucide-react';

const InstructorCard = ({ instructor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/5"
    >
      {/* Image Container with Grayscale Effect */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
        <img 
          src={instructor.image} 
          alt={instructor.name}
          className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="relative p-6 pt-0 -mt-12 z-10">
        <h4 className="text-xl font-display font-medium text-white mb-1">
          {instructor.name}
        </h4>
        <div className="text-sm font-medium text-[#ADADAE] mb-3">
          {instructor.role}
        </div>
        <div className="text-xs text-[#ADADAE] border-l-2 border-white/20 pl-3 mb-6">
          {instructor.experience}
        </div>

        {/* Social Icons (Hidden by default, reveal on hover via CSS) */}
        <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-[#ADADAE] hover:text-white transition-colors">
            <Link2 size={14} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-[#ADADAE] hover:text-white transition-colors">
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Instructors = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
              Our Instructors
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
              Learn from industry experts.
            </h3>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-[#ADADAE] hover:text-white transition-colors"
          >
            View All Mentors <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {instructors.map((instructor, idx) => (
            <InstructorCard key={instructor.id} instructor={instructor} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Instructors;
