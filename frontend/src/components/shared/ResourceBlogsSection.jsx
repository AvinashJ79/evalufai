import React from 'react';

const fallbackPosts = [
  {
    title: 'Recruitment Tools: What They Offer in Agency and Enterprise Hiring',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'How to Convert Passive Job Seekers into High-Intent Candidates',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'How to Attract Tech Talent Through Strong Team Culture',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Quality of Hire: Why It Should Be Your North-Star Hiring Metric',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=80'
  }
];

const ResourceBlogsSection = ({
  title = 'Recommended Resources',
  subtitle = 'Explore practical guides, frameworks, and trend reports from EvalufAI.',
  posts = fallbackPosts
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">{subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
                Blog
              </p>
              <h3 className="text-[1.65rem] font-bold leading-tight text-slate-900">
                {post.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResourceBlogsSection;
