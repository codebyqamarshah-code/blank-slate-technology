import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, PenTool, TrendingUp, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';

const serviceData = [
  {
    id: 'digital',
    title: 'Digital Development',
    icon: Code,
    description: 'Scalable, high-performance software and web solutions built for the modern internet.',
    services: ['Custom Development', 'Website Development', 'Native App Development', 'Content Management', 'E-Commerce']
  },
  {
    id: 'advanced',
    title: 'Advanced Technology',
    icon: Cpu,
    description: 'Intelligent systems and infrastructure that give your business a competitive edge.',
    services: ['Machine Learning', 'Business Intelligence', 'Cloud Solutions', 'Internet of Things', 'Research & Development']
  },
  {
    id: 'design',
    title: 'Design & Creative',
    icon: PenTool,
    description: 'Stunning visual identities and user experiences that captivate and convert.',
    services: ['UI/UX Design', 'Graphic Design', 'Motion Graphics', 'Corporate Identity']
  },
  {
    id: 'growth',
    title: 'Digital Growth',
    icon: TrendingUp,
    description: 'Strategic marketing and optimization to scale your reach and maximize ROI.',
    services: ['SEO', 'Marketing Material', 'Digital Strategy']
  }
];

const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(serviceData[0].id);

  const activeData = serviceData.find(s => s.id === activeTab);

  return (
    <section className="py-16 md:py-20 bg-surface/20">
      <Container>
        <SectionHeading 
          eyebrow="Our Expertise"
          title="Engineered for the future."
          description="A comprehensive suite of technology and design services to transform your business from the inside out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[500px]">
          {/* Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {serviceData.map((category) => {
              const isActive = activeTab === category.id;
              const Icon = category.icon;
              
              return (
                <TiltCard key={category.id} intensity={5} glare={false} className="rounded-2xl">
                  <button
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                      isActive 
                        ? 'bg-surface border-border shadow-lg' 
                        : 'bg-transparent border-transparent hover:bg-surface/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${isActive ? 'bg-white text-background' : 'bg-surface text-secondary'}`}>
                          <Icon size={24} />
                        </div>
                        <h3 className={`text-xl font-medium ${isActive ? 'text-white' : 'text-secondary'}`}>
                          {category.title}
                        </h3>
                      </div>
                      {isActive && (
                        <motion.div layoutId="indicator" className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-secondary' : 'text-secondary/60'}`}>
                      {category.description}
                    </p>
                  </button>
                </TiltCard>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7 lg:pl-12">
            <TiltCard intensity={3} className="h-full">
              <div className="glass-card h-full p-8 md:p-12 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow flex flex-col"
                  >
                    <h3 className="text-3xl font-display font-medium mb-8 pb-8 border-b border-border/50">
                      {activeData.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12 flex-grow">
                      {activeData.services.map((service, i) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-6 h-px bg-border group-hover:w-10 group-hover:bg-white transition-all duration-300" />
                          <span className="text-secondary group-hover:text-white transition-colors">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button variant="ghost" className="!pl-0 group" icon={ArrowRight}>
                        Explore {activeData.title}
                      </Button>
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
