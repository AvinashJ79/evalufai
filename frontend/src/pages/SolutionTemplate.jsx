import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const sectionClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20';

const SolutionTemplate = ({ data, setView }) => {
  if (!data) return null;

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-32 pb-24">
        <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_top_right,#bae6fd_0%,transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 mb-6">
            {data.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            {data.hero.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setView('book-demo')}
              className="px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              {data.hero.primaryCTA}
            </button>
            <button
              onClick={() => setView('pricing')}
              className="px-8 py-4 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              {data.hero.secondaryCTA}
            </button>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {data.hero.trust.map((item) => (
              <div key={item} className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-slate-600 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass}`}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">Challenges in {data.title}</h2>
        <div className="max-w-4xl space-y-6 text-slate-600 leading-relaxed text-lg">
          {data.challenges.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-50 rounded-[2.5rem]`}>
        <h2 className="text-4xl font-bold text-slate-900 mb-8">A Better Way with AI</h2>
        <div className="max-w-5xl space-y-6 text-slate-600 text-lg leading-relaxed">
          {data.solutionOverview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-4xl font-bold text-slate-900 mb-12">What You Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((capability) => (
            <article key={capability.title} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
              <p className="text-slate-600 mb-4">{capability.description}</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-900">How it works</p>
                  <p className="text-slate-600">{capability.howItWorks}</p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-700">Outcome</p>
                  <p className="text-slate-600">{capability.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-900 text-white rounded-[2.5rem]`}>
        <h2 className="text-4xl font-bold mb-10">From Manual to Intelligent Hiring</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-rose-300 mb-4">Before</h3>
            <ul className="space-y-3 text-slate-200">
              {data.workflow.before.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-emerald-300 mb-4">After</h3>
            <ul className="space-y-3 text-slate-100">
              {data.workflow.after.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.howItWorks.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 p-6 bg-white">
              <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 mb-2">Step {index + 1}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-50 rounded-[2.5rem]`}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">Impact on Your Business</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.businessImpact.map((impact) => (
            <article key={impact.title} className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">{impact.title}</h3>
              <p className="text-slate-600 text-sm">{impact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">Built for {data.title} Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.useCases.map((useCase) => (
            <article key={useCase.title} className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">{useCase.title}</h3>
              <p className="text-slate-600 text-sm">{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-sky-50 rounded-[2.5rem]`}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">Why This Solution Stands Out</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {data.differentiation.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white border border-sky-100 rounded-xl p-4">
              <CheckCircle2 className="w-5 h-5 text-sky-600 mt-0.5" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">Integrations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.integrations.map((group) => (
            <article key={group.title} className="border border-slate-200 rounded-2xl p-6 bg-white">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{group.title}</h3>
              <p className="text-slate-600 text-sm">{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-900 text-white rounded-[2.5rem]`}>
        <h2 className="text-4xl font-bold mb-10">Trust &amp; Proof</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {data.trust.metrics.map((metric) => (
            <div key={metric} className="bg-slate-800 rounded-xl p-4 text-center text-slate-100">
              {metric}
            </div>
          ))}
        </div>
        <blockquote className="text-xl text-slate-300 italic leading-relaxed border-l-4 border-sky-400 pl-5">
          {data.trust.testimonial}
        </blockquote>
      </section>

      <section className={sectionClass}>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">FAQ</h2>
        <div className="space-y-4">
          {data.faqs.map((faq) => (
            <details key={faq.question} className="group border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                {faq.question}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-r from-sky-600 to-cyan-600 text-white p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">{data.finalCta.headline}</h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">{data.finalCta.subheading}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setView('book-demo')}
              className="px-8 py-4 rounded-xl bg-white text-sky-700 font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Book Demo
            </button>
            <button
              onClick={() => setView('pricing')}
              className="px-8 py-4 rounded-xl border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <div className="pb-16 text-center">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            setView('solutions');
          }}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-700 font-semibold"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to all solutions
        </button>
      </div>
    </div>
  );
};

export default SolutionTemplate;
