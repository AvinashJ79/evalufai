import React from 'react';
import { ArrowRight, Building2, Target, Layers } from 'lucide-react';

const sections = [
  {
    title: 'By Business Type',
    icon: Building2,
    description: 'Solutions tailored by company stage and operating model.',
    items: [
      {
        id: 'enterprise',
        title: 'Enterprise Hiring',
        description: 'Standardize hiring quality across departments, regions, and teams.'
      },
      {
        id: 'staffing-firms',
        title: 'Staffing Firms Hiring',
        description: 'Deliver vetted candidates to clients with speed and consistency.'
      },
      {
        id: 'startups',
        title: 'Startup Hiring',
        description: 'Scale talent acquisition quickly without sacrificing decision quality.'
      }
    ]
  },
  {
    title: 'By Use Case',
    icon: Target,
    description: 'Focused pages for specific hiring goals and challenges.',
    items: [
      {
        id: 'dei',
        title: 'DEI Hiring',
        description: 'Build fair, structured, and inclusive hiring workflows.'
      },
      {
        id: 'campus-hiring',
        title: 'Campus Hiring',
        description: 'Manage large graduate pipelines with speed and control.'
      },
      {
        id: 'high-volume',
        title: 'High-Volume Hiring',
        description: 'Automate repetitive work and keep funnel quality high at scale.'
      }
    ]
  },
  {
    title: 'By Need',
    icon: Layers,
    description: 'Specialized workflows aligned to niche hiring requirements.',
    items: [
      {
        id: 'sap-hiring',
        title: 'SAP Hiring',
        description: 'Validate specialized SAP skills with structured assessments.'
      },
      {
        id: 'industry-hiring',
        title: 'Industry Hiring',
        description: 'Adapt hiring workflows to domain-specific role needs.'
      }
    ]
  }
];

const SolutionsPage = ({ setView }) => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-display font-extrabold mb-6 text-slate-900">
            Solution Pages for Every Hiring Strategy
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore structured, AI-first solution pages built with a consistent layout and business-focused content.
          </p>
        </header>

        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.title} className="border border-slate-200 rounded-3xl p-8 bg-slate-50/60">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-slate-600 mt-1">{section.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <article key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <button
                      onClick={() => setView(item.id)}
                      className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-800"
                    >
                      View solution page
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
