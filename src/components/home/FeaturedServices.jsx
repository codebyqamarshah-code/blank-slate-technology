import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  Users, 
  Store, 
  Stethoscope, 
  GraduationCap, 
  Wallet,
  CheckCircle2
} from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import { serviceCategories, allServices, enterpriseSpecialties } from '../../data/servicesData';

const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find(s => s.id === activeTab) || serviceCategories[0];
  const categoryServices = allServices.filter(s => s.categoryId === activeTab);

  return (
    <section className="py-16 md:py-24 bg-surface/20 border-y border-border relative overflow-hidden">
      <Container>
        <SectionHeading 
          eyebrow="Our Capabilities"
          title="Engineered for modern enterprise growth."
          description="A complete suite of custom software engineering, advanced AI systems, digital product design, SEO, Google Ads, and B2B growth."
        />

        {/* =========================================================
            INTERACTIVE SERVICES TABS & DETAILED CARDS
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[540px] mb-16">
          {/* Left Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {serviceCategories.map((category) => {
              const isActive = activeTab === category.id;
              const Icon = category.icon;
              const count = allServices.filter(s => s.categoryId === category.id).length;
              
              return (
                <TiltCard key={category.id} intensity={4} glare={false} className="rounded-2xl">
                  <button
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                      isActive 
                        ? 'bg-surface border-white/20 shadow-xl ring-1 ring-white/10' 
                        : 'bg-transparent border-transparent hover:bg-surface/50 hover:border-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-white text-black shadow-lg shadow-white/10' : 'bg-surface text-secondary'}`}>
                          <Icon size={20} />
                        </div>
                        <h3 className={`text-base md:text-lg font-medium transition-colors ${isActive ? 'text-white font-semibold' : 'text-secondary'}`}>
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] px-2 py-0.5 rounded-full border ${isActive ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-transparent text-secondary/60'}`}>
                          {count}
                        </span>
                        {isActive && (
                          <motion.div layoutId="serviceTabIndicator" className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#3366ff]" />
                        )}
                      </div>
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed ${isActive ? 'text-secondary' : 'text-secondary/60'}`}>
                      {category.description}
                    </p>
                  </button>
                </TiltCard>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-7 lg:pl-4">
            <TiltCard intensity={2} className="h-full">
              <div className="glass-card h-full p-6 md:p-10 relative overflow-hidden flex flex-col justify-between rounded-3xl border border-white/10 shadow-2xl">
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
                      <div className="flex items-center justify-between pb-5 border-b border-border/50 mb-6">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-1 font-medium">Service Suite</p>
                          <h3 className="text-xl md:text-2xl font-display font-medium text-white">
                            {activeCategory.title}
                          </h3>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                          {categoryServices.length} Specialized Offerings
                        </span>
                      </div>
                      
                      {/* Clickable Sub-Services List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
                        {categoryServices.map((service, i) => {
                          const ItemIcon = service.icon || CheckCircle2;
                          return (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.04 + (i * 0.03) }}
                            >
                              <Link
                                to={`/services/${service.slug}`}
                                className="group/item flex flex-col justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-300 h-full"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover/item:scale-110 group-hover/item:bg-accent group-hover/item:text-black transition-all">
                                        <ItemIcon size={14} />
                                      </div>
                                      <span className="text-xs text-accent/80 font-medium">{service.badge}</span>
                                    </div>
                                    <ChevronRight size={15} className="text-secondary/40 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                                  </div>
                                  <h4 className="text-sm font-medium text-white mb-1 group-hover/item:text-accent transition-colors">
                                    {service.title}
                                  </h4>
                                  <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                                    {service.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-border/40 flex items-center justify-between">
                      <p className="text-xs text-secondary hidden sm:block">
                        Click any service to view full technical architecture and workflows.
                      </p>
                      <Link to="/services">
                        <Button variant="ghost" className="!pl-0 group" icon={ArrowRight}>
                          View Full Directory
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* =========================================================
            FLAGSHIP BUSINESS SYSTEMS (ERP, CRM, POS, HMS, LMS, FINTECH)
        ========================================================= */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold block mb-1">
                Custom Enterprise Systems
              </span>
              <h3 className="text-xl md:text-2xl font-display font-medium text-white">
                Enterprise Business Software & Management Engines
              </h3>
            </div>
            <p className="text-xs md:text-sm text-secondary max-w-md">
              Complete on-premise and cloud systems built to automate operations across supply chain, sales, healthcare, and education.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {enterpriseSpecialties.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-surface/30 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all select-none"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-3">
                    <ItemIcon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-[11px] text-secondary line-clamp-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServices;
