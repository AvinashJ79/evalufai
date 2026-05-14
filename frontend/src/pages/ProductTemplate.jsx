import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, XCircle, ChevronDown, 
  Plus, Minus, Zap, Shield, BarChart3, Globe,
  AlertCircle, Sparkles
} from 'lucide-react';
import ResourceBlogsSection from '../components/shared/ResourceBlogsSection';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FeatureCard = ({ feature }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Zap className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
    <div className="pt-4 border-t border-slate-50 space-y-3">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">How it works</span>
        <p className="text-xs text-slate-500">{feature.howItWorks}</p>
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Outcome</span>
        <p className="text-xs text-slate-500">{feature.outcome}</p>
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{question}</span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="pb-6 text-slate-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const ProductTemplate = ({ data, setView }) => {
  if (!data) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-8"
          >
            <data.icon className="w-4 h-4" />
            EVALUFAI {data.title.toUpperCase()}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            {data.hero.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {data.hero.subheading}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
              {data.hero.primaryCTA}
            </button>
            <button className="btn-secondary px-8 py-4 text-lg w-full sm:w-auto">
              {data.hero.secondaryCTA}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <SectionWrapper className="bg-slate-50 rounded-[4rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">{data.problem.title}</h2>
            {data.problem.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-slate-600 mb-6 leading-relaxed last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-500 font-bold p-4 bg-red-50 rounded-xl">
                <AlertCircle className="w-5 h-5" />
                Fragmented Data
              </div>
              <div className="flex items-center gap-3 text-red-500 font-bold p-4 bg-red-50 rounded-xl">
                <AlertCircle className="w-5 h-5" />
                Subjective Bias
              </div>
              <div className="flex items-center gap-3 text-red-500 font-bold p-4 bg-red-50 rounded-xl opacity-50">
                <AlertCircle className="w-5 h-5" />
                Slow Manual Processes
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. SOLUTION SECTION */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-200">
            <data.icon className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{data.solution.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {data.solution.description}
          </p>
        </div>
      </SectionWrapper>

      {/* 4. BEFORE vs AFTER */}
      <SectionWrapper className="bg-slate-900 text-white rounded-[4rem]">
        <div className="grid md:grid-cols-2 gap-px bg-slate-800 rounded-3xl overflow-hidden border border-slate-800">
          <div className="bg-slate-900 p-12">
            <h3 className="text-xl font-bold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Traditional
            </h3>
            <ul className="space-y-6">
              {data.beforeAfter.before.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-12 border-l border-slate-800">
            <h3 className="text-xl font-bold text-emerald-400 mb-8 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> With EvalufAI
            </h3>
            <ul className="space-y-6">
              {data.beforeAfter.after.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-emerald-50">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CORE FEATURES */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Platform Capabilities</h2>
          <p className="text-slate-600">The machinery behind the {data.title} experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </SectionWrapper>

      {/* 6. HOW IT WORKS */}
      <SectionWrapper className="bg-indigo-600 rounded-[4rem]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it Works</h2>
          <p className="text-indigo-100">Four simple steps to transformation.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {data.howItWorks.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl border border-white/20">
                {i + 1}
              </div>
              <h4 className="text-white font-bold mb-2">{step.step}</h4>
              <p className="text-indigo-100 text-sm">{step.text}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. BUSINESS IMPACT */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {data.impact.map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="text-6xl font-display font-extrabold text-indigo-600">{item.value}</div>
              <div className="text-lg font-bold text-slate-900">{item.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. USE CASES */}
      <SectionWrapper className="bg-slate-50 rounded-[4rem]">
        <h2 className="text-4xl font-bold text-center mb-16">Industries & Scenarios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.useCases.map((useCase, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-800 text-center">
              {useCase}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. DIFFERENTIATION */}
      <SectionWrapper>
        <div className="bg-indigo-50 p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The EvalufAI Difference</h2>
            <p className="text-lg text-slate-600 italic">
              "{data.differentiation}"
            </p>
          </div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl shadow-indigo-100">
            <Sparkles className="w-10 h-10 text-indigo-600" />
          </div>
        </div>
      </SectionWrapper>

      {/* 10. INTEGRATIONS */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Plays Well with Your Stack</h2>
          <p className="text-slate-500">Native integrations with every major tool.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          {data.integrations.map((tool, i) => (
            <div key={i} className="px-6 py-3 bg-slate-50 rounded-xl font-bold text-slate-500 border border-slate-100">
              {tool}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 11. TRUST / PROOF */}
      <SectionWrapper className="bg-slate-900 text-white rounded-[4rem]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl font-bold mb-4">{data.proof.metric}</div>
          <div className="text-xl text-indigo-400 mb-12 font-bold uppercase tracking-widest">{data.proof.label}</div>
          <p className="text-2xl font-display italic text-slate-300 leading-relaxed">
            {data.proof.testimonial}
          </p>
        </div>
      </SectionWrapper>

      {/* 12. FAQ */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ResourceBlogsSection
        title={`${data.title} Resources`}
        subtitle={`Learn practical strategies, benchmarks, and implementation guidance for ${data.title}.`}
      />

      {/* 13. FINAL CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
            Ready to experience the future of hiring?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
            Join the most innovative companies on earth. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl shadow-black/20">
              Book My Free Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer Nav */}
      <div className="py-12 border-t border-slate-100 text-center">
        <button 
          onClick={() => {
            window.scrollTo(0, 0);
            setView('landing');
          }}
          className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2 mx-auto font-bold"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProductTemplate;
