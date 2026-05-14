import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, desc, features, recommended }) => (
  <div className={`p-8 rounded-3xl border ${recommended ? 'border-indigo-600 ring-4 ring-indigo-50 shadow-xl' : 'border-slate-200'} bg-white`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-500 text-sm mb-6">{desc}</p>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className="text-slate-500 ml-2">/month</span>
    </div>
    <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-all ${recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
      Get Started
    </button>
    <ul className="space-y-4">
      {features.map((f, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600">
          <Check className="w-5 h-5 text-green-500 shrink-0" /> {f}
        </li>
      ))}
    </ul>
  </div>
);

const PricingPage = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-extrabold mb-6">Simple, <span className="text-indigo-600">Transparent</span> Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for your hiring volume.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter"
            price="499"
            desc="Perfect for startups making their first few key hires."
            features={["5 Active Jobs", "50 Assessments/mo", "Basic Proctoring", "Email Support"]}
          />
          <PricingCard 
            title="Growth"
            price="999"
            desc="For mid-sized companies with steady hiring needs."
            features={["20 Active Jobs", "250 Assessments/mo", "Advanced Proctoring", "Video Interviews", "Priority Support"]}
            recommended={true}
          />
          <PricingCard 
            title="Enterprise"
            price="Custom"
            desc="Full-scale solution for global organizations."
            features={["Unlimited Jobs", "Unlimited Assessments", "Custom Integrations", "Dedicated Account Manager", "SSO/SAML"]}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
