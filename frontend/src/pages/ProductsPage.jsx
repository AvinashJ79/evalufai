import React from 'react';
import { motion } from 'framer-motion';
import { Box, Code, Video, Shield } from 'lucide-react';

const ProductCard = ({ title, desc, icon: Icon, features }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-6">{desc}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const ProductsPage = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-extrabold mb-6">Our <span className="text-indigo-600">AI Product Suite</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools designed to validate skills and ensure hiring integrity at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard 
            title="Skill Assessments"
            desc="Role-based tests covering 2,500+ skills from coding to soft skills."
            icon={Code}
            features={["Adaptive difficulty", "Real-world simulations", "Custom question builder"]}
          />
          <ProductCard 
            title="AI Video Interviews"
            desc="One-way video interviews with real-time sentiment and intent analysis."
            icon={Video}
            features={["Automated scheduling", "Keyword extraction", "Confidence scoring"]}
          />
          <ProductCard 
            title="Live Proctoring"
            desc="AI-monitored environment to prevent cheating and ensure authenticity."
            icon={Shield}
            features={["Face detection", "Tab tracking", "Browser lockdown"]}
          />
          <ProductCard 
            title="Candidate Dashboard"
            desc="A seamless experience for candidates to showcase their true potential."
            icon={Box}
            features={["Skill verification badges", "Detailed feedback", "Practice mode"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
