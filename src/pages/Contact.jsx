import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import TypewriterText from '../components/ui/TypewriterText';

/* ─── Animated floating dot bg ─── */
const FloatingParticle = ({ delay, x, y, size }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: 'rgba(51,102,255,0.35)' }}
    animate={{ y: [0, -24, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  delay: i * 0.4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 8,
}));

/* ─── Animated Input Field ─── */
const FormField = ({ label, type = 'text', value, onChange, multiline, required, delay }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const inputClass = `
    w-full bg-transparent text-white outline-none resize-none transition-all duration-300
    border-0 border-b-2 py-3 text-base
    ${focused ? 'border-[#3366ff]' : 'border-white/10 hover:border-white/25'}
  `;

  return (
    <motion.div
      className="relative pt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Floating label */}
      <motion.label
        animate={{
          y: isActive ? -22 : 0,
          fontSize: isActive ? '11px' : '15px',
          color: isActive ? (focused ? '#3366ff' : '#ADADAE') : '#6b6b6c',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="absolute left-0 top-3 pointer-events-none font-medium tracking-wide"
        style={{ transformOrigin: 'left' }}
      >
        {label}
      </motion.label>

      {multiline ? (
        <textarea
          required={required}
          rows={4}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={inputClass}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={inputClass}
        />
      )}

      {/* Focus underline glow */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#3366ff] rounded-full"
        animate={{ width: focused ? '100%' : '0%', opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

/* ─── Magnetic Send Button ─── */
const MagneticButton = ({ children, onClick, type }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="relative overflow-hidden w-full mt-8 py-4 rounded-xl font-semibold text-sm tracking-widest uppercase text-white cursor-pointer select-none"
      style={{
        background: 'linear-gradient(135deg, #1a2fff 0%, #0a1acc 100%)',
        boxShadow: '0 0 30px rgba(51,102,255,0.35), 0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)', x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.7 }}
      />
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
        <Send size={16} />
      </span>
    </motion.button>
  );
};

/* ─── Success State ─── */
const SuccessState = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-20 text-center"
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: 'spring', stiffness: 200, damping: 22 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
      style={{ background: 'rgba(51,102,255,0.15)', border: '2px solid rgba(51,102,255,0.4)' }}
    >
      <CheckCircle size={36} className="text-[#3366ff]" />
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="text-2xl font-display font-medium text-white mb-3"
    >
      Message Sent!
    </motion.h3>
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="text-[#ADADAE] text-sm leading-relaxed"
    >
      Thank you for reaching out. We'll get back to you within 24 hours.
    </motion.p>
  </motion.div>
);

/* ─── Main Component ─── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', text: '+923320901442' },
    
  ];

  return (
    <PageTransition>
      <div className="relative w-full min-h-screen pt-16 pb-24 overflow-hidden">

        {/* Floating particle bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <FloatingParticle key={p.id} {...p} />
          ))}
          {/* Large ambient glows */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-10">

            {/* ── LEFT: Info Panel ── */}
            <div>
              <motion.p
                className="text-sm font-medium text-[#ADADAE] uppercase tracking-widest mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Let's Connect
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-display font-medium mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Let's start a<br />
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #B9B9BA 60%, #7a7a7c 100%)' }}
                >
                  <TypewriterText
                    words={['conversation.', 'project.', 'partnership.']}
                    typingSpeed={65}
                    pauseTime={2800}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-[#ADADAE] text-lg leading-relaxed max-w-md mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have a project in mind or just want to say hi? Fill out the form and our team will get back to you within 24 hours.
              </motion.p>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
                    className="group flex items-center gap-5 p-4 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    whileHover={{
                      background: 'rgba(51,102,255,0.07)',
                      borderColor: 'rgba(51,102,255,0.3)',
                      x: 6,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{ background: 'rgba(51,102,255,0.1)', border: '1px solid rgba(51,102,255,0.2)' }}
                    >
                      <item.icon size={18} className="text-[#3366ff]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#6b6b6c] mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.text}</div>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#3366ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#3366ff]/20 via-transparent to-transparent blur-xl pointer-events-none" />

              <div
                className="relative rounded-3xl p-8 md:p-10"
                style={{
                  background: 'rgba(255,255,255,0.035)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                }}
              >
                {/* Corner accent dots */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {[1,2,3].map((d) => (
                    <motion.div
                      key={d}
                      className="w-2 h-2 rounded-full"
                      style={{ background: d === 1 ? '#3366ff' : d === 2 ? 'rgba(51,102,255,0.5)' : 'rgba(51,102,255,0.2)' }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, delay: d * 0.4, repeat: Infinity }}
                    />
                  ))}
                </div>

                <motion.p
                  className="text-sm font-medium text-[#ADADAE] uppercase tracking-widest mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Send a Message
                </motion.p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <SuccessState key="success" />
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormField
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        delay={0.45}
                      />
                      <FormField
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        delay={0.55}
                      />
                      <FormField
                        label="Project Details"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        multiline
                        required
                        delay={0.65}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 }}
                      >
                        <MagneticButton type="submit" disabled={loading}>
                          {loading ? 'Sending…' : 'Send Message'}
                        </MagneticButton>
                      </motion.div>

                      {/* Error message */}
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-xs text-red-400 mt-1"
                        >
                          {error}
                        </motion.p>
                      )}

                      <motion.p
                        className="text-center text-[10px] uppercase tracking-widest text-[#444] mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85 }}
                      >
                        We reply within 24 hours ·&nbsp; No spam, ever.
                      </motion.p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Contact;
