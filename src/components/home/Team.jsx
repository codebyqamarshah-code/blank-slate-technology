import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

const team = [
  { name: 'John Doe', role: 'Technical Director', image: '/images/team.jpg' },
  { name: 'Jane Smith', role: 'Head of Design', image: '/images/team2.jpg' },
  { name: 'Michael Johnson', role: 'Lead Developer', image: '/images/team3.jpeg' },
];

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-surface/20 border-y border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <SectionHeading 
            eyebrow="Our People"
            title="The minds behind the technology."
            className="mb-0 max-w-xl"
          />
          <Button variant="ghost" className="shrink-0" icon={ArrowRight}>
            Meet the Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-surface">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = '/images/big1.png'; // Fallback
                  }}
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-background transition-colors">
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
              <p className="text-secondary text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
