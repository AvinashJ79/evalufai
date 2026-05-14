import React from 'react';
import { ArrowRight, Building2, Target, Layers, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 pb-24">
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.4),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(20,184,166,0.35),transparent_40%)]" />
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.25)_45%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            AI-First Solution Catalog
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Solution Pages Designed to Convert Enterprise Buyers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Explore strategic, role-aware solutions built for different hiring motions, from high-volume recruiting to specialized talent programs.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <ShieldCheck className="mb-2 h-5 w-5 text-emerald-300" />
              <p className="text-sm text-slate-100">Enterprise-grade controls and governance</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <BarChart3 className="mb-2 h-5 w-5 text-cyan-300" />
              <p className="text-sm text-slate-100">Operational insights tied to hiring outcomes</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <Sparkles className="mb-2 h-5 w-5 text-violet-300" />
              <p className="text-sm text-slate-100">Automation that scales without quality loss</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-14 max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.8)] backdrop-blur"
          >
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-cyan-100 blur-2xl" />
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200">
                <section.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-1 text-slate-600">{section.description}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/60"
                >
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-6 text-slate-600">{item.description}</p>
                  <button
                    onClick={() => setView(item.id)}
                    className="inline-flex items-center gap-2 font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                  >
                    View solution page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
