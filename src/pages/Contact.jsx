import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    alert("Message sent! (Simulation)");
  };

  return (
    <PageTransition>
      <div className="w-full pt-24 pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
                  Let's start a <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">conversation.</span>
                </h1>
                <p className="text-secondary text-lg leading-relaxed max-w-md mb-12">
                  Have a project in mind or just want to say hi? Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: MapPin, text: '123 Innovation Drive, Tech City, TC 10020' },
                    { icon: Mail, text: 'hello@blankslatetechnology.com' },
                    { icon: Phone, text: '+1 (555) 123-4567' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center gap-4 text-secondary hover:text-white transition-colors cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                        <item.icon size={20} className="group-hover:text-accent transition-colors" />
                      </div>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative glass-card p-8 md:p-12">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  
                  <div className="relative">
                    <label className={`absolute left-0 transition-all duration-300 ${isFocused === 'name' || formData.name ? '-top-6 text-xs text-accent' : 'top-2 text-secondary'}`}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused(null)}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-border py-2 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="relative mt-4">
                    <label className={`absolute left-0 transition-all duration-300 ${isFocused === 'email' || formData.email ? '-top-6 text-xs text-accent' : 'top-2 text-secondary'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-border py-2 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="relative mt-4">
                    <label className={`absolute left-0 transition-all duration-300 ${isFocused === 'message' || formData.message ? '-top-6 text-xs text-accent' : 'top-2 text-secondary'}`}>
                      Project Details
                    </label>
                    <textarea 
                      required
                      rows="4"
                      value={formData.message}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-border py-2 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" icon={Send} className="w-full mt-4 group">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Contact;
