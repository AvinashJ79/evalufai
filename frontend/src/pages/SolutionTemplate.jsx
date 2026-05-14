import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Gauge,
  Building2,
  Workflow,
  Quote
} from 'lucide-react';
import ResourceBlogsSection from '../components/shared/ResourceBlogsSection';

const sectionClass = 'mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8';

const SolutionTemplate = ({ data, setView }) => {
  if (!data) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.45),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(45,212,191,0.3),transparent_45%)]" />
        <div className="absolute inset-0 opacity-30 [background:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.3)_45%,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Enterprise AI Solution
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              {data.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              {data.hero.subheading}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setView('book-demo')}
                className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {data.hero.primaryCTA}
              </button>
              <button
                onClick={() => setView('pricing')}
                className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {data.hero.secondaryCTA}
              </button>
            </div>
          </div>

          <div className="grid gap-4 self-end sm:grid-cols-3 lg:grid-cols-1">
            {data.hero.trust.map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mb-10 flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-cyan-700" />
          <h2 className="text-3xl font-bold md:text-4xl">Challenges in {data.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.challenges.map((paragraph) => (
            <article key={paragraph} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-600 leading-relaxed">{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} relative overflow-hidden`}>
        <div className="absolute inset-x-4 inset-y-8 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-50 via-white to-teal-50" />
        <div className="mb-8 flex items-center gap-3">
          <Workflow className="h-6 w-6 text-cyan-700" />
          <h2 className="text-3xl font-bold md:text-4xl">A Better Way with AI</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.solutionOverview.map((paragraph) => (
            <article key={paragraph} className="rounded-2xl border border-cyan-100 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-slate-700 leading-relaxed">{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">What You Can Do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.capabilities.map((capability) => (
            <article
              key={capability.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/60"
            >
              <h3 className="mb-3 text-xl font-bold text-slate-900">{capability.title}</h3>
              <p className="mb-5 text-slate-600">{capability.description}</p>
              <div className="space-y-4 text-sm">
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

      <section className={`${sectionClass} rounded-[2rem] bg-slate-950 text-white`}>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">From Manual to Intelligent Hiring</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-300/20 bg-slate-900 p-8">
            <h3 className="mb-4 text-xl font-semibold text-rose-300">Before</h3>
            <ul className="space-y-3 text-slate-200">
              {data.workflow.before.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-300/20 bg-slate-900 p-8">
            <h3 className="mb-4 text-xl font-semibold text-emerald-300">After</h3>
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
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.howItWorks.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Step {index + 1}</p>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} rounded-[2rem] bg-white`}>
        <div className="mb-10 flex items-center gap-3">
          <Gauge className="h-6 w-6 text-cyan-700" />
          <h2 className="text-3xl font-bold md:text-4xl">Impact on Your Business</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.businessImpact.map((impact) => (
            <article key={impact.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-2 font-bold text-slate-900">{impact.title}</h3>
              <p className="text-sm text-slate-600">{impact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Built for {data.title} Use Cases</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-slate-900">{useCase.title}</h3>
              <p className="text-sm text-slate-600">{useCase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} rounded-[2rem] bg-gradient-to-br from-cyan-50 to-slate-100`}>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Why This Solution Stands Out</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {data.differentiation.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-cyan-100 bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-700" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mb-10 flex items-center gap-3">
          <Building2 className="h-6 w-6 text-cyan-700" />
          <h2 className="text-3xl font-bold md:text-4xl">Integrations</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.integrations.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-slate-900">{group.title}</h3>
              <p className="text-sm text-slate-600">{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} rounded-[2rem] bg-slate-950 text-white`}>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Trust &amp; Proof</h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {data.trust.metrics.map((metric) => (
            <div key={metric} className="rounded-xl border border-white/20 bg-white/10 p-4 text-center text-slate-100">
              {metric}
            </div>
          ))}
        </div>
        <blockquote className="rounded-2xl border border-cyan-300/30 bg-slate-900 p-6 text-lg italic text-slate-200">
          <Quote className="mb-3 h-6 w-6 text-cyan-300" />
          {data.trust.testimonial}
        </blockquote>
      </section>

      <section className={sectionClass}>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="space-y-4">
          {data.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">
                {faq.question}
                <span className="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ResourceBlogsSection
        title={`${data.title} Resources`}
        subtitle={`Explore actionable blogs and playbooks to improve ${data.title.toLowerCase()} outcomes.`}
      />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">{data.finalCta.headline}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-cyan-100">{data.finalCta.subheading}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => setView('book-demo')}
              className="w-full rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:bg-slate-100 sm:w-auto"
            >
              Book Demo
            </button>
            <button
              onClick={() => setView('pricing')}
              className="w-full rounded-xl border border-white/60 px-8 py-4 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
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
          className="inline-flex items-center gap-2 font-semibold text-slate-500 transition hover:text-cyan-700"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          Back to all solutions
        </button>
      </div>
    </div>
  );
};

export default SolutionTemplate;
