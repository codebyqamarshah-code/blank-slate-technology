import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import { serviceCategories, allServices } from '../../data/servicesData';

const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find(s => s.id === activeTab) || serviceCategories[0];
  const categoryServices = allServices.filter(s => s.categoryId === activeTab);

  return (
    <section className="py-16 md:py-24 bg-surface/20 border-y border-border">
      <Container>
        <SectionHeading 
          eyebrow="Our Expertise"
          title="Engineered for the future."
          description="A comprehensive suite of software development and advanced technology services to transform your business from the inside out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[520px]">
          {/* Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {serviceCategories.map((category) => {
              const isActive = activeTab === category.id;
              const Icon = category.icon;
              
              return (
                <TiltCard key={category.id} intensity={5} glare={false} className="rounded-2xl">
                  <button
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isActive 
                        ? 'bg-surface border-border shadow-lg ring-1 ring-white/10' 
                        : 'bg-transparent border-transparent hover:bg-surface/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-white text-black' : 'bg-surface text-secondary'}`}>
                          <Icon size={22} />
                        </div>
                        <h3 className={`text-lg md:text-xl font-medium transition-colors ${isActive ? 'text-white font-semibold' : 'text-secondary'}`}>
                          {category.title}
                        </h3>
                      </div>
                      {isActive && (
                        <motion.div layoutId="serviceTabIndicator" className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#3366ff]" />
                      )}
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed ${isActive ? 'text-secondary' : 'text-secondary/60'}`}>
                      {category.description}
                    </p>
                  </button>
                </TiltCard>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7 lg:pl-6">
            <TiltCard intensity={3} className="h-full">
              <div className="glass-card h-full p-8 md:p-12 relative overflow-hidden flex flex-col justify-between rounded-3xl border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-6 border-b border-border/50 mb-8">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">Service Suite</p>
                          <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                            {activeCategory.title}
                          </h3>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary">
                          {categoryServices.length} Offerings
                        </span>
                      </div>
                      
                      {/* Clickable Sub-Services List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {categoryServices.map((service, i) => (
                          <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + (i * 0.04) }}
                          >
                            <Link
                              to={`/services/${service.slug}`}
                              className="group/item flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent/60 group-hover/item:bg-accent group-hover/item:scale-125 transition-all" />
                                <span className="text-sm font-medium text-secondary group-hover/item:text-white transition-colors">
                                  {service.title}
                                </span>
                              </div>
                              <ChevronRight size={16} className="text-secondary/40 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                      <p className="text-xs text-secondary hidden sm:block">
                        Click on any service to explore full specifications & tech stacks.
                      </p>
                      <Link to="/services">
                        <Button variant="ghost" className="!pl-0 group" icon={ArrowRight}>
                          View All Services
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServices;
