import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
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
    name: 'Zain Haroon',
    role: 'CMS Developer',
    image: '/images/zainharoon.png',
    bio: 'Specialist in custom CMS solutions, enabling businesses to effortlessly manage, scale, and optimize their digital content.'
  }
];

const Team = () => {
  const scrollContainerRef = useRef(null);
  const { isDark } = useTheme();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const cardWidth = 360 + 24; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), team.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (idx) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 384;
    scrollContainerRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-10 md:py-16 bg-surface/20 border-y border-border overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Leadership & Experts"
            title="The minds behind the technology."
            className="mb-0 max-w-xl"
          />
        </div>

        {/* Slider Container with Floating Side Arrows */}
        <div className="relative group/slider">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-xl ${
              canScrollLeft
                ? isDark
                  ? 'bg-black/70 hover:bg-white hover:text-black text-white border-white/20 cursor-pointer hover:scale-110'
                  : 'bg-white/95 hover:bg-neutral-900 hover:text-white text-neutral-900 border-neutral-300 cursor-pointer hover:scale-110'
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Previous team member"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-xl ${
              canScrollRight
                ? isDark
                  ? 'bg-black/70 hover:bg-white hover:text-black text-white border-white/20 cursor-pointer hover:scale-110'
                  : 'bg-white/95 hover:bg-neutral-900 hover:text-white text-neutral-900 border-neutral-300 cursor-pointer hover:scale-110'
                : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Next team member"
          >
            <ArrowRight size={20} />
          </button>

          {/* Scrollable Team Slider */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 md:-mx-8 md:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-surface border border-border/80 overflow-hidden h-[460px] w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start select-none flex flex-col transition-all duration-500 hover:border-accent/40 hover:shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative h-[310px] w-full overflow-hidden bg-neutral-900 shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = '/images/big1.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Text Info Area */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-surface border-t border-border/40">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-xs tracking-wider uppercase mb-2.5">{member.role}</p>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Progress / Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'w-8 bg-accent'
                  : isDark
                  ? 'w-2 bg-white/20 hover:bg-white/40'
                  : 'w-2 bg-neutral-300 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
