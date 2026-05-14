import { 
  Users, 
  Mic2, 
  MessageSquare, 
  ShieldCheck, 
  UserCheck, 
  Layout, 
  Code2, 
  BrainCircuit, 
  Heart, 
  Sparkles, 
  MonitorPlay, 
  Video, 
  Laptop, 
  PlayCircle, 
  GraduationCap, 
  Gamepad2,
  Building2,
  Briefcase,
  Users2,
  Target,
  Rocket,
  Layers,
  Database,
  Globe,
  FileText,
  BookOpen,
  Library,
  HelpCircle,
  BarChart3
} from 'lucide-react';

export const navData = {
  products: [
    {
      title: "Engage",
      icon: Users,
      color: "blue",
      subtitle: "Personalized candidate engagement",
      links: [
        { name: "AI Recruiter", id: "ai-recruiter" },
        { name: "AI Voice", id: "ai-voice" },
        { name: "AI ChatBot", id: "ai-chatbot" }
      ]
    },
    {
      title: "Verify",
      icon: ShieldCheck,
      color: "green",
      subtitle: "Integrity at every step",
      links: [
        { name: "AI Proctoring", id: "ai-proctoring" },
        { name: "ID Verify", id: "id-verify" }
      ]
    },
    {
      title: "Assess",
      icon: Layout,
      color: "indigo",
      subtitle: "Comprehensive skill evaluation",
      links: [
        { name: "Technical Assessments", id: "technical-assessments" },
        { name: "Competency Assessments", id: "competency-assessments" },
        { name: "Behavioral Assessments", id: "behavioral-assessments" },
        { name: "AI Assistant", id: "ai-assistant" },
        { name: "Coding Simulations", id: "coding-simulations" }
      ]
    },
    {
      title: "Interview",
      icon: Video,
      color: "purple",
      subtitle: "Seamless interviewing experience",
      links: [
        { name: "AI Video Interviews", id: "ai-video-interviews" },
        { name: "Live Coding Interviews", id: "live-coding-interviews" },
        { name: "AI Interview Helper", id: "ai-interview-helper" },
        { name: "One-Way Video Interviews", id: "one-way-video-interviews" }
      ]
    },
    {
      title: "Learn",
      icon: GraduationCap,
      color: "orange",
      subtitle: "Continuous growth and development",
      links: [
        { name: "L&D Software", id: "ld-software" },
        { name: "AI Role Play", id: "ai-role-play" }
      ]
    }
  ],
  solutions: [
    {
      title: "By Business Type",
      icon: Building2,
      color: "blue",
      subtitle: "Tailored for your organization",
      links: [
        { name: "Enterprise", id: "enterprise" },
        { name: "Staffing Firms", id: "staffing-firms" },
        { name: "Startups", id: "startups" }
      ]
    },
    {
      title: "By Use Case",
      icon: Target,
      color: "red",
      subtitle: "Solve specific hiring challenges",
      links: [
        { name: "DEI", id: "dei" },
        { name: "Campus Hiring", id: "campus-hiring" },
        { name: "High Volume", id: "high-volume" }
      ]
    },
    {
      title: "By Need",
      icon: Layers,
      color: "amber",
      subtitle: "Focused solutions for every niche",
      links: [
        { name: "SAP", id: "sap-hiring" },
        { name: "Industry Hiring", id: "industry-hiring" }
      ]
    }
  ],
  resources: [
    {
      title: "General Recruiting",
      icon: Globe,
      color: "sky",
      subtitle: "Insights and industry trends",
      links: [
        { name: "Blog", id: "blog" },
        { name: "Case Studies", id: "case-studies-list" },
        { name: "Library", id: "library" }
      ]
    },
    {
      title: "Skills-Based Hiring",
      icon: FileText,
      color: "emerald",
      subtitle: "Guides and tools for better hiring",
      links: [
        { name: "Interview Questions", id: "interview-questions" },
        { name: "Job Descriptions", id: "job-descriptions" },
        { name: "Skills Test Library", id: "skills-library" }
      ]
    },
    {
      title: "Product Support",
      icon: HelpCircle,
      color: "rose",
      subtitle: "Get the most out of EvalufAI",
      links: [
        { name: "Help Center", id: "help-center" },
        { name: "Product Comparison", id: "product-comparison" }
      ]
    }
  ]
};
