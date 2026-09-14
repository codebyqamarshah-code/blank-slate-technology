import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blogData';

const Insights = () => {
  const featuredInsight = blogPosts.find(i => i.featured);
  const regularInsights = blogPosts.filter(i => !i.featured);

  return (
    <section className="pt-6 md:pt-8 pb-6 md:pb-8">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 md:mb-6">
          <SectionHeading 
            eyebrow="Insights & News"
            title="Thoughts, ideas, and perspectives."
            className="mb-0 max-w-xl"
          />
          <Link to="/insights">
            <Button variant="ghost" className="shrink-0" icon={ArrowRight}>
              View All Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Article */}
          <Link to={`/blog/${featuredInsight.slug}`} className="block">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[16/10] bg-surface">
                <img 
                  src={featuredInsight.image} 
                  alt={featuredInsight.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = '/images/big1.png'; }}
                />
              </div>
              
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="text-accent font-medium uppercase tracking-wider">{featuredInsight.category}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span className="text-secondary flex items-center gap-2">
                  <Calendar size={14} />
                  {featuredInsight.date}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-medium text-primary group-hover:text-accent transition-colors mb-4">
                {featuredInsight.title}
              </h3>
              
              <p className="text-secondary leading-relaxed mb-6 max-w-lg">
                {featuredInsight.excerpt}
              </p>
              
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Secondary Articles */}
          <div className="flex flex-col gap-8">
            {regularInsights.map((insight, i) => (
              <Link key={insight.id} to={`/blog/${insight.slug}`} className="block">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center p-6 rounded-2xl bg-surface/30 hover:bg-surface/50 border border-transparent hover:border-border/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-xl w-full sm:w-48 shrink-0 aspect-[4/3] bg-surface">
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.target.src = '/images/c2.png'; }}
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs mb-3">
                      <span className="text-accent font-medium uppercase tracking-wider">{insight.category}</span>
                      <span className="w-1 h-1 rounded-full bg-border"></span>
                      <span className="text-secondary">{insight.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-medium text-primary group-hover:text-accent transition-colors mb-4">
                      {insight.title}
                    </h3>
                    
                    <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:text-primary transition-colors">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Insights;
