import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Users, 
  Target,
  Rocket,
  ChevronRight,
  Calendar,
  User
} from 'lucide-react';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">
      {children}
    </div>
  </section>
);

const CaseStudyTemplate = ({ data, setView }) => {
  if (!data) return null;

  return (
    <div className="pt-20 bg-white">
      {/* Header / Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-8 border border-indigo-500/20"
          >
            CASE STUDY
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight"
              >
                {data.title}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-6 text-slate-400 mb-8"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>EvalufAI Strategy Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>April 2026</span>
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
              >
                {data.summary}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {data.metrics.map((metric, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">{metric.value}</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TL;DR (Summary) */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6">Summary</h2>
          <p className="text-2xl font-display text-slate-900 leading-relaxed italic">
            "{data.tldr}"
          </p>
        </div>
      </SectionWrapper>

      {/* The Challenge */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
            <div className="space-y-6">
              {data.challenge.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {data.challenge.breakdown.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm font-bold text-rose-600 mb-2 uppercase tracking-widest">{item.label}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.description}</h4>
                <p className="text-slate-500">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">The Solution</h2>
          <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
            {data.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Was Implemented */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How It Was Implemented</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {data.implementation.map((step, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.step}</h4>
                <p className="text-lg text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* The Results */}
      <SectionWrapper className="bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.results.metrics.map((metric, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] text-center border border-white/20">
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-indigo-100">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-indigo-50 leading-relaxed text-center">
          {data.results.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Breakdown */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Efficiency Gains</h4>
            <p className="text-slate-600 leading-relaxed">{data.impact.efficiency}</p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Quality Improvements</h4>
            <p className="text-slate-600 leading-relaxed">{data.impact.quality}</p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Risk Reduction</h4>
            <p className="text-slate-600 leading-relaxed">{data.impact.risk}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Next */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What's Next</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {data.futureScope}
          </p>
        </div>
      </SectionWrapper>

      {/* Key Takeaway */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto bg-indigo-50 p-16 rounded-[4rem]">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Takeaway</h2>
          <p className="text-xl text-slate-900 leading-relaxed text-center font-display">
            {data.takeaway}
          </p>
        </div>
      </SectionWrapper>

      {/* Footer CTA */}
      <SectionWrapper>
        <div className="bg-slate-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8">Ready for results like these?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setView('book-demo')}
                className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/25"
              >
                Book a Strategy Call
              </button>
              <button 
                onClick={() => setView('case-studies-list')}
                className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CaseStudyTemplate;
