import React from 'react';
import { ArrowRight, Building2, Link2 } from 'lucide-react';

const integrationCards = [
  {
    type: 'Partnership',
    name: 'Workday',
    description: 'Bi-directional sync for job requisitions, candidate profiles, and hiring status updates.',
    href: 'https://www.workday.com/',
    logoText: 'W',
  },
  {
    type: 'Partnership',
    name: 'SAP SuccessFactors',
    description: 'Unify hiring workflows with enterprise HR operations and compliance-ready reporting.',
    href: 'https://www.sap.com/products/hcm.html',
    logoText: 'SAP',
  },
  {
    type: 'Partnership',
    name: 'Greenhouse',
    description: 'Push interview scores and assessment insights directly into recruiter scorecards.',
    href: 'https://www.greenhouse.com/',
    logoText: 'G',
  },
  {
    type: 'Integration',
    name: 'Lever',
    description: 'Automate stage transitions, trigger assessments, and keep recruiter actions in one flow.',
    href: 'https://www.lever.co/',
    logoText: 'L',
  },
  {
    type: 'Integration',
    name: 'Slack',
    description: 'Instant hiring alerts, interview notifications, and approvals inside team channels.',
    href: 'https://slack.com/',
    logoText: 'S',
  },
  {
    type: 'Integration',
    name: 'Microsoft Teams',
    description: 'Collaborative candidate reviews and stakeholder updates without leaving Teams.',
    href: 'https://www.microsoft.com/microsoft-teams/group-chat-software',
    logoText: 'MT',
  },
  {
    type: 'Client Ecosystem',
    name: 'Adecco Group',
    description: 'Staffing client workflows with high-volume assessment and pipeline automation.',
    href: 'https://www.adeccogroup.com/',
    logoText: 'A',
  },
  {
    type: 'Client Ecosystem',
    name: 'Randstad',
    description: 'Enterprise-scale recruiting operations supported with structured screening and integrations.',
    href: 'https://www.randstad.com/',
    logoText: 'R',
  },
];

const badgeStyles = {
  Partnership: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Integration: 'bg-sky-50 text-sky-700 border-sky-200',
  'Client Ecosystem': 'bg-violet-50 text-violet-700 border-violet-200',
};

const IntegrationsPage = ({ setView }) => {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-semibold tracking-widest uppercase">
            Partnerships and Integrations
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Brands Your Team Already Uses
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our ecosystem of technology partners, platform integrations, and enterprise client connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCards.map((card) => (
            <article
              key={`${card.type}-${card.name}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                  <span className="text-slate-700 text-sm font-extrabold tracking-wide">
                    {card.logoText}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyles[card.type]}`}
                >
                  {card.type === 'Partnership' ? <Building2 className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                  {card.type}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{card.name}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{card.description}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 font-semibold text-sm"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 px-8 py-10 md:px-12 md:py-14 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sky-100 text-sm font-semibold tracking-widest uppercase">Ready to connect your stack?</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                See EvalufAI Integrations in Action
              </h2>
              <p className="mt-3 text-sky-100 max-w-2xl">
                Book a personalized demo to explore workflows, partner connectivity, and enterprise deployment options.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setView('book-demo')}
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-white text-sky-700 font-bold hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Book a Demo
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default IntegrationsPage;
