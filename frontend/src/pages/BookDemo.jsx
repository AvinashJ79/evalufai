import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, Users, Video, GraduationCap, CheckCircle2, ChevronRight, Globe, Loader2 } from 'lucide-react';

const FormSection = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    challenges: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="p-8 lg:p-12 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Conversational AI Hiring & Learning Platform
        </h2>
        <p className="text-slate-500">
          Experience the future of talent intelligence. Fill out the form below and our team will get in touch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">First Name*</label>
            <input 
              required
              type="text" 
              placeholder="Jane"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Last Name*</label>
            <input 
              required
              type="text" 
              placeholder="Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Business Email*</label>
          <input 
            required
            type="email" 
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Company Name*</label>
          <input 
            required
            type="text" 
            placeholder="EvalufAI Inc."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Phone Number</label>
          <div className="flex gap-2">
            <div className="w-24 px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-sm font-bold">+1</span>
              <Globe className="w-4 h-4" />
            </div>
            <input 
              type="tel" 
              placeholder="(555) 000-0000"
              className="flex-grow px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-bold text-slate-700">Key Challenges</label>
          <textarea 
            rows="3"
            placeholder="Tell us about your hiring bottlenecks..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all resize-none"
            value={formData.challenges}
            onChange={(e) => setFormData({...formData, challenges: e.target.value})}
          />
        </div>

        <button 
          disabled={loading}
          className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-slate-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Book My Demo"
          )}
        </button>
      </form>
    </div>
  );
};

const VisualSection = () => {
  const funnelSteps = [
    { name: 'Engage', icon: Users, color: 'bg-blue-500', desc: 'AI-Sourcing & Outreach' },
    { name: 'Verify', icon: ShieldCheck, color: 'bg-indigo-500', desc: 'ID & Integrity Check' },
    { name: 'Assess', icon: Zap, color: 'bg-violet-500', desc: 'Skill Simulations' },
    { name: 'Interview', icon: Video, color: 'bg-purple-500', desc: 'AI-Video & Live Coding' },
    { name: 'Learn', icon: GraduationCap, color: 'bg-fuchsia-500', desc: 'Upskilling & Growth' }
  ];

  return (
    <div className="hidden lg:flex flex-col bg-slate-50 p-12 border-l border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent -z-10" />
      
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-black italic">E</span>
          </div>
          EvalufAI
        </h3>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <div className="space-y-4">
          {funnelSteps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex-grow p-4 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900">{step.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by industry leaders</p>
        <div className="grid grid-cols-4 gap-6 grayscale opacity-40">
          <div className="font-display font-black text-lg">AMAZON</div>
          <div className="font-display font-black text-lg">PWC</div>
          <div className="font-display font-black text-lg">INTUIT</div>
          <div className="font-display font-black text-lg">INFOSYS</div>
        </div>
      </div>
    </div>
  );
};

const SuccessState = ({ onClose }) => (
  <div className="p-12 text-center">
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
    >
      <CheckCircle2 className="w-10 h-10" />
    </motion.div>
    <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
    <p className="text-slate-600 mb-8 max-w-sm mx-auto">
      Thank you for your interest in EvalufAI. Our team will reach out within 24 hours to schedule your personalized demo.
    </p>
    <button 
      onClick={onClose}
      className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all"
    >
      Close
    </button>
  </div>
);

const BookDemo = ({ isModal = false, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const containerClasses = isModal 
    ? "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    : "min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-12 pt-32 pb-24";

  return (
    <div className={containerClasses}>
      {isModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
      )}

      <motion.div 
        initial={isModal ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`
          relative bg-white w-full max-w-[1100px] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col
          ${!isModal ? 'border border-slate-100' : 'max-h-[90vh]'}
          ${isSuccess ? 'max-w-[500px]' : ''}
        `}
      >
        {isModal && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all z-30 bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="grid lg:grid-cols-2 min-h-[600px] overflow-y-auto custom-scrollbar">
          {isSuccess ? (
            <div className="lg:col-span-2">
              <SuccessState onClose={onClose || (() => window.location.href = '/')} />
            </div>
          ) : (
            <>
              <FormSection onSuccess={() => setIsSuccess(true)} />
              <VisualSection />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookDemo;
