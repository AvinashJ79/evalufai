import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Clock, ShieldCheck, Users, Globe } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';

const CaseStudiesListPage = ({ setView }) => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-8"
          >
            CUSTOMER SUCCESS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8"
          >
            Real Results for <span className="text-indigo-600">Global Teams</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Discover how leading organizations use EvalufAI to source, screen, and upskill their workforce with absolute integrity.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(caseStudiesData).map(([id, study], i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setView(`case-study-${id}`)}
                className="group cursor-pointer bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {i % 2 === 0 ? <TrendingUp className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <div className="flex gap-2">
                    {study.metrics.slice(0, 1).map((m, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold">
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                  {study.title}
                </h3>
                
                <p className="text-slate-600 mb-8 line-clamp-3 text-lg leading-relaxed">
                  {study.summary}
                </p>

                <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-4 transition-all">
                  Read Full Case Study <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[4rem] p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-8 leading-tight">Want to be our next success story?</h2>
          <p className="text-xl text-slate-400 mb-10">Join 500+ global brands hiring with EvalufAI.</p>
          <button className="px-12 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/25 text-lg">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesListPage;
