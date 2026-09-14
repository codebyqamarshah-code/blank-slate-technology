"use client";
import React from 'react';
import Link from 'next/link';
import { useParams, redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import PageTransition from '../../../components/layout/PageTransition';
import Container from '../../../components/ui/Container';
import { getBlogBySlug, blogPosts } from '../../../data/blogData';
import { useTheme } from '../../../context/ThemeContext';

const BlogDetail = () => {
  const { slug } = useParams();
  const { isDark } = useTheme();
  const post = getBlogBySlug(slug);

  if (!post) {
    return redirect("/insights");
  }

  // Get related posts (other posts, excluding current)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <PageTransition>
      <div className="w-full pt-20 md:pt-28 pb-16 bg-background text-primary transition-colors duration-300">
        <Container>
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mb-10"
          >
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                {post.category}
              </span>
              <span className="text-secondary flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="text-secondary flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-medium leading-[1.1] tracking-tight text-primary mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-4 mb-10 pb-8 border-b border-border"
          >
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
              onError={(e) => { e.target.src = '/images/big1.png'; }}
            />
            <div>
              <p className="text-primary font-semibold text-sm">{post.author.name}</p>
              <p className="text-secondary text-xs">{post.author.role}</p>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/7] bg-surface max-w-5xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/images/big1.png'; }}
            />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl"
          >
            <div className={`prose prose-lg max-w-none ${
              isDark 
                ? 'prose-invert prose-p:text-neutral-300 prose-headings:text-white prose-strong:text-white prose-li:text-neutral-300'
                : 'prose-neutral prose-p:text-neutral-700 prose-headings:text-neutral-900 prose-strong:text-neutral-900'
            } prose-headings:font-display prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-p:leading-relaxed prose-p:mb-5 prose-li:leading-relaxed prose-ul:my-4 prose-a:text-accent prose-a:no-underline hover:prose-a:underline`}>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 pt-12 border-t border-border max-w-5xl"
            >
              <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-8">
                More Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <div className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                      isDark ? 'border-white/10 hover:border-accent/30 bg-surface' : 'border-neutral-200 hover:border-neutral-400 bg-white'
                    }`}>
                      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => { e.target.src = '/images/big1.png'; }}
                        />
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-3 text-xs mb-3">
                          <span className="text-accent font-semibold uppercase tracking-wider">{related.category}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-secondary">{related.date}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-medium text-primary group-hover:text-accent transition-colors leading-snug">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </Container>
      </div>
    </PageTransition>
  );
};

export default BlogDetail;
