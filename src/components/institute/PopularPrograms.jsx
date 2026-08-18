import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Layers, PenTool, Terminal, Smartphone, BrainCircuit, BarChart, Megaphone, Clock, Award } from 'lucide-react';
import Container from '../ui/Container';
import { programs } from '../../data/institute';

const iconMap = {
  Code, Layers, Figma: PenTool, Terminal, Smartphone, BrainCircuit, BarChart, Megaphone
};

const ProgramCard = ({ program, index }) => {
  const IconComponent = iconMap[program.icon] || Code;
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative flex flex-col p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-[#ADADAE] group-hover:text-white group-hover:bg-white/10 transition-colors">
            <IconComponent size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-display font-medium text-white pt-2 leading-tight">
            {program.title}
          </h3>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col gap-2 mb-6 text-sm text-[#ADADAE]">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} />
            <span>{program.level}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#ADADAE] text-sm leading-relaxed mb-8 flex-grow">
          {program.description}
        </p>

        {/* Footer/Link */}
        <button
          onClick={() => navigate('/apply')}
          className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#3366ff] transition-colors mt-auto"
        >
          <span>Enroll Now</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const PopularPrograms = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-[#ADADAE] uppercase tracking-wider mb-3">
              Popular Programs
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
              Launch your career in tech.
            </h3>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-[#ADADAE] hover:text-white transition-colors"
          >
            View All Programs <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularPrograms;
