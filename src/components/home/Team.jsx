import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import { useTheme } from '../../context/ThemeContext';

const team = [
  {
    name: 'Talha Mughal',
    role: 'Founder & CEO',
    image: '/images/team.jpg',
    bio: 'Visionary leader driving digital innovation and scaling technology solutions for forward-thinking businesses.'
  },
  {
    name: 'Hafiz Saqib Aslam',
    role: 'Co-Founder & Full Stack Developer',
    image: '/images/saqib-aslam.jpg',
    bio: 'Technical mastermind architecting robust, high-performance systems and leading advanced engineering initiatives.'
  },
  {
    name: 'Wasi Ahmad',
    role: 'UI/UX & Graphic Designer',
    image: '/images/team 3.jpg',
    bio: 'Creative powerhouse crafting stunning visual identities and immersive, conversion-driven user experiences.'
  },
  {
    name: 'Hamad Zaheer',
    role: 'Mobile App Developer',
    image: '/images/Hamad Zaheer.png',
    bio: 'Expert in building seamless, high-performance cross-platform mobile applications that elevate user engagement.'
  },
  {
    name: 'Kinza Eiman',
    role: 'SEO Expert',
    image: '/images/team4.jpeg',
    bio: "Freelance SEO Expert with 5+ years of experience delivering tailored, data-driven SEO strategies across Middle East, US, and UK markets."
  },
  {
    name: 'Zain ul Abideen',
    role: 'CMS Developer',
    image: '/images/zainulabideen.png',
    bio: 'Specialist in custom CMS solutions, enabling businesses to effortlessly manage, scale, and optimize their digital content.'
  }
];

const Team = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-10 md:py-16 bg-surface/20 border-y border-border overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <SectionHeading
            eyebrow="Team & Experts"
            title="The minds behind the Blank Slate Technology"
            className="mb-0 max-w-xl"
          />
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group rounded-2xl bg-surface border overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl ${
                isDark
                  ? 'border-white/10 hover:border-accent/40'
                  : 'border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {/* Photo Area */}
              <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = '/images/big1.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Text Info Area */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between bg-surface border-t border-border/40">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-[11px] md:text-xs tracking-wider uppercase mb-2">{member.role}</p>
                  <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
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
