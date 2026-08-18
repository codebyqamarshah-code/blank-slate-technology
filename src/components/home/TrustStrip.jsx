import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const TrustStrip = () => {
  return (
    <section className="py-12 border-y border-border bg-surface/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-balance text-white/90">
              We partner with ambitious startups, brands, and businesses to transform ideas into meaningful digital experiences.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: 'Years Experience', value: '10+' },
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Team Members', value: '30+' },
              { label: 'Industry Awards', value: '15+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl md:text-5xl font-display font-semibold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-secondary text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
