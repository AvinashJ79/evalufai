const buildSolutionData = (title) => ({
  title,
  hero: {
    headline: `Unlock Better Outcomes in ${title}`,
    subheading: `Built for teams in ${title} that need faster, more consistent decisions with lower operating cost and higher quality results.`,
    primaryCTA: 'Book Demo',
    secondaryCTA: 'See How It Works',
    trust: ['Trusted by 300+ teams', 'Up to 45% faster cycle time', '99.9% platform availability']
  },
  challenges: [
    `In ${title}, teams are expected to move quickly while maintaining quality and fairness. In practice, most workflows are spread across disconnected tools, which forces recruiters and hiring managers to manually stitch information together before they can make decisions.`,
    'This fragmentation creates hidden inefficiencies at every stage. Screening is repetitive, handoffs are slow, and interview feedback is often inconsistent. As demand grows, process bottlenecks increase and teams lose visibility into why strong candidates drop out.',
    `The business impact compounds over time: longer cycle times, increased cost per hire, and uneven hiring quality across departments. Without a structured approach, ${title} teams struggle to scale performance in a reliable way.`
  ],
  solutionOverview: [
    `Our AI-powered platform gives ${title} teams a unified way to run the full hiring lifecycle. Instead of manually moving candidates through disconnected steps, the system automates high-volume tasks and provides decision support where judgment matters most.`,
    'From sourcing and screening to evaluation and final selection, each stage is standardized with clear criteria and data-backed insights. Teams can act faster while maintaining consistency across roles, locations, and hiring managers.',
    `What makes this different is intelligent orchestration. You do not just automate admin work; you improve decision quality with structured, explainable signals tailored to ${title} workflows.`
  ],
  capabilities: [
    {
      title: 'Automated Sourcing',
      description: `Surface qualified profiles quickly for ${title} pipelines without manual search-heavy effort.`,
      howItWorks: 'AI maps role requirements to candidate attributes and continuously reprioritizes top-fit matches.',
      outcome: 'More relevant candidates in less time.'
    },
    {
      title: 'AI Screening',
      description: 'Reduce resume triage overhead and improve shortlist quality.',
      howItWorks: 'Candidates are scored against role criteria using explainable ranking logic and configurable thresholds.',
      outcome: 'Faster screening with more consistent decisions.'
    },
    {
      title: 'Skill Validation',
      description: 'Confirm real-world capability before final interview rounds.',
      howItWorks: 'Role-aligned assessments measure practical skills and benchmark performance against clear standards.',
      outcome: 'Higher confidence in hiring quality.'
    },
    {
      title: 'Interview Automation',
      description: 'Standardize interview execution and feedback capture across teams.',
      howItWorks: 'The platform automates scheduling, structured scorecards, and post-interview summaries.',
      outcome: 'Less coordination work and better collaboration.'
    },
    {
      title: 'Fraud Prevention',
      description: 'Maintain process integrity for remote and high-volume hiring.',
      howItWorks: 'Proctoring and anomaly detection identify suspicious patterns during assessments and interviews.',
      outcome: 'More trustworthy outcomes and reduced risk.'
    },
    {
      title: 'Hiring Analytics',
      description: 'Track funnel health, quality signals, and team performance in one place.',
      howItWorks: 'Unified dashboards provide stage-level metrics, trend analysis, and actionable recommendations.',
      outcome: 'Continuous optimization of hiring operations.'
    }
  ],
  workflow: {
    before: [
      'Fragmented systems and manual handoffs',
      'Slow screening and scheduling cycles',
      'Inconsistent evaluation quality across teams'
    ],
    after: [
      'Unified end-to-end workflow in one platform',
      'Automated execution with AI decision support',
      'Structured, data-driven and repeatable outcomes'
    ]
  },
  howItWorks: [
    {
      title: 'Input',
      description: 'Define role requirements, skill expectations, and hiring goals.'
    },
    {
      title: 'AI Processing',
      description: 'The system screens, matches, and evaluates candidates using configurable intelligence.'
    },
    {
      title: 'Output',
      description: 'Recruiters and managers receive qualified candidates, insights, and recommended next actions.'
    }
  ],
  businessImpact: [
    {
      title: 'Faster Hiring Cycles',
      description: 'Move from requisition to shortlist and offer in fewer days.'
    },
    {
      title: 'Reduced Operational Cost',
      description: 'Lower manual effort across sourcing, screening, and coordination.'
    },
    {
      title: 'Improved Hire Quality',
      description: 'Use skill-based validation and structured criteria for better selection accuracy.'
    },
    {
      title: 'Scalable Operations',
      description: `Run ${title} workflows consistently across teams, roles, and regions.`
    }
  ],
  useCases: [
    {
      title: 'High-Volume Hiring',
      description: 'Process large applicant pools quickly while preserving quality controls.'
    },
    {
      title: 'Enterprise Hiring',
      description: 'Standardize execution across business units and geographies.'
    },
    {
      title: 'Specialized Roles',
      description: 'Validate role-specific capabilities with precision assessments.'
    },
    {
      title: 'Distributed Teams',
      description: 'Coordinate hiring at scale with shared visibility and governance.'
    }
  ],
  differentiation: [
    'End-to-end workflow from intake to final decision',
    'AI-driven decision support with consistent scoring logic',
    'Skill-based validation to improve selection confidence',
    'Integration-ready architecture across ATS, CRM, and HR platforms'
  ],
  integrations: [
    {
      title: 'ATS Compatibility',
      description: 'Connect with leading ATS platforms to sync candidate stages and hiring status.'
    },
    {
      title: 'CRM / HR Systems',
      description: 'Push and pull talent data across recruiting and people operations tools.'
    },
    {
      title: 'API Support',
      description: 'Use APIs and webhooks for custom workflows, analytics pipelines, and automation.'
    }
  ],
  trust: {
    metrics: ['45% faster hiring cycle', '30% lower screening effort', '25% improved shortlist quality'],
    testimonial: `"With this ${title} solution, we replaced manual bottlenecks with measurable, scalable hiring performance."`
  },
  faqs: [
    {
      question: `Who is this ${title} solution for?`,
      answer: `It is designed for talent teams and hiring leaders operating in ${title} environments who need speed, consistency, and measurable quality.`
    },
    {
      question: 'How does it work in practice?',
      answer: 'You define requirements, the AI engine automates screening and evaluation, and teams receive ranked candidates with decision-ready insights.'
    },
    {
      question: 'Can this scale for high-volume or multi-region hiring?',
      answer: 'Yes. The platform is built for high-throughput workflows and supports standardized processes across distributed teams.'
    },
    {
      question: 'What integrations are supported?',
      answer: 'The solution supports ATS connectivity, HR/CRM system sync, and API-based integration for custom use cases.'
    },
    {
      question: 'Is the solution secure and compliant?',
      answer: 'Yes. Enterprise controls include role-based access, encryption, auditability, and configuration for compliance requirements.'
    },
    {
      question: 'Can we customize workflows and scoring criteria?',
      answer: 'Yes. Teams can configure stages, evaluation rules, and ranking weights to match hiring policies and role needs.'
    },
    {
      question: 'How quickly can we launch?',
      answer: 'Most teams can launch in weeks depending on integration complexity and workflow customization depth.'
    }
  ],
  finalCta: {
    headline: `Bring Intelligent Hiring to ${title}`,
    subheading: 'Modernize your process with automation, insight, and scalable execution across your entire hiring workflow.'
  }
});

const solutionTitles = {
  enterprise: 'Enterprise Hiring',
  'staffing-firms': 'Staffing Firms Hiring',
  startups: 'Startup Hiring',
  dei: 'DEI Hiring',
  'campus-hiring': 'Campus Hiring',
  'high-volume': 'High-Volume Hiring',
  'sap-hiring': 'SAP Hiring',
  'industry-hiring': 'Industry Hiring'
};

export const solutionsData = Object.fromEntries(
  Object.entries(solutionTitles).map(([id, title]) => [id, buildSolutionData(title)])
);
