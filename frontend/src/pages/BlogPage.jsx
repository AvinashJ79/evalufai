import React, { useMemo, useState } from 'react';
import { ArrowRight, Clock3, Tag } from 'lucide-react';

const categories = [
  'All',
  'AI in Hiring',
  'Recruitment Strategy',
  'Talent Analytics',
  'Employer Branding',
  'Compliance',
  'Product Updates'
];

const blogPosts = [
  {
    id: 1,
    title: 'How Enterprise TA Teams Use AI to Cut Time-to-Hire by 35%',
    category: 'AI in Hiring',
    readTime: '6 min read',
    date: 'May 10, 2026',
    excerpt:
      'Discover the operating model leading talent teams use to automate resume screening, prioritize qualified candidates, and reduce hiring bottlenecks without compromising quality.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 2,
    title: 'From Reactive to Predictive: Building a Talent Analytics Command Center',
    category: 'Talent Analytics',
    readTime: '8 min read',
    date: 'May 4, 2026',
    excerpt:
      'Move beyond weekly reports. Learn how to track funnel health, hiring velocity, and quality metrics in real time to make faster and more confident workforce decisions.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 3,
    title: 'Designing Structured Interviews That Scale Across Global Teams',
    category: 'Recruitment Strategy',
    readTime: '5 min read',
    date: 'Apr 29, 2026',
    excerpt:
      'Standardized interview frameworks improve fairness, signal quality, and decision speed. This guide shares the scorecard approach used by high-growth organizations.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 4,
    title: 'Hiring Compliance in 2026: What Talent Leaders Need to Operationalize',
    category: 'Compliance',
    readTime: '7 min read',
    date: 'Apr 20, 2026',
    excerpt:
      'A practical checklist for implementing audit-ready workflows, transparent evaluation criteria, and defensible hiring records across jurisdictions.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 5,
    title: 'Employer Branding That Converts: Content Patterns That Attract Top Talent',
    category: 'Employer Branding',
    readTime: '4 min read',
    date: 'Apr 14, 2026',
    excerpt:
      'Brand trust and candidate experience have direct pipeline impact. See the messaging and storytelling framework that improves quality applications at scale.',
    image:
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 6,
    title: 'New Release: Workflow Automation for High-Volume Hiring',
    category: 'Product Updates',
    readTime: '3 min read',
    date: 'Apr 8, 2026',
    excerpt:
      'Explore the latest platform capabilities including AI-driven candidate routing, dynamic interview scheduling, and real-time SLA monitoring for recruiting ops.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
  }
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium">
            Insights & Research
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Practical insights for modern, AI-powered hiring teams
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-200 md:text-lg">
            Actionable playbooks, market trends, and proven frameworks to help
            talent leaders improve hiring speed, quality, and operational
            efficiency.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-12 lg:px-8">
        <aside className="lg:col-span-3">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">
              Latest Articles
            </h2>
            <span className="text-sm text-slate-500">
              {filteredPosts.length} posts
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Tag size={14} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={14} />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
                  >
                    Read article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
