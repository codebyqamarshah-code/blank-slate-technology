import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

const team = [
  { 
    name: 'Talha Mughal', 
    role: 'CEO', 
    image: '/images/team.jpg',
    bio: 'Visionary leader driving digital innovation and scaling technology solutions for forward-thinking businesses.'
  },
  { 
    name: 'Saqib Mughal', 
    role: 'CTO', 
    image: '/images/team2.jpg',
    bio: 'Technical mastermind architecting robust, high-performance systems and leading advanced engineering initiatives.'
  },
  { 
    name: 'Wasi Shah', 
    role: 'Graphic Designer', 
    image: '/images/team3.jpeg',
    bio: 'Creative powerhouse crafting stunning visual identities and immersive, conversion-driven user experiences.'
  },
];

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-surface/20 border-y border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <SectionHeading 
            eyebrow="Leadership"
            title="The minds behind the technology."
            className="mb-0 max-w-xl"
          />
          <Button variant="ghost" className="shrink-0" icon={ArrowRight}>
            Meet the Full Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1500px]">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer perspective-[1200px] h-[450px]"
            >
              {/* Card Container - Handles the 3D flip */}
              <div 
                className="relative w-full h-full transition-all duration-700 ease-out shadow-xl rounded-2xl group-hover:shadow-accent/20"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: 'rotateY(0deg)'
                }}
              >
                {/* ── FRONT OF CARD ── */}
                <div 
                  className="absolute inset-0 w-full h-full bg-surface rounded-2xl overflow-hidden backface-hidden group-hover:[transform:rotateY(180deg)] transition-all duration-700 ease-out"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    onError={(e) => { e.target.src = '/images/big1.png'; }}
                  />
                  {/* Front Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-display font-medium text-white mb-1 drop-shadow-md">{member.name}</h3>
                    <p className="text-accent font-medium text-sm tracking-wide uppercase">{member.role}</p>
                  </div>
                </div>

                {/* ── BACK OF CARD ── */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col justify-center items-center text-center bg-surface border border-border/50 shadow-2xl backface-hidden [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] transition-all duration-700 ease-out overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Back glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center h-full justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto text-accent shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <ArrowRight className="transform -rotate-45" size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-medium text-white mb-2">{member.name}</h3>
                      <p className="text-accent font-medium text-sm tracking-wide uppercase mb-6">{member.role}</p>
                      <p className="text-secondary text-sm leading-relaxed text-balance">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-secondary hover:text-white hover:border-accent hover:bg-accent/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-secondary hover:text-white hover:border-accent hover:bg-accent/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-secondary hover:text-white hover:border-accent hover:bg-accent/20 transition-all duration-300">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
