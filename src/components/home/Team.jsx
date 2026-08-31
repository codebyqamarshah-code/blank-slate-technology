import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

const team = [
  {
    name: 'Talha Mughal',
    role: 'Founder & CEO',
    image: '/images/team.jpg',
    bio: 'Visionary leader driving digital innovation and scaling technology solutions for forward-thinking businesses.'
  },
  {
    name: 'Saqib Mughal',
    role: 'Co-Founder & Full Stack Developer',
    image: '/images/team 2.jpg',
    bio: 'Technical mastermind architecting robust, high-performance systems and leading advanced engineering initiatives.'
  },
  {
    name: 'Wasi Ahmad',
    role: 'UI/UX & Graphic Designer',
    image: '/images/team 3.jpg',
    bio: 'Creative powerhouse crafting stunning visual identities and immersive, conversion-driven user experiences.'
  },
  {
    name: 'Kinza Eiman',
    role: 'SEO Expert',
    image: '/images/team4.jpeg',
    bio: "Freelance SEO Expert with 5+ years of experience delivering tailored, data-driven SEO strategies across Middle East, US, and UK markets."
  },
];

const Team = () => {
  const scrollContainerRef = useRef(null);
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
    <section className="py-16 md:py-24 bg-surface/20 border-y border-border overflow-hidden">
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
            className={`absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl ${
              canScrollLeft
                ? 'bg-black/70 hover:bg-white hover:text-black text-white cursor-pointer hover:scale-110'
                : 'bg-black/30 text-white/20 border-white/5 cursor-not-allowed opacity-0 pointer-events-none'
            }`}
            aria-label="Previous team member"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl ${
              canScrollRight
                ? 'bg-black/70 hover:bg-white hover:text-black text-white cursor-pointer hover:scale-110'
                : 'bg-black/30 text-white/20 border-white/5 cursor-not-allowed opacity-0 pointer-events-none'
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
              className="group cursor-pointer perspective-[1200px] h-[460px] w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start select-none"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-display font-medium text-white mb-1 drop-shadow-md">{member.name}</h3>
                    <p className="text-accent font-medium text-xs md:text-sm tracking-wide uppercase">{member.role}</p>
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
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-5 mx-auto text-accent shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <ArrowRight className="transform -rotate-45" size={22} />
                      </div>
                      <h3 className="text-2xl font-display font-medium text-white mb-1">{member.name}</h3>
                      <p className="text-accent font-medium text-xs md:text-sm tracking-wide uppercase mb-4">{member.role}</p>
                      <p className="text-secondary text-xs sm:text-sm leading-relaxed line-clamp-6 text-balance">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-secondary hover:text-white hover:border-accent hover:bg-accent/20 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
        </div>

        {/* Progress / Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
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
