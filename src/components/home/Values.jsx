import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';

const values = [
  { title: "Pushing Boundaries", desc: "We constantly challenge the status quo to discover innovative solutions that propel businesses forward." },
  { title: "Rapid Advancement", desc: "Agility is at our core. We move fast, adapt quickly, and deliver results without compromising quality." },
  { title: "Enthusiasm", desc: "We bring passion and energy to every project, deeply caring about the outcomes we generate." },
  { title: "Attention to Detail", desc: "Precision matters. We craft pixel-perfect designs and write robust, maintainable code." },
  { title: "Teamwork", desc: "Collaboration is our superpower. We work seamlessly with our partners to achieve shared goals." },
  { title: "Self-Driven", desc: "Proactive and autonomous, we take ownership of our work and drive it to successful completion." },
  { title: "Humility", desc: "We leave egos at the door, remaining open to feedback and constantly eager to learn." },
  { title: "Commitment", desc: "We are dedicated to long-term success, standing by our partners through every stage of growth." },
];

const Values = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">Our Core Values</h2>
            <p className="text-secondary leading-relaxed">
              These principles guide everything we do—from how we write code to how we partner with our clients.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-4 md:gap-6">
              {values.map((val, i) => (
                <div 
                  key={val.title}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-6 py-4 rounded-full border transition-all duration-300 cursor-default ${
                      hoveredIndex === i ? 'bg-white text-background border-white' : 'bg-surface/50 border-border text-secondary group-hover:border-white/50 group-hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{val.title}</span>
                  </motion.div>
                  
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-surface border border-border shadow-2xl z-20 pointer-events-none"
                      >
                        <p className="text-sm text-secondary leading-relaxed">
                          {val.desc}
                        </p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-surface" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Values;
