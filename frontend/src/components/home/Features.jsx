import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Lock, CheckCircle } from 'lucide-react';

const Features = () => (
  <section id="product" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
            <Bot className="w-6 h-6" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">AI-First Pre-Screening</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Let our AI chatbot handle the initial touchpoints. Engage candidates with role-specific questions and evaluate intent and confidence.
          </p>
          <ul className="space-y-4">
            {["Adaptive question logic", "Confidence scoring", "NLP evaluation"].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200">
          <div className="bg-slate-900 rounded-2xl aspect-video flex items-center justify-center p-8">
             <div className="text-indigo-400 font-mono text-sm space-y-2 w-full">
                <p className="text-slate-500">// AI Interaction Log</p>
                <p>{"> Candidate: 'I have 5 years experience in React'"}</p>
                <p className="text-green-400">{"> AI: Analyzing confidence... VERIFIED (High)"}</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 bg-white p-4 rounded-3xl shadow-2xl border border-slate-200">
           <div className="bg-indigo-600 rounded-2xl aspect-video flex items-center justify-center">
              <Lock className="text-white w-20 h-20 opacity-20" />
           </div>
        </div>
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Bulletproof Proctoring</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Hire with confidence knowing our AI is watching. From tab-switch detection to real-time face verification.
          </p>
          <ul className="space-y-4">
            {["Webcam & AI Face Detection", "Tab-switch tracking", "Browser Lockdown"].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="text-green-500 w-5 h-5" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Features;
