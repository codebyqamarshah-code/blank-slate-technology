import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Users, MapPin, Mail, Phone, CreditCard,
  GraduationCap, BookOpen, CheckCircle, ArrowRight, ArrowLeft, Send
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';

/* ─────────────────────────────────────────────────────────
   STEP CONFIG
───────────────────────────────────────────────────────── */
const STEPS = [
  { id: 1, label: 'Personal Info', icon: User },
  { id: 2, label: 'Contact Details', icon: Phone },
  { id: 3, label: 'Program Selection', icon: GraduationCap },
];

const PROGRAMS = [
  'Web Development',
  'Full-Stack Development',
  'UI/UX Design',
  'Python Development',
  'Mobile App Development',
  'AI & Machine Learning',
  'Data Science',
  'Digital Marketing',
];

/* ─────────────────────────────────────────────────────────
   ANIMATED INPUT
───────────────────────────────────────────────────────── */
const Field = ({ label, icon: Icon, type = 'text', value, onChange, required, placeholder, options }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || (value && value.length > 0);

  const baseInputClass = `
    w-full bg-transparent text-white outline-none transition-all duration-300
    border-0 border-b-2 py-3 pl-9 text-sm
    ${focused ? 'border-[#3366ff]' : 'border-white/10 hover:border-white/25'}
  `;

  return (
    <div className="relative pt-4">
      {/* Icon */}
      <div className="absolute left-0 bottom-3 text-[#6b6b6c]" style={{ transition: 'color .25s', color: focused ? '#3366ff' : undefined }}>
        <Icon size={15} />
      </div>

      {/* Floating Label */}
      <motion.label
        animate={{
          y: isActive ? -20 : 0,
          fontSize: isActive ? '10px' : '13px',
          color: isActive ? (focused ? '#3366ff' : '#ADADAE') : '#6b6b6c',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="absolute left-9 top-[18px] pointer-events-none font-medium tracking-wide"
      >
        {label}{required && <span className="text-[#3366ff] ml-0.5">*</span>}
      </motion.label>

      {/* Input or Select */}
      {options ? (
        <select
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={baseInputClass + ' appearance-none cursor-pointer'}
          style={{ background: 'transparent' }}
        >
          <option value="" disabled hidden></option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0a0a12] text-white">{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          placeholder={focused ? placeholder : ''}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={baseInputClass}
        />
      )}

      {/* Focus glow line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[#3366ff]"
        animate={{ width: focused ? '100%' : '0%', opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────
   STEP INDICATOR
───────────────────────────────────────────────────────── */
const StepIndicator = ({ current }) => (
  <div className="flex items-center justify-center gap-0 mb-10">
    {STEPS.map((step, i) => {
      const done = current > step.id;
      const active = current === step.id;
      return (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                background: done || active ? '#3366ff' : 'rgba(255,255,255,0.06)',
                scale: active ? 1.15 : 1,
                borderColor: done || active ? '#3366ff' : 'rgba(255,255,255,0.1)',
              }}
              transition={{ duration: 0.35 }}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2"
            >
              {done ? (
                <CheckCircle size={16} className="text-white" />
              ) : (
                <step.icon size={16} className={active ? 'text-white' : 'text-[#6b6b6c]'} />
              )}
            </motion.div>
            <span className={`text-[10px] uppercase tracking-widest font-medium whitespace-nowrap ${active ? 'text-white' : 'text-[#6b6b6c]'}`}>
              {step.label}
            </span>
          </div>

          {i < STEPS.length - 1 && (
            <motion.div
              className="h-[2px] w-16 sm:w-24 mb-5 rounded-full"
              animate={{ background: current > step.id ? '#3366ff' : 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.4 }}
            />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

/* ─────────────────────────────────────────────────────────
   SLIDE VARIANTS
───────────────────────────────────────────────────────── */
const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
const Apply = () => {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', fatherName: '', dob: '', cnic: '', gender: '',
    address: '', email: '', phone: '', qualification: '',
    program: '', timing: '', referral: '',
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const next = () => { setDir(1); setStep((s) => s + 1); };
  const prev = () => { setDir(-1); setStep((s) => s - 1); };
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-24 overflow-hidden bg-[#050505]">

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3366ff]/5 rounded-full blur-[160px] pointer-events-none" />

        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-widest text-[#ADADAE] mb-3"
            >
              Blank Slate Tech Institute
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-medium text-white mb-4"
            >
              Apply for Admission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="text-[#ADADAE] text-sm max-w-md mx-auto"
            >
              Fill out the form below to secure your spot. Our team will contact you within 24 hours.
            </motion.p>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="relative rounded-3xl p-8 md:p-12"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
            >
              {/* Accent glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#3366ff]/15 via-transparent to-transparent pointer-events-none" />

              {/* Corner dots */}
              <div className="absolute top-5 right-5 flex gap-1.5">
                {[1, 2, 3].map((d) => (
                  <motion.div key={d} className="w-2 h-2 rounded-full"
                    style={{ background: d === 1 ? '#3366ff' : d === 2 ? 'rgba(51,102,255,0.5)' : 'rgba(51,102,255,0.2)' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: d * 0.4, repeat: Infinity }}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                      style={{ background: 'rgba(51,102,255,0.12)', border: '2px solid rgba(51,102,255,0.35)' }}
                    >
                      <CheckCircle size={42} className="text-[#3366ff]" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-3xl font-display font-medium text-white mb-3"
                    >
                      Application Submitted!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-[#ADADAE] max-w-sm text-sm leading-relaxed"
                    >
                      Thank you, <span className="text-white font-medium">{form.name}</span>! Your application has been received. Our admissions team will reach out to you at <span className="text-white font-medium">{form.phone}</span> within 24 hours.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="mt-8 px-6 py-2 rounded-full text-xs uppercase tracking-widest text-[#3366ff] border border-[#3366ff]/30 bg-[#3366ff]/10"
                    >
                      Application ID: BST-{Date.now().toString().slice(-6)}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Step indicator */}
                    <StepIndicator current={step} />

                    {/* Animated step content */}
                    <form onSubmit={submit}>
                      <AnimatePresence mode="wait" custom={dir}>
                        {/* ── STEP 1: PERSONAL INFO ── */}
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            custom={dir}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="space-y-6"
                          >
                            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                              <User size={16} className="text-[#3366ff]" /> Personal Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <Field label="Full Name" icon={User} value={form.name} onChange={set('name')} required />
                              <Field label="Father's Name" icon={Users} value={form.fatherName} onChange={set('fatherName')} required />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <Field label="Date of Birth" icon={CreditCard} type="date" value={form.dob} onChange={set('dob')} required />
                              <Field label="CNIC No. (13 digits)" icon={CreditCard} value={form.cnic} onChange={set('cnic')} placeholder="XXXXXXXXXXX" required />
                            </div>
                            <Field
                              label="Gender"
                              icon={User}
                              value={form.gender}
                              onChange={set('gender')}
                              required
                              options={['Male', 'Female', 'Prefer not to say']}
                            />
                            <Field label="Home Address" icon={MapPin} value={form.address} onChange={set('address')} required placeholder="Street, City, Province" />
                          </motion.div>
                        )}

                        {/* ── STEP 2: CONTACT ── */}
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            custom={dir}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="space-y-6"
                          >
                            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                              <Phone size={16} className="text-[#3366ff]" /> Contact Details
                            </h3>
                            <Field label="Email Address" icon={Mail} type="email" value={form.email} onChange={set('email')} required placeholder="you@example.com" />
                            <Field label="Phone Number" icon={Phone} type="tel" value={form.phone} onChange={set('phone')} required placeholder="+92 300 0000000" />
                            <Field
                              label="Highest Qualification"
                              icon={BookOpen}
                              value={form.qualification}
                              onChange={set('qualification')}
                              required
                              options={['Matric', 'Inter / FA / FSc', 'Bachelor\'s', 'Master\'s', 'Other']}
                            />
                            <Field
                              label="How did you hear about us?"
                              icon={Users}
                              value={form.referral}
                              onChange={set('referral')}
                              options={['Social Media', 'Friend / Family', 'Google Search', 'YouTube', 'Other']}
                            />
                          </motion.div>
                        )}

                        {/* ── STEP 3: PROGRAM ── */}
                        {step === 3 && (
                          <motion.div
                            key="step3"
                            custom={dir}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="space-y-6"
                          >
                            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                              <GraduationCap size={16} className="text-[#3366ff]" /> Program Selection
                            </h3>

                            {/* Program grid selection */}
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-[#6b6b6c] mb-4">Select a Program <span className="text-[#3366ff]">*</span></p>
                              <div className="grid grid-cols-2 gap-3">
                                {PROGRAMS.map((p) => (
                                  <motion.button
                                    key={p}
                                    type="button"
                                    onClick={() => setForm({ ...form, program: p })}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={{
                                      borderColor: form.program === p ? 'rgba(51,102,255,0.8)' : 'rgba(255,255,255,0.07)',
                                      background: form.program === p ? 'rgba(51,102,255,0.12)' : 'rgba(255,255,255,0.03)',
                                    }}
                                    className="relative text-left p-3 rounded-xl border text-xs font-medium transition-colors"
                                    style={{ color: form.program === p ? '#fff' : '#ADADAE' }}
                                  >
                                    {form.program === p && (
                                      <motion.div
                                        layoutId="programSelected"
                                        className="absolute top-2 right-2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                      >
                                        <CheckCircle size={12} className="text-[#3366ff]" />
                                      </motion.div>
                                    )}
                                    {p}
                                  </motion.button>
                                ))}
                              </div>
                            </div>

                            <Field
                              label="Preferred Class Timing"
                              icon={BookOpen}
                              value={form.timing}
                              onChange={set('timing')}
                              required
                              options={['Morning (9am – 12pm)', 'Afternoon (1pm – 4pm)', 'Evening (5pm – 8pm)', 'Weekend Only']}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      <div className="flex gap-4 mt-10">
                        {step > 1 && (
                          <motion.button
                            type="button"
                            onClick={prev}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ x: -3 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#ADADAE] hover:text-white hover:border-white/25 text-sm transition-all"
                          >
                            <ArrowLeft size={15} /> Back
                          </motion.button>
                        )}

                        {step < 3 ? (
                          <motion.button
                            type="button"
                            onClick={next}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative flex-1 py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase text-white overflow-hidden"
                            style={{
                              background: 'linear-gradient(135deg, #1a2fff 0%, #0a1acc 100%)',
                              boxShadow: '0 0 30px rgba(51,102,255,0.3), 0 8px 32px rgba(0,0,0,0.35)',
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)', x: '-100%' }}
                              whileHover={{ x: '200%' }}
                              transition={{ duration: 0.65 }}
                            />
                            <span className="flex items-center justify-center gap-2">
                              Continue <ArrowRight size={15} />
                            </span>
                          </motion.button>
                        ) : (
                          <motion.button
                            type="submit"
                            disabled={!form.program}
                            whileHover={{ scale: form.program ? 1.03 : 1 }}
                            whileTap={{ scale: form.program ? 0.97 : 1 }}
                            className="relative flex-1 py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase text-white overflow-hidden"
                            style={{
                              background: form.program
                                ? 'linear-gradient(135deg, #1a2fff 0%, #0a1acc 100%)'
                                : 'rgba(255,255,255,0.05)',
                              boxShadow: form.program ? '0 0 30px rgba(51,102,255,0.3), 0 8px 32px rgba(0,0,0,0.35)' : 'none',
                              cursor: form.program ? 'pointer' : 'not-allowed',
                            }}
                          >
                            <span className="flex items-center justify-center gap-2">
                              Submit Application <Send size={15} />
                            </span>
                          </motion.button>
                        )}
                      </div>

                      {/* Step counter */}
                      <p className="text-center text-[10px] text-[#444] uppercase tracking-widest mt-5">
                        Step {step} of {STEPS.length}
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Apply;
