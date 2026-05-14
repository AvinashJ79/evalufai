import { 
  Users, ShieldCheck, Layout, Video, GraduationCap, 
  ArrowRight, CheckCircle2, AlertCircle, Zap, 
  BarChart3, Globe, MessageSquare, Mic2, Code2, 
  BrainCircuit, Sparkles, MonitorPlay, Rocket, Layers, Database,
  UserCheck, PlayCircle
} from 'lucide-react';

export const productsData = {
  'ai-recruiter': {
    title: 'AI Recruiter',
    icon: Users,
    color: 'blue',
    hero: {
      headline: 'Meet Your 24/7 Autonomous Recruiting Partner',
      subheading: 'AI Recruiter autonomously sources, screens, and engages top-tier talent across 50+ platforms, delivering a shortlist of high-intent candidates directly to your desk.',
      primaryCTA: 'Book a Demo',
      secondaryCTA: 'See AI in Action'
    },
    problem: {
      title: 'Why Sourcing Needs Reinvention',
      paragraphs: [
        "Recruiters spend 70% of their week on manual sourcing and repetitive outreach. In a fast-moving market, the delay in finding and contacting candidates means losing the best talent to competitors.",
        "Manual sourcing is also prone to bias and limited by the recruiter’s network and keywords. It’s an inefficient process that fails to surface the 'hidden gems' who don’t fit the standard search pattern."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Recruiter',
      description: 'EvalufAI AI Recruiter is an autonomous agent that thinks like a human recruiter but works with the speed of an algorithm. It uses advanced NLP to understand complex job requirements and finds candidates based on actual capability, not just keywords.'
    },
    beforeAfter: {
      before: ['15+ hours/week spent on sourcing', 'Inconsistent candidate engagement', 'Limited search radius', 'Manual data entry into ATS'],
      after: ['Zero manual sourcing effort', 'Instant, personalized outreach', 'Global reach across 50+ sites', 'Auto-synced candidate profiles']
    },
    features: [
      {
        title: 'Autonomous Sourcing',
        description: 'Scours LinkedIn, GitHub, StackOverflow, and more.',
        howItWorks: 'Uses AI agents to crawl and index candidate profiles based on skill relevance.',
        outcome: '5x larger pool of qualified talent.'
      },
      {
        title: 'Contextual Outreach',
        description: 'Sends highly personalized messages that candidates actually open.',
        howItWorks: 'Analyzes a candidate’s past projects and career trajectory to tailor the pitch.',
        outcome: '300% increase in response rates.'
      },
      {
        title: 'Real-time Calibration',
        description: 'Learns from your feedback on which candidates you like.',
        howItWorks: 'Adjusts search parameters dynamically as you thumbs-up/down profiles.',
        outcome: 'Perfect alignment with hiring manager needs.'
      },
      {
        title: 'Intent Detection',
        description: 'Identifies passive candidates who are ready for a move.',
        howItWorks: 'Analyzes social signals and profile updates to predict churn.',
        outcome: 'Engage talent before they hit the open market.'
      },
      {
        title: 'ATS Integration',
        description: 'Seamlessly pushes new candidates into your existing workflow.',
        howItWorks: 'Native API connections with Workday, Greenhouse, and Lever.',
        outcome: 'Clean, centralized candidate database.'
      }
    ],
    howItWorks: [
      { step: 'Define', text: 'Input your JD or describe the ideal hire in plain English.' },
      { step: 'Search', text: 'AI agents scan the global web for matching capability.' },
      { step: 'Engage', text: 'Personalized messages are sent via Email, LinkedIn, or SMS.' },
      { step: 'Deliver', text: 'Interested candidates are booked directly onto your calendar.' }
    ],
    impact: [
      { label: 'Sourcing Time', value: '-90%' },
      { label: 'Response Rate', value: '45%' },
      { label: 'Shortlist Time', value: '< 24h' }
    ],
    useCases: ['Executive Sourcing', 'Diversity Hiring', 'Global Engineering Hubs', 'Rapid Startup Scaling'],
    differentiation: "Our AI doesn’t just match keywords; it reads code, analyzes portfolios, and understands the 'intent' behind a career move.",
    integrations: ['LinkedIn', 'GitHub', 'Workday', 'Greenhouse', 'Slack'],
    proof: {
      metric: '50,000+',
      label: 'Hours saved for recruiters monthly',
      testimonial: '"AI Recruiter found our Lead Architect on a niche forum we never would have searched. Truly impressive."'
    },
    faqs: [
      { q: 'Is it ethical?', a: 'Yes, we prioritize transparency and candidate privacy in all outreach.' },
      { q: 'Can it replace my sourcing team?', a: 'It empowers them to focus on strategy while the AI handles the grunt work.' },
      { q: 'How many platforms does it search?', a: 'Over 50 global talent platforms including niche technical communities.' },
      { q: 'Does it support diversity hiring?', a: 'Yes, we have built-in filters to ensure a diverse candidate slate.' },
      { q: 'How do candidates feel about it?', a: 'Response rates are high because the messages are relevant and non-spammy.' },
      { q: 'Is there a setup fee?', a: 'No, you can start sourcing your first role within 15 minutes.' }
    ]
  },
  'ai-voice': {
    title: 'AI Voice Screening',
    icon: Mic2,
    color: 'emerald',
    hero: {
      headline: 'Screen Thousands of Candidates by Phone in Minutes',
      subheading: 'AI Voice conducts natural, real-time phone interviews to verify skills, language proficiency, and cultural fit—without a single recruiter picking up the phone.',
      primaryCTA: 'Start Screening',
      secondaryCTA: 'Listen to Sample'
    },
    problem: {
      title: 'Why Phone Screening Needs Reinvention',
      paragraphs: [
        "Manual phone screens are the single biggest time-sink in recruiting. Recruiter schedules are often blocked for weeks with introductory calls that should have been automated.",
        "Human screening is also inconsistent. Different recruiters ask different questions, leading to subjective data that makes it hard to compare candidates fairly."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Voice',
      description: 'EvalufAI AI Voice uses state-of-the-art conversational AI to hold fluent, intelligent phone conversations. It can probe deeper into responses, follow up on specific claims, and assess soft skills with 95% accuracy.'
    },
    beforeAfter: {
      before: ['2-week delay for initial screens', 'Inconsistent interview notes', 'Recruiter burnout from repetitive calls', 'High "candidate ghosting" rates'],
      after: ['Instant screening upon application', 'Structured, data-backed reports', 'Recruiters focus on final rounds', 'Higher candidate engagement']
    },
    features: [
      {
        title: 'Natural Conversations',
        description: 'Advanced TTS and STT for human-like interaction.',
        howItWorks: 'Uses low-latency neural voices that can handle interruptions and pivots.',
        outcome: 'Candidates forget they are talking to an AI.'
      },
      {
        title: 'Dynamic Questioning',
        description: 'Follow-up questions based on candidate answers.',
        howItWorks: 'Branching logic that probes deeper into interesting or vague responses.',
        outcome: 'Deep insight into candidate experience.'
      },
      {
        title: 'Language Proficiency',
        description: 'Measures fluency, accent clarity, and vocabulary.',
        howItWorks: 'AI-driven linguistics analysis tailored for global roles.',
        outcome: 'Certainty in communication skills.'
      },
      {
        title: 'Sentiment Analysis',
        description: 'Detects confidence, hesitation, and enthusiasm.',
        howItWorks: 'Analyzes vocal patterns and pitch to understand candidate mood.',
        outcome: 'Holistic behavioral profile.'
      },
      {
        title: 'Anti-Fraud Protection',
        description: 'Ensures the person on the phone is the one you hire.',
        howItWorks: 'Voice biometrics matching against future interview rounds.',
        outcome: 'Elimination of proxy interviewing.'
      }
    ],
    howItWorks: [
      { step: 'Trigger', text: 'Candidate applies and receives a call or schedule link.' },
      { step: 'Interview', text: 'AI Voice conducts a 10-15 minute structured screen.' },
      { step: 'Transcribe', text: 'Call is recorded, transcribed, and summarized by AI.' },
      { step: 'Qualify', text: 'Top candidates are instantly moved to the next stage in your ATS.' }
    ],
    impact: [
      { label: 'Time to Screen', value: '-95%' },
      { label: 'Screen Capacity', value: 'Unlimited' },
      { label: 'Data Accuracy', value: '98%' }
    ],
    useCases: ['High-Volume BPO Hiring', 'Multilingual Support Roles', 'Sales SDR Screening', 'Graduate Programs'],
    differentiation: 'Unlike IVR systems, EvalufAI AI Voice is truly conversational, allowing for unstructured dialogue and complex follow-ups.',
    integrations: ['Twilio', 'Zoom Phone', 'Workday', 'SuccessFactors', 'Greenhouse'],
    proof: {
      metric: '100,000+',
      label: 'Calls handled per day',
      testimonial: '"We screened 5,000 candidates for our holiday peak in just 48 hours. Humanly impossible without EvalufAI."'
    },
    faqs: [
      { q: 'Does it sound robotic?', a: 'No, we use ultra-realistic neural voices with natural inflection.' },
      { q: 'Can it handle accents?', a: 'Yes, our engine is trained on global accents for fair evaluation.' },
      { q: 'Is it available 24/7?', a: 'Yes, candidates can interview at their own convenience.' },
      { q: 'Can I review the recordings?', a: 'Full transcripts and audio files are available in your dashboard.' },
      { q: 'Is it compliant with privacy laws?', a: 'Yes, we follow strict consent and recording protocols (GDPR/CCPA).' },
      { q: 'What happens if the call drops?', a: 'The AI can call back or resume from where it left off.' }
    ]
  },
  'ai-proctoring': {
    title: 'AI Proctoring',
    icon: ShieldCheck,
    color: 'red',
    hero: {
      headline: 'Secure Every Assessment with Intelligent Monitoring',
      subheading: 'Stop cheating before it happens. EvalufAI AI Proctoring uses multi-modal surveillance to ensure 100% integrity in remote testing and skill validation.',
      primaryCTA: 'Get Secure',
      secondaryCTA: 'View Integrity Score'
    },
    problem: {
      title: 'Why Remote Testing Needs Reinvention',
      paragraphs: [
        "As hiring goes global and remote, the risk of cheating has skyrocketed. Candidates use external help, browser tabs, and even AI tools to bypass traditional tests.",
        "Manual proctoring is expensive and scales poorly. Without a robust, automated way to verify integrity, your technical assessments become meaningless, leading to costly bad hires."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Proctoring',
      description: 'EvalufAI AI Proctoring is a non-intrusive, AI-driven shield for your hiring process. It monitors video, audio, and browser behavior in real-time to detect even the most sophisticated cheating attempts.'
    },
    beforeAfter: {
      before: ['High rate of suspicious test scores', 'Manual review of hours of video', 'Browser-based cheating goes unnoticed', 'Complaints about invasive proctors'],
      after: ['Verified, trustworthy results', 'Automated Integrity Score™ report', 'Locked-down testing environment', 'Seamless candidate experience']
    },
    features: [
      {
        title: 'Facial Recognition',
        description: 'Ensures the same person stays in the frame throughout.',
        howItWorks: 'Matches candidate face against ID at the start and periodically.',
        outcome: 'Zero proxy testing attempts.'
      },
      {
        title: 'Environment Scanning',
        description: 'Detects unauthorized voices or objects in the room.',
        howItWorks: 'AI analyzes background noise and video for mobile phones or other people.',
        outcome: 'Sterile testing environment anywhere.'
      },
      {
        title: 'Tab & Browser Lock',
        description: 'Prevents switching away from the assessment.',
        howItWorks: 'Tracks tab focus, right-clicks, and copy-paste attempts.',
        outcome: 'Candidates rely only on their own skills.'
      },
      {
        title: 'Second Device Detection',
        description: 'Finds candidates using hidden phones or tablets.',
        howItWorks: 'Uses eye-tracking and reflection analysis to find secondary screens.',
        outcome: 'Detection of hidden external help.'
      },
      {
        title: 'Integrity Score™',
        description: 'A single metric representing the trust level of a session.',
        howItWorks: 'Aggregates all behavioral flags into a data-backed percentage.',
        outcome: 'Instant decision-making for recruiters.'
      }
    ],
    howItWorks: [
      { step: 'Verify', text: 'Candidate performs a 360° room scan and ID check.' },
      { step: 'Monitor', text: 'AI runs in the background during the entire test.' },
      { step: 'Flag', text: 'Suspicious behaviors are bookmarked for review.' },
      { step: 'Report', text: 'Detailed integrity audit is delivered with the score.' }
    ],
    impact: [
      { label: 'Fraud Prevention', value: '99.9%' },
      { label: 'Review Time', value: '-80%' },
      { label: 'Hire Confidence', value: '100%' }
    ],
    useCases: ['Technical Coding Tests', 'Financial Certification', 'Government Security Clearance', 'High-Stakes Promotion'],
    differentiation: 'We focus on behavioral biometrics, not just video, making it much harder to fool than standard proctoring.',
    integrations: ['Canvas', 'Moodle', 'Bullhorn', 'Checkr', 'Workday'],
    proof: {
      metric: '0.1%',
      label: 'False positive rate',
      testimonial: '"The Integrity Score™ removed all the guesswork. We now know exactly which candidates to trust."'
    },
    faqs: [
      { q: 'Is it too invasive?', a: 'No, we are transparent about what we monitor and why.' },
      { q: 'Does it work on slow internet?', a: 'Yes, our lightweight engine is optimized for low bandwidth.' },
      { q: 'What counts as a red flag?', a: 'Things like looking away frequently, extra voices, or opening new tabs.' },
      { q: 'Can I customize the rules?', a: 'Yes, you choose which proctoring features to enable for each test.' },
      { q: 'Is it mobile-friendly?', a: 'The proctoring works via standard browser permissions on mobile.' },
      { q: 'How is data stored?', a: 'All data is purged after the hiring decision to ensure privacy.' }
    ]
  },
  'id-verify': {
    title: 'ID Verify',
    icon: UserCheck,
    color: 'emerald',
    hero: {
      headline: 'Instant Identity Verification for Global Talent',
      subheading: 'Ensure the person taking your assessment is exactly who they claim to be. Global ID Verify uses biometric matching and official document scanning to eliminate hiring fraud.',
      primaryCTA: 'Verify Now',
      secondaryCTA: 'Learn About Compliance'
    },
    problem: {
      title: 'Why Identity Fraud is Rising',
      paragraphs: [
        "In a remote-first world, it's easier than ever for candidates to use proxy test-takers or provide false credentials. Companies are hiring individuals who don't exist or don't match their provided IDs.",
        "Traditional ID checks are slow, manual, and often happen too late in the process—after hours have already been wasted on interviewing the wrong person."
      ]
    },
    solution: {
      title: 'Meet EvalufAI ID Verify',
      description: 'EvalufAI ID Verify integrates seamlessly into the start of any assessment or interview. It uses AI to scan 10,000+ government ID types from 190 countries, matching them against a live 3D face map of the candidate.'
    },
    beforeAfter: {
      before: ['High risk of proxy interviewing', 'Manual ID verification takes days', 'Inconsistent global ID support', 'Poor audit trail for compliance'],
      after: ['Instant identity certainty', 'Verification in under 30 seconds', 'Support for 190+ countries', 'Tamper-proof verification logs']
    },
    features: [
      {
        title: '3D Face Mapping',
        description: 'Matches the candidate’s live face against their ID photo.',
        howItWorks: 'Uses depth-sensing AI to detect "liveness" and prevent photos-of-photos.',
        outcome: 'Certainty of a live, matching human.'
      },
      {
        title: 'Global ID Support',
        description: 'Verify passports, drivers licenses, and national IDs.',
        howItWorks: 'Scans and validates 10,000+ document types across 190 countries.',
        outcome: 'Scalable global hiring with confidence.'
      },
      {
        title: 'Instant Extraction',
        description: 'Autofills candidate data from their document.',
        howItWorks: 'Uses OCR to extract name, DOB, and address instantly.',
        outcome: 'Zero manual data entry for candidates.'
      },
      {
        title: 'Sanction Screening',
        description: 'Checks candidates against global watchlists.',
        howItWorks: 'Automatically pings AML, PEP, and other compliance databases.',
        outcome: 'Risk-free hiring for regulated industries.'
      },
      {
        title: 'Subsequent Validation',
        description: 'Periodic checks during long assessment windows.',
        howItWorks: 'AI confirms the same person is still present at intervals.',
        outcome: 'Continuous integrity throughout the process.'
      }
    ],
    howItWorks: [
      { step: 'Upload', text: 'Candidate snaps a photo of their government ID.' },
      { step: 'Selfie', text: 'Candidate takes a quick, live 3D selfie.' },
      { step: 'Match', text: 'AI performs instant biometric and document validation.' },
      { step: 'Proceed', text: 'Candidate is cleared to start the assessment.' }
    ],
    impact: [
      { label: 'Fraud Detection', value: '99.8%' },
      { label: 'Verification Time', value: '28s' },
      { label: 'Compliance Level', value: 'Bank-Grade' }
    ],
    useCases: ['Remote Technical Hiring', 'Financial Compliance', 'Healthcare Credentialing', 'Secure Government Access'],
    differentiation: 'We combine ID verification directly with assessment proctoring for a unified "Chain of Trust."',
    integrations: ['Okta', 'Onfido', 'Checkr', 'Workday', 'SuccessFactors'],
    proof: {
      metric: '190+',
      label: 'Countries supported globally',
      testimonial: '"ID Verify solved our proxy interviewing problem overnight. It is now a mandatory step for all our hires."'
    },
    faqs: [
      { q: 'Is it safe?', a: 'Yes, we are SOC 2 Type II compliant and encrypt all data.' },
      { q: 'What if an ID is expired?', a: 'The system will flag it and ask for a valid document.' },
      { q: 'Can it handle low-light photos?', a: 'Our AI has built-in image enhancement for variable lighting.' },
      { q: 'Do you store my ID photo?', a: 'Only if your employer’s policy requires it; otherwise, it’s purged.' },
      { q: 'Does it work on mobile?', a: 'Yes, it is optimized for mobile browser cameras.' },
      { q: 'Is there a human review option?', a: 'Yes, flags can be escalated to your security team for manual review.' }
    ]
  },
  'technical-assessments': {
    title: 'Technical Assessments',
    icon: Code2,
    color: 'indigo',
    hero: {
      headline: 'The World’s Most Advanced Technical Skill Validation',
      subheading: 'Move beyond LeetCode. Evaluate candidates in high-fidelity sandboxes for 2,500+ skills including Full-Stack, Cloud, SAP, and Data Science.',
      primaryCTA: 'Browse Library',
      secondaryCTA: 'Build Custom Test'
    },
    problem: {
      title: 'Why Coding Tests Need Reinvention',
      paragraphs: [
        "Generic coding quizzes are easy to cheat on and don't reflect the actual work. A candidate who can solve a linked-list puzzle might struggle to debug a React application or optimize a SQL query.",
        "Furthermore, developers hate boring tests. If your assessment feels like a school exam, you’ll lose top talent who expect a modern, challenging environment."
      ]
    },
    solution: {
      title: 'Meet EvalufAI Technical Assessments',
      description: 'EvalufAI provides "Flight Simulators" for engineers. Our in-browser IDEs support 40+ languages and allow candidates to work on real-world projects with multiple files, APIs, and databases.'
    },
    beforeAfter: {
      before: ['Theoretical, quiz-style tests', 'High candidate drop-off rates', 'Results don’t predict job success', 'Limited language support'],
      after: ['Practical, project-based tasks', 'High engagement & completion', '90% correlation with performance', 'Support for every modern stack']
    },
    features: [
      {
        title: 'Full-Stack Sandboxes',
        description: 'Complete development environments in the browser.',
        howItWorks: 'Provides VS Code-like IDE with terminal access and hot-reloading.',
        outcome: 'Evaluation of real engineering capability.'
      },
      {
        title: 'Adaptive Difficulty',
        description: 'Challenges that evolve with the candidate.',
        howItWorks: 'AI picks harder or easier questions based on real-time performance.',
        outcome: 'Precision scoring in half the time.'
      },
      {
        title: 'Visual Multi-Choice',
        description: 'Better than text for system design and architecture.',
        howItWorks: 'Candidates interact with diagrams and flowcharts to solve problems.',
        outcome: 'Assessment of high-level thinking.'
      },
      {
        title: 'Automatic Code Review',
        description: 'AI-driven analysis of code quality and efficiency.',
        howItWorks: 'Evaluates time complexity, readability, and security best practices.',
        outcome: 'Instant, objective technical feedback.'
      },
      {
        title: 'Anti-Plagiarism Engine',
        description: 'Checks against GitHub and global repositories.',
        howItWorks: 'Detects code similarities and LLM-generated patterns.',
        outcome: 'True validation of original work.'
      }
    ],
    howItWorks: [
      { step: 'Select', text: 'Pick a role-based test from our 2,500+ skill library.' },
      { step: 'Invite', text: 'Send branded invitations via your ATS.' },
      { step: 'Code', text: 'Candidates solve real-world problems in our IDE.' },
      { step: 'Analyze', text: 'Review auto-scored results and code playback.' }
    ],
    impact: [
      { label: 'Quality of Hire', value: '+65%' },
      { label: 'Interview Hours', value: '-50%' },
      { label: 'Skills Covered', value: '2500+' }
    ],
    useCases: ['Full-Stack Engineering', 'Data Science & ML', 'Cloud Architecture (AWS/Azure)', 'Enterprise ERP (SAP/Salesforce)'],
    differentiation: 'We are the only platform offering full-stack sandboxes with real database and API connectivity.',
    integrations: ['GitHub', 'GitLab', 'Jira', 'Workday', 'Greenhouse'],
    proof: {
      metric: '2,500+',
      label: 'Specific skills in our library',
      testimonial: '"EvalufAI’s technical tests actually feel like doing the job. Our hiring managers trust the scores implicitly."'
    },
    faqs: [
      { q: 'Which languages do you support?', a: 'Over 40 languages including Python, Java, JS, Go, and Ruby.' },
      { q: 'Can I use my own code tasks?', a: 'Yes, you can easily upload your own tasks to our IDE.' },
      { q: 'How do you prevent cheating?', a: "Yes, our platform detects over 100+ types of 'copy-paste' and 'external search' behaviors." },
      { q: 'Is there a time limit?', a: 'Yes, you can set strict or flexible timers for each section.' },
      { q: 'Do you support mobile?', a: 'Assessments are best on desktop for a full coding experience.' },
      { q: 'Can I see the candidate’s coding process?', a: 'Yes, we provide full playback of the coding session.' }
    ]
  },
  'ai-chatbot': {
    title: 'AI ChatBot',
    icon: MessageSquare,
    color: 'sky',
    hero: {
      headline: 'Engage and Qualify Candidates While You Sleep',
      subheading: 'Turn your career site into a high-conversion engine. AI ChatBot answers candidate questions, qualifies talent, and schedules interviews 24/7.',
      primaryCTA: 'Add to My Site',
      secondaryCTA: 'Try Demo Bot'
    },
    problem: {
      title: 'Why Career Sites Need Reinvention',
      paragraphs: [
        "Most career sites are 'black holes' where candidates drop off because they can't find information or get a timely response. 80% of candidates drop out due to a slow initial process.",
        "Recruiters are overwhelmed with repetitive questions about benefits, culture, and job status, leaving them no time for high-value strategic work."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI ChatBot',
      description: 'EvalufAI AI ChatBot is a personalized recruitment assistant trained on your company data. It acts as a concierge, guiding candidates to the right roles and screening them in real-time through friendly conversation.'
    },
    beforeAfter: {
      before: ['High career site drop-off', 'Slow response to simple questions', 'Manual interview scheduling', 'Recruiters spend hours answering FAQs'],
      after: ['100% candidate engagement', 'Instant, accurate answers 24/7', 'Self-service interview booking', 'Recruiters focus on final rounds']
    },
    features: [
      {
        title: 'Instant Qualification',
        description: 'Screens candidates based on your specific criteria.',
        howItWorks: 'Asks targeted questions to verify eligibility and interest.',
        outcome: 'Only qualified leads in your inbox.'
      },
      {
        title: 'Deep Knowledge Base',
        description: 'Trained on your company handbook and FAQs.',
        howItWorks: 'Uses RAG (Retrieval-Augmented Generation) to give accurate company info.',
        outcome: 'Consistent, expert communication.'
      },
      {
        title: 'Auto-Scheduling',
        description: 'Books interviews directly into recruiter calendars.',
        howItWorks: 'Syncs with Outlook/Google and offers real-time slots.',
        outcome: 'Zero scheduling friction.'
      },
      {
        title: 'Multi-Lingual Support',
        description: 'Engage candidates in their native language.',
        howItWorks: 'Real-time translation in 100+ languages.',
        outcome: 'Truly global talent reach.'
      },
      {
        title: 'Drop-off Recovery',
        description: 'Re-engages candidates who leave mid-conversation.',
        howItWorks: 'Sends gentle reminders via SMS or WhatsApp to finish the application.',
        outcome: '20% more applications completed.'
      }
    ],
    howItWorks: [
      { step: 'Greet', text: 'ChatBot welcomes candidate to your site.' },
      { step: 'Learn', text: 'Candidate asks questions or expresses interest.' },
      { step: 'Screen', text: 'ChatBot asks 3-5 key qualification questions.' },
      { step: 'Book', text: 'Qualified candidates choose an interview time.' }
    ],
    impact: [
      { label: 'Application Rate', value: '+45%' },
      { label: 'Recruiter Time', value: '-20h/mo' },
      { label: 'Response Time', value: 'Instant' }
    ],
    useCases: ['High Volume Retail', 'Global Tech Sourcing', 'Diversity & Inclusion', 'Campus Recruitment'],
    differentiation: 'Unlike generic bots, ours is built specifically for HR, understanding recruitment nuances and compliance.',
    integrations: ['WhatsApp', 'Slack', 'Workday', 'Microsoft Teams', 'Facebook Messenger'],
    proof: {
      metric: '45%',
      label: 'Increase in career site conversions',
      testimonial: '"The bot handled 10,000 inquiries in its first month, booking 500 interviews without a single human click."'
    },
    faqs: [
      { q: 'Is it hard to train?', a: 'No, just upload your FAQs and handbook; the AI does the rest.' },
      { q: 'Can it handle complex questions?', a: 'Yes, it can escalate complex queries to a human recruiter.' },
      { q: 'Does it work on mobile?', a: 'Absolutely, it’s optimized for all devices and messaging apps.' },
      { q: 'Can I customize the branding?', a: 'Yes, full control over colors, personality, and logo.' },
      { q: 'Is it secure?', a: 'We use enterprise-grade encryption for all candidate data.' },
      { q: 'How do I install it?', a: 'A single line of JavaScript on your career site.' }
    ]
  },
  'ai-video-interviews': {
    title: 'AI Video Interviews',
    icon: Video,
    color: 'purple',
    hero: {
      headline: 'Scale Your Screening with AI-Vetted Video Interviews',
      subheading: 'Eliminate the first-round interview bottleneck. AI Video Interviews allow candidates to record responses on their own time, with AI providing a shortlist based on sentiment, intent, and competency.',
      primaryCTA: 'Watch Demo',
      secondaryCTA: 'Start Free Trial'
    },
    problem: {
      title: 'Why One-Way Interviews Need Reinvention',
      paragraphs: [
        "Traditional one-way videos are a 'black hole' for candidates and a burden for recruiters. Reviewing hundreds of 10-minute videos is as time-consuming as live calls, and candidates find the experience robotic and off-putting.",
        "Without AI, recruiters still have to watch every second of every video to find the best talent. There's no objective way to rank submissions, leading to bias and missed opportunities."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Video Interviews',
      description: 'EvalufAI turns one-way videos into high-signal data. Our AI doesn’t just record; it listens, analyzes, and summarizes. It scores candidates on technical accuracy, communication clarity, and behavioral fit, allowing you to review 100 candidates in the time it used to take for 5.'
    },
    beforeAfter: {
      before: ['Recruiters watch 20+ hours of video/week', 'No objective ranking of candidates', 'High candidate drop-off (40%+)', 'Delayed feedback to candidates'],
      after: ['AI summarizes the best 2 minutes', 'Automated scoring based on benchmarks', 'Engaging, branded experience (90% completion)', 'Instant progression to next stage']
    },
    features: [
      {
        title: 'Sentiment & Tone Analysis',
        description: 'Detects confidence, enthusiasm, and professional presence.',
        howItWorks: 'Analyzes vocal variety, facial expressions, and keyword usage.',
        outcome: 'Identify natural leaders and communicators.'
      },
      {
        title: 'Technical Accuracy Scoring',
        description: 'Verifies the correctness of technical answers.',
        howItWorks: 'Matches candidate explanations against a verified technical knowledge base.',
        outcome: 'Shortlist based on actual knowledge.'
      },
      {
        title: 'Mobile-First Experience',
        description: 'Candidates can record anytime, anywhere.',
        howItWorks: 'Web-based platform with no app download required.',
        outcome: 'Higher completion rates for busy talent.'
      },
      {
        title: 'Interactive Questions',
        description: 'Go beyond static text; show videos of your team.',
        howItWorks: 'Insert video prompts from hiring managers to humanize the bot.',
        outcome: 'Stronger employer branding.'
      },
      {
        title: 'Anti-Cheat Protection',
        description: 'Ensures candidates aren’t reading from a script.',
        howItWorks: 'Detects eye-tracking anomalies and external software usage.',
        outcome: 'Authentic, unscripted responses.'
      }
    ],
    howItWorks: [
      { step: 'Invite', text: 'Send a link via ATS or SMS.' },
      { step: 'Record', text: 'Candidate answers 3-5 custom video prompts.' },
      { step: 'Analyze', text: 'AI processes the video and extracts key signals.' },
      { step: 'Shortlist', text: 'Recruiters view top-ranked highlights.' }
    ],
    impact: [
      { label: 'Time to Shortlist', value: '-80%' },
      { label: 'Completion Rate', value: '92%' },
      { label: 'Hiring Manager Sat', value: '+50%' }
    ],
    useCases: ['High Volume Retail', 'Technical Pre-screening', 'Executive Shortlisting', 'Global Graduate Programs'],
    differentiation: 'We are the only platform that combines technical skill verification directly with video sentiment analysis.',
    integrations: ['Zoom', 'Slack', 'Workday', 'Greenhouse', 'iCIMS'],
    proof: {
      metric: '80%',
      label: 'Reduction in time-to-hire for video rounds',
      testimonial: '"I can now review 50 candidate videos in 15 minutes by just looking at the AI summaries. Life-changing."'
    },
    faqs: [
      { q: 'Is it biased?', a: 'Our AI is trained on diverse datasets and focuses on skill-based signals to reduce bias.' },
      { q: 'Can candidates re-record?', a: 'Yes, you can set the number of allowed attempts per question.' },
      { q: 'How long are the interviews?', a: 'Typically 10-15 minutes, but fully customizable.' },
      { q: 'Do you provide transcripts?', a: 'Yes, full timestamped transcripts for every video.' },
      { q: 'Is it GDPR compliant?', a: 'Yes, with full data deletion and consent management.' },
      { q: 'What happens if a candidate is nervous?', a: 'The AI accounts for baseline anxiety to focus on core competency.' }
    ]
  },
  'live-coding-interviews': {
    title: 'Live Coding Interviews',
    icon: Code2,
    color: 'indigo',
    hero: {
      headline: 'The Ultimate Collaborative IDE for Technical Rounds',
      subheading: 'Stop using generic whiteboards. EvalufAI Live Coding provides a high-performance, multi-file IDE with real-time collaboration, terminal access, and built-in proctoring.',
      primaryCTA: 'Start a Session',
      secondaryCTA: 'View IDE Features'
    },
    problem: {
      title: 'Why Live Coding Needs Reinvention',
      paragraphs: [
        "Most live coding tools are 'glorified text editors' that lack a compiler, terminal, or debugger. This forces candidates to write pseudo-code instead of real software.",
        "Collaborating on a single file is also limited. Real engineering happens across multiple files and services. If your interview tool doesn't support this, you're not seeing the full picture."
      ]
    },
    solution: {
      title: 'Meet EvalufAI Live Coding',
      description: 'EvalufAI Live Coding is a full-stack engineering environment in the cloud. It supports 40+ languages and features a shared terminal, whiteboarding, and integrated HD video calling, all within a single tab.'
    },
    beforeAfter: {
      before: ['Broken coding environments', 'Interviewers take manual, messy notes', 'No session playback for review', 'High latency and lag'],
      after: ['High-performance cloud IDE', 'Standardized scoring rubrics', 'Frame-by-frame session playback', 'Zero-latency collaboration']
    },
    features: [
      {
        title: 'Multi-File Support',
        description: 'Build real applications, not just functions.',
        howItWorks: 'Full directory structure support with real-time sync.',
        outcome: 'Evaluate architectural and project-level skills.'
      },
      {
        title: 'Shared Terminal',
        description: 'Run code, install packages, and debug together.',
        howItWorks: 'A secure, containerized terminal accessible to both parties.',
        outcome: 'True collaborative problem solving.'
      },
      {
        title: 'HD Video & Audio',
        description: 'No need for external meeting tools.',
        howItWorks: 'High-definition video built directly into the IDE.',
        outcome: 'Reduced friction and better focus.'
      },
      {
        title: 'Whiteboarding Mode',
        description: 'Draw architecture and system designs.',
        howItWorks: 'Infinite canvas for diagrams alongside your code.',
        outcome: 'Holistic system design evaluation.'
      },
      {
        title: 'Interview Helper',
        description: 'AI-suggested questions and hints for the interviewer.',
        howItWorks: 'Listens to the context and provides relevant probes.',
        outcome: 'Consistent, high-quality interview rounds.'
      }
    ],
    howItWorks: [
      { step: 'Schedule', text: 'Sync with candidate and panel via calendar.' },
      { step: 'Join', text: 'Enter the secure, branded interview room.' },
      { step: 'Collaborate', text: 'Code, draw, and talk in a unified environment.' },
      { step: 'Playback', text: 'Watch the entire session later to refine the decision.' }
    ],
    impact: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Languages', value: '40+' },
      { label: 'Consensus Time', value: '-40%' }
    ],
    useCases: ['System Design Interviews', 'Pair Programming Rounds', 'Frontend/Backend Deep Dives', 'Engineering Manager Screens'],
    differentiation: 'We provide the only browser-based IDE that feels as fast as VS Code with real terminal execution.',
    integrations: ['Jira', 'GitHub', 'Workday', 'Microsoft Teams', 'Greenhouse'],
    proof: {
      metric: '40+',
      label: 'Programming languages supported',
      testimonial: '"The playback feature changed everything. Our hiring committee can now see exactly how a candidate thinks, not just their final code."'
    },
    faqs: [
      { q: 'Is there an IDE cost?', a: 'No, it is included in the EvalufAI Interview package.' },
      { q: 'Can candidates use their own IDE?', a: 'They can, but using ours ensures a level playing field and proctoring.' },
      { q: 'Does it support external libraries?', a: 'Yes, you can install packages via the terminal.' },
      { q: 'Is it recorded?', a: 'Yes, both the video and the code edits are captured for review.' },
      { q: 'Can we have multiple interviewers?', a: 'Yes, you can have a panel of up to 5 people.' },
      { q: 'Does it work on tablet?', a: 'Best on desktop for full keyboard support.' }
    ]
  },
  'ai-role-play': {
    title: 'AI Role Play',
    icon: Sparkles,
    color: 'orange',
    hero: {
      headline: 'Master Difficult Conversations with Reactive AI',
      subheading: 'Train your team for real-world pressure. AI Role Play allows employees to practice sales, management, and support scenarios with an AI that reacts realistically to their tone and strategy.',
      primaryCTA: 'Start Training',
      secondaryCTA: 'View Scenarios'
    },
    problem: {
      title: 'Why Training Needs Reinvention',
      paragraphs: [
        "Traditional role-play is awkward and inconsistent. Employees are hesitant to practice with colleagues, and managers don't have the time to sit through 100 pitch sessions.",
        "Passive learning (videos/quizzes) doesn't build 'muscle memory.' Without high-stakes practice, your team will keep making the same mistakes with real customers."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Role Play',
      description: 'EvalufAI AI Role Play uses advanced conversational agents to simulate any workplace scenario. Whether it’s a difficult salary negotiation, a technical sales pitch, or a customer complaint, our AI provides a safe but challenging practice field.'
    },
    beforeAfter: {
      before: ['Theoretical training only', 'Employees learn on real customers', 'No data on soft skill gaps', 'Boring, one-size-fits-all L&D'],
      after: ['Practical, immersive practice', 'Fail safely before the big meeting', 'Detailed behavioral analytics', 'Personalized coaching at scale']
    },
    features: [
      {
        title: 'Reactive Persona Engine',
        description: 'AI that changes its mood based on your input.',
        howItWorks: 'If you are too aggressive, the AI gets defensive. If you are empathetic, it opens up.',
        outcome: 'True EQ development.'
      },
      {
        title: 'Real-time Feedback',
        description: 'Instant coaching on tone, content, and strategy.',
        howItWorks: 'AI highlights exactly where you could have used a better phrase.',
        outcome: 'Faster skill acquisition.'
      },
      {
        title: 'Scenario Library',
        description: '100+ pre-built scenarios for every department.',
        howItWorks: 'Pick from Sales, HR, Leadership, or Customer Success templates.',
        outcome: 'Ready-to-use training for the whole company.'
      },
      {
        title: 'Custom Persona Builder',
        description: 'Upload your own personas and playbooks.',
        howItWorks: 'Define a specific customer type or difficult employee for your team to handle.',
        outcome: 'Hyper-relevant practice.'
      },
      {
        title: 'Competency Scoring',
        description: 'Measure improvement over time.',
        howItWorks: 'Tracks metrics like empathy, clarity, and objection handling.',
        outcome: 'Data-driven promotion decisions.'
      }
    ],
    howItWorks: [
      { step: 'Select', text: 'Choose a persona and a goal (e.g., Close the Sale).' },
      { step: 'Engage', text: 'Talk or type to the AI in a live conversation.' },
      { step: 'Analyze', text: 'Review the AI’s feedback on your performance.' },
      { step: 'Refine', text: 'Try again to reach a higher competency score.' }
    ],
    impact: [
      { label: 'Learning Retention', value: '90%' },
      { label: 'Sales Confidence', value: '+70%' },
      { label: 'Training Time', value: '-50%' }
    ],
    useCases: ['Sales Objection Handling', 'Manager 1-on-1 Prep', 'Customer Conflict Resolution', 'Technical Support Simulation'],
    differentiation: "Our AI doesn’t just follow a script; it uses a dynamic 'mood engine' that makes every session unique.",
    integrations: ['Slack', 'MS Teams', 'Workday Learning', 'Cornerstone', 'LinkedIn Learning'],
    proof: {
      metric: '90%',
      label: 'Of users feel more confident after 3 sessions',
      testimonial: '"I practiced my difficult manager conversation 10 times with the AI. When the real meeting happened, I was completely calm."'
    },
    faqs: [
      { q: 'Is it voice or text?', a: 'Both! You can speak naturally or type depending on the scenario.' },
      { q: 'Can managers see the results?', a: "Yes, managers get a dashboard of their team's progress and gaps." },
      { q: 'Is it available for all roles?', a: 'Yes, from entry-level support to C-suite leadership.' },
      { q: 'How long are the sessions?', a: 'Typically 5-10 minutes, perfect for micro-learning.' },
      { q: 'Can I use my own company playbooks?', a: 'Yes, you can easily ingest your training materials.' },
      { q: 'Is it fun?', a: "It's highly gamified with scores and levels to keep employees engaged." }
    ]
  },
  'competency-assessments': {
    title: 'Competency Assessments',
    icon: Layout,
    color: 'indigo',
    hero: {
      headline: 'Validate Job-Ready Skills with High-Fidelity Competency Tests',
      subheading: 'Move beyond theoretical knowledge. Competency Assessments measure a candidate’s ability to perform specific, role-based tasks in a simulated job environment.',
      primaryCTA: 'Browse Competencies',
      secondaryCTA: 'See Sample Tasks'
    },
    problem: {
      title: 'Why Multiple-Choice is Failing',
      paragraphs: [
        "In modern work, knowing 'what' is less important than knowing 'how.' Traditional tests measure memory, not capability. A candidate might know the definition of 'Agile' but fail to prioritize a product backlog in a real-world scenario.",
        "This leads to 'competency gaps' where new hires struggle with the practical aspects of their role, increasing ramp-up time and decreasing overall team productivity."
      ]
    },
    solution: {
      title: 'Meet EvalufAI Competency Assessments',
      description: 'EvalufAI Competency Assessments are interactive "job-tasks." We provide candidates with the actual tools and data they would use on the job—from Excel spreadsheets and SQL editors to CRM sandboxes—to see if they can actually deliver.'
    },
    beforeAfter: {
      before: ['Theoretical, abstract questions', 'High "False Positive" hires', 'Slow ramp-up time (3-6 months)', 'Subjective skill evaluation'],
      after: ['Practical, task-based validation', 'Predictive job performance data', 'Faster ramp-up (under 1 month)', 'Objective competency scoring']
    },
    features: [
      {
        title: 'Real-World Tool Simulation',
        description: 'Assess skills inside the tools they actually use.',
        howItWorks: 'Simulates environments like SAP, Salesforce, Excel, and VS Code.',
        outcome: 'Certainty of tool mastery.'
      },
      {
        title: 'Role-Based Case Studies',
        description: 'Complex problems that require multi-step solutions.',
        howItWorks: 'Candidates analyze data, make decisions, and execute tasks.',
        outcome: 'Evaluation of critical thinking and prioritization.'
      },
      {
        title: 'Step-by-Step Logic Tracking',
        description: 'See how a candidate reaches an answer.',
        howItWorks: 'Tracks the process and intermediate steps, not just the output.',
        outcome: 'Understanding of problem-solving approach.'
      },
      {
        title: 'Industry Benchmarking',
        description: 'Compare candidates against global standards.',
        howItWorks: 'Uses data from millions of tests to rank competency.',
        outcome: "Objective 'Top 10%' identification."
      },
      {
        title: 'Custom Competency Mapping',
        description: 'Build tests based on your internal job levels.',
        howItWorks: 'Align assessment difficulty with your specific seniority tiers.',
        outcome: 'Perfect match for the role seniority.'
      }
    ],
    howItWorks: [
      { step: 'Model', text: 'Select a competency model for the specific role.' },
      { step: 'Challenge', text: 'Candidate completes a series of practical job-tasks.' },
      { step: 'Score', text: 'AI evaluates the quality, speed, and accuracy of work.' },
      { step: 'Map', text: 'View the candidate’s skill heat map in your dashboard.' }
    ],
    impact: [
      { label: 'Predictive Accuracy', value: '85%' },
      { label: 'Ramp-up Time', value: '-60%' },
      { label: 'Interview Efficacy', value: '3x' }
    ],
    useCases: ['Product Management', 'Financial Operations', 'Customer Success', 'Data Analysis'],
    differentiation: "Our tests are 'tool-agnostic' but 'competency-specific,' meaning we measure the underlying skill regardless of the platform.",
    integrations: ['Workday', 'SuccessFactors', 'LinkedIn', 'Greenhouse', 'iCIMS'],
    proof: {
      metric: '85%',
      label: 'Correlation with first-year job performance',
      testimonial: '"Competency Assessments allowed us to hire a junior analyst who outperformed candidates with 5 years more experience. The data didn’t lie."'
    },
    faqs: [
      { q: 'Are these just IQ tests?', a: 'No, they are strictly role-based and measure practical job skills.' },
      { q: 'How long do they take?', a: 'Typically 45-90 minutes depending on the complexity.' },
      { q: 'Can I build my own?', a: "Yes, our 'Task Builder' is intuitive for hiring managers." },
      { q: 'Is it proctored?', a: 'Yes, full AI proctoring is included.' },
      { q: 'Do candidates find them hard?', a: 'They are challenging but highly engaging because they feel relevant.' },
      { q: 'What is the scoring range?', a: 'We use a 1-100 scale normalized against industry averages.' }
    ]
  },
  'ai-assistant': {
    title: 'AI Assistant',
    icon: Sparkles,
    color: 'indigo',
    hero: {
      headline: 'The Ultimate AI Co-Pilot for Every Hiring Manager',
      subheading: 'Hiring is hard; let AI handle the complexity. EvalufAI AI Assistant helps you write JDs, generate custom questions, and summarize candidate strengths in seconds.',
      primaryCTA: 'Get Your Assistant',
      secondaryCTA: 'Try for Free'
    },
    problem: {
      title: 'Why Hiring Operations Need Reinvention',
      paragraphs: [
        "Hiring managers spend 10+ hours a week on administrative tasks: writing job descriptions, building interview rubrics, and digging through candidate notes. This is time taken away from their core business goals.",
        "Generic AI tools lack the context of your company and the nuances of HR compliance. Hiring managers need a tool that understands recruiting best practices and your specific team culture."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Assistant',
      description: "EvalufAI AI Assistant is an 'HR-Expert in a Box.' It’s integrated directly into your workflow, helping you make faster, smarter, and more objective hiring decisions through every stage of the funnel."
    },
    beforeAfter: {
      before: ['Generic, boring job descriptions', 'Subjective, inconsistent interview questions', 'Hours spent summarizing candidate data', 'Manual follow-up emails'],
      after: ['High-conversion, custom JDs', 'Data-backed, role-specific rubrics', 'Instant AI candidate summaries', 'Automated, personalized candidate comms']
    },
    features: [
      {
        title: 'Smart JD Generator',
        description: 'Create high-conversion job descriptions instantly.',
        howItWorks: 'Input a few bullet points; AI produces a structured, inclusive JD.',
        outcome: '30% more diverse applicants.'
      },
      {
        title: 'Interview Rubric Builder',
        description: 'Standardize how you evaluate every candidate.',
        howItWorks: 'Generates specific scoring criteria based on the role and seniority.',
        outcome: 'Zero bias in final evaluations.'
      },
      {
        title: 'Candidate Summarizer',
        description: 'Get the "TL;DR" on every applicant.',
        howItWorks: 'Aggregates assessment scores, video sentiment, and resume highlights.',
        outcome: 'Review 10x more candidates per day.'
      },
      {
        title: 'Bias Detection',
        description: 'Flags biased language in your JDs or feedback.',
        howItWorks: 'Scans text for gendered or non-inclusive terms in real-time.',
        outcome: '100% inclusive hiring process.'
      },
      {
        title: 'Smart Follow-up',
        description: 'Keeps candidates warm with zero effort.',
        howItWorks: 'Drafts and sends personalized status updates based on the hiring stage.',
        outcome: 'Industry-leading candidate NPS.'
      }
    ],
    howItWorks: [
      { step: 'Prompt', text: "Ask the assistant to perform a task (e.g., 'Summarize this candidate')." },
      { step: 'Analyze', text: 'AI processes all available candidate and role data.' },
      { step: 'Execute', text: 'Assistant drafts the JD, email, or summary for your review.' },
      { step: 'Sync', text: 'Results are automatically pushed to your ATS or Slack.' }
    ],
    impact: [
      { label: 'Admin Time', value: '-75%' },
      { label: 'JD Conversion', value: '+30%' },
      { label: 'Candidate Satisfaction', value: '4.9/5' }
    ],
    useCases: ['Rapid Team Expansion', 'Standardizing Global Hiring', 'Diversity Initiatives', 'Executive Search'],
    differentiation: 'Unlike generic LLMs, our AI is specifically trained on recruitment ethics and HR compliance.',
    integrations: ['Slack', 'MS Teams', 'Gmail', 'Workday', 'Greenhouse'],
    proof: {
      metric: '75%',
      label: 'Reduction in administrative hiring tasks',
      testimonial: '"The AI Assistant feels like having an extra coordinator on the team. I can now focus on the candidates, not the paperwork."'
    },
    faqs: [
      { q: 'Can it write in my brand voice?', a: 'Yes, the AI adapts its tone based on your company examples.' },
      { q: 'Is it compliant?', a: 'Yes, it follows all EEO and GDPR guidelines.' },
      { q: 'Can it help with technical questions?', a: 'Yes, it can generate specific coding or functional probes.' },
      { q: 'Does it replace human judgment?', a: 'No, it provides data and drafts; the final decision is always yours.' },
      { q: 'Can I use it in Slack?', a: 'Yes, we have a native Slack integration for quick queries.' },
      { q: 'How is it different from ChatGPT?', a: 'It has access to your actual candidate data and HR context.' }
    ]
  },
  'behavioral-assessments': {
    title: 'Behavioral Assessments',
    icon: BrainCircuit,
    color: 'rose',
    hero: {
      headline: 'Identify the Soft Skills that Drive Long-Term Success',
      subheading: 'Stop hiring for skill and firing for fit. Behavioral Assessments provide deep insights into a candidate’s personality, work style, and cultural alignment.',
      primaryCTA: 'Start Assessing',
      secondaryCTA: 'View Sample Report'
    },
    problem: {
      title: 'Why Soft Skills are Hard to Measure',
      paragraphs: [
        "In interviews, candidates can easily 'fake' their personality. They tell you what you want to hear, leading to hires who might be technically brilliant but toxic to your team culture.",
        "Traditional personality tests are often generic and not tied to job performance. You need data that predicts how someone will actually behave in a high-pressure, collaborative environment."
      ]
    },
    solution: {
      title: 'Meet EvalufAI Behavioral Assessments',
      description: "EvalufAI uses 'Situation-Based' testing. We put candidates in complex workplace scenarios and analyze their choices, reactions, and reasoning. It’s not about 'good' or 'bad' personalities; it’s about finding the right fit for your specific team."
    },
    beforeAfter: {
      before: ['Gut-feel hiring decisions', "High turnover due to 'poor fit'", 'Inconsistent team dynamics', 'Subjective interviewer notes'],
      after: ['Data-backed behavioral profiles', 'Increased team cohesion', 'Higher long-term retention', 'Objective, standardized fit scores']
    },
    features: [
      {
        title: 'Situational Judgment Tests',
        description: 'Measures how candidates handle real-world conflict.',
        howItWorks: 'Presents a workplace dilemma and asks for the best/worst response.',
        outcome: 'Evaluation of professional judgment.'
      },
      {
        title: 'Work Style Preference',
        description: 'Understand their ideal environment.',
        howItWorks: 'Identifies preferences for autonomy, collaboration, and structure.',
        outcome: 'Perfect placement within the organization.'
      },
      {
        title: 'Leadership Potential',
        description: 'Identify the next generation of managers.',
        howItWorks: 'Scans for empathy, decisiveness, and vision in responses.',
        outcome: 'Clear path for internal mobility.'
      },
      {
        title: 'Team Dynamics Mapping',
        description: 'See how a new hire changes the team balance.',
        howItWorks: 'Compares candidate profile against existing team data.',
        outcome: 'Balanced, high-performing teams.'
      },
      {
        title: 'Custom Cultural Filters',
        description: 'Align the test with your unique core values.',
        howItWorks: 'Weight the scoring based on your specific company mission.',
        outcome: "Hires who truly believe in your 'Why.'"
      }
    ],
    howItWorks: [
      { step: 'Define', text: 'Select the core values and traits for the role.' },
      { step: 'Interact', text: 'Candidate navigates situational work-scenarios.' },
      { step: 'Profile', text: 'AI builds a multi-dimensional behavioral map.' },
      { step: 'Match', text: "View the 'Fit Score' for your specific team." }
    ],
    impact: [
      { label: 'Employee Retention', value: '+40%' },
      { label: 'Team Performance', value: '+25%' },
      { label: 'Hiring Bias', value: '-80%' }
    ],
    useCases: ['Leadership Hiring', 'Customer-Facing Roles', 'Team Restructuring', 'Culture Transformation'],
    differentiation: "We focus on 'Workplace Behavior' rather than general personality, making the data hyper-relevant for HR.",
    integrations: ['Workday', 'Greenhouse', 'SuccessFactors', 'LinkedIn', 'Slack'],
    proof: {
      metric: '40%',
      label: 'Improvement in employee retention rates',
      testimonial: '"EvalufAI helped us identify candidates who shared our values but had different perspectives. It’s made our team much stronger."'
    },
    faqs: [
      { q: 'Can I fail a behavioral test?', a: "There is no 'pass' or 'fail'; it's about finding a match for a specific role." },
      { q: 'How long does it take?', a: 'Typically 15-20 minutes.' },
      { q: 'Is it scientifically validated?', a: 'Yes, our tests are built on established psychometric frameworks.' },
      { q: 'Can candidates game the system?', a: "Our situational questions are designed to be 'un-gamable' by focusing on complex trade-offs." },
      { q: 'Do you offer a detailed report?', a: 'Yes, a full PDF breakdown for every candidate.' },
      { q: 'Is it mobile friendly?', a: 'Yes, it is fully optimized for mobile devices.' }
    ]
  },
  'coding-simulations': {
    title: 'Coding Simulations',
    icon: MonitorPlay,
    color: 'blue',
    hero: {
      headline: 'The Only Project-Based Technical Validation on Earth',
      subheading: 'Stop testing snippets; start testing systems. Coding Simulations provide candidates with a full repository, a backend, and a frontend to build real features.',
      primaryCTA: 'Try a Simulation',
      secondaryCTA: 'View Repositories'
    },
    problem: {
      title: 'Why Code Snippets aren’t Enough',
      paragraphs: [
        "In a real job, engineers don't write isolated functions. They navigate large codebases, fix bugs in legacy code, and integrate multiple services. Snippet-based tests fail to measure this 'engineering maturity.'",
        "This leads to 'LeetCode specialists' who pass interviews but struggle to contribute to a real production environment, increasing the burden on your senior engineers."
      ]
    },
    solution: {
      title: 'Meet EvalufAI Coding Simulations',
      description: "We provide 'Flight Simulators' for developers. Candidates are dropped into a pre-configured workspace with a README, a task list, and a terminal. They must build, test, and deploy just like they would on the job."
    },
    beforeAfter: {
      before: ['Abstract algorithm puzzles', 'No context of a real codebase', "High 'False Positive' hires", 'Frustrated senior interviewers'],
      after: ['Practical, project-based tasks', 'Full visibility into repo navigation', 'Predictive of actual job output', 'Excited, engaged candidates']
    },
    features: [
      {
        title: 'Full Repository Access',
        description: 'Candidates work with multiple files and folders.',
        howItWorks: 'Provides a secure, temporary Git environment in the browser.',
        outcome: 'Evaluation of codebase navigation skills.'
      },
      {
        title: 'Build & Test Environment',
        description: 'Run real tests against their changes.',
        howItWorks: 'Integrated test runners (Jest, PyTest, etc.) in the terminal.',
        outcome: 'Validation of TDD and code quality.'
      },
      {
        title: 'Bug Fixing Scenarios',
        description: 'Drop candidates into a broken codebase.',
        howItWorks: 'They must identify, reproduce, and fix an intentional bug.',
        outcome: 'True assessment of debugging maturity.'
      },
      {
        title: 'Feature Implementation',
        description: 'Build a new endpoint or UI component.',
        howItWorks: 'Provide a spec and watch them implement it from scratch.',
        outcome: 'Direct proof of development capability.'
      },
      {
        title: 'Playback & Analysis',
        description: 'Watch exactly how they approached the project.',
        howItWorks: 'Step-by-step recording of every file change and command.',
        outcome: "Insight into 'How' they think, not just 'What' they built."
      }
    ],
    howItWorks: [
      { step: 'Deploy', text: 'AI spins up a dedicated container for the candidate.' },
      { step: 'Code', text: 'Candidate completes project tasks within the cloud IDE.' },
      { step: 'Validate', text: 'Automated tests run to verify the solution.' },
      { step: 'Review', text: 'Hiring managers view the repo and playback logs.' }
    ],
    impact: [
      { label: 'Technical Signal', value: '10x' },
      { label: 'Review Time', value: '-30%' },
      { label: 'Candidate Sat', value: '4.8/5' }
    ],
    useCases: ['Senior Engineering Hires', 'Frontend/Backend Deep Dives', 'Architecture Validation', 'Technical Lead Assessment'],
    differentiation: 'We are the only platform providing a persistent, containerized filesystem for technical assessments.',
    integrations: ['GitHub', 'Bitbucket', 'GitLab', 'Jira', 'Workday'],
    proof: {
      metric: '10x',
      label: 'More technical signal than snippet-based tests',
      testimonial: '"The coding simulation showed us that a candidate who struggled with algorithms was actually a brilliant system architect. We wouldn’t have hired him without EvalufAI."'
    },
    faqs: [
      { q: 'Is it hard to set up?', a: 'No, we provide 100+ pre-configured projects out of the box.' },
      { q: 'Can I use my own repo?', a: 'Yes, you can import any public or private Git repository.' },
      { q: 'How long do they take?', a: 'Usually 60-120 minutes for a meaningful project.' },
      { q: 'Is it proctored?', a: 'Yes, full session recording and IP tracking are standard.' },
      { q: 'What stacks are supported?', a: 'Everything from MERN and Django to Spring Boot and .NET.' },
      { q: 'Do candidates enjoy it?', a: 'Developers love it because it feels like a real challenge, not a test.' }
    ]
  },
  'ai-interview-helper': {
    title: 'AI Interview Helper',
    icon: Sparkles,
    color: 'purple',
    hero: {
      headline: 'Empower Every Manager to Conduct World-Class Interviews',
      subheading: 'Stop bad interviews before they happen. AI Interview Helper provides real-time prompts, transcriptions, and scoring suggestions to keep every conversation on track.',
      primaryCTA: 'Enable for Team',
      secondaryCTA: 'View Demo'
    },
    problem: {
      title: 'Why Interviews are Often Low-Signal',
      paragraphs: [
        "Most hiring managers receive zero training on how to interview. This leads to 'winging it,' where they ask the same generic questions, miss red flags, and forget to take notes.",
        "Without standardized data, the post-interview debrief becomes a 'battle of opinions.' You need a tool that ensures every interviewer is asking the right questions and capturing the right data."
      ]
    },
    solution: {
      title: 'Meet EvalufAI AI Interview Helper',
      description: 'The Interview Helper is a silent co-pilot. It sits alongside your Zoom, Teams, or EvalufAI Video call, listening for key context and prompting the interviewer with relevant follow-up questions and real-time rubrics.'
    },
    beforeAfter: {
      before: ['Inconsistent, unstructured interviews', 'Recruiters spend hours chasing notes', "Biased 'gut-feel' hiring decisions", 'Fragmented candidate data'],
      after: ['Standardized, high-signal conversations', 'Instant, AI-generated session summaries', 'Data-backed, objective scoring', 'Centralized insights in the ATS']
    },
    features: [
      {
        title: 'Real-time Question Prompts',
        description: 'Never miss a critical follow-up.',
        howItWorks: 'AI listens for keywords and suggests the next logical probe.',
        outcome: 'Deeper signal in every interview.'
      },
      {
        title: 'Automated Transcription',
        description: 'Focus on the candidate, not your notes.',
        howItWorks: 'High-accuracy, real-time speech-to-text with speaker ID.',
        outcome: 'Perfect record of every conversation.'
      },
      {
        title: 'Scoring Rubric Overlay',
        description: 'Grade candidates while you talk.',
        howItWorks: 'Interactive rubrics pop up based on the current topic.',
        outcome: 'Instant, objective evaluations.'
      },
      {
        title: 'Post-Interview Summary',
        description: 'Get a 1-page report instantly after the call.',
        howItWorks: 'AI summarizes strengths, weaknesses, and key quotes.',
        outcome: 'Faster debriefs and decisions.'
      },
      {
        title: 'Interviewer Coaching',
        description: 'Improve your team’s interviewing skills over time.',
        howItWorks: "Flags things like 'Too much talking' or 'Leading questions'.",
        outcome: 'Better interviewers across the company.'
      }
    ],
    howItWorks: [
      { step: 'Connect', text: 'Enable the helper for your preferred video platform.' },
      { step: 'Interview', text: 'Conduct the call with AI prompts appearing on your screen.' },
      { step: 'Review', text: 'Receive an instant summary and transcript after the call.' },
      { step: 'Decide', text: 'Share the report with the hiring committee for a faster decision.' }
    ],
    impact: [
      { label: 'Signal Quality', value: '+60%' },
      { label: 'Note-Taking Time', value: '-100%' },
      { label: 'Hiring Consensus', value: '2x Faster' }
    ],
    useCases: ['First-Time Managers', 'Technical Panels', 'Executive Search', 'Campus Recruiting'],
    differentiation: "We are the only helper that integrates directly with your assessment data for a 'Full-Cycle' candidate view.",
    integrations: ['Zoom', 'Microsoft Teams', 'Google Meet', 'Slack', 'Workday'],
    proof: {
      metric: '100%',
      label: 'Of interviews now have structured feedback',
      testimonial: '"The AI Helper ensures I never forget to ask about culture-fit or system design. It’s like having a senior recruiter in the room with me."'
    },
    faqs: [
      { q: 'Is it distracting?', a: 'No, the prompts are subtle and can be toggled on/off.' },
      { q: 'Does the candidate see it?', a: 'No, it is only visible to the interviewer.' },
      { q: 'Is it recorded?', a: 'Yes, with the option to share highlights with the team.' },
      { q: 'Does it work in different languages?', a: 'Yes, it supports transcription in 30+ languages.' },
      { q: 'Can I use my own rubrics?', a: 'Absolutely, you can build custom forms for any role.' },
      { q: 'Is it secure?', a: 'Yes, we are SOC 2 compliant and encrypt all session data.' }
    ]
  },
  'ld-software': {
    title: 'L&D Software',
    icon: GraduationCap,
    color: 'orange',
    hero: {
      headline: 'The Next Generation of Skills-Based Learning & Development',
      subheading: "Stop investing in 'passive' learning. EvalufAI L&D uses high-fidelity simulations to upskill your team and provide real data on their competency growth.",
      primaryCTA: 'Upskill My Team',
      secondaryCTA: 'View Courses'
    },
    problem: {
      title: 'Why Most L&D is Wasted Money',
      paragraphs: [
        "Most companies spend millions on video libraries that employees never use. When they do, they forget 70% of the content within 24 hours because there’s no practical application.",
        "L&D leaders have no way to prove ROI. They know 'completion rates,' but they don't know if their engineering team is actually better at writing secure code or if their managers are better at conflict resolution."
      ]
    },
    solution: {
      title: 'Meet EvalufAI L&D',
      description: "EvalufAI L&D brings 'Active Learning' to the enterprise. We combine micro-learning with the same 'Flight Simulation' technology we use for elite hiring. Your team doesn't just watch videos; they build features, fix bugs, and practice conversations."
    },
    beforeAfter: {
      before: ['Passive, boring video content', 'No data on actual skill growth', 'Low employee engagement', 'Theoretical knowledge only'],
      after: ['Active, simulation-based learning', 'Real-time competency mapping', '90% retention through practice', 'Practical, job-ready skills']
    },
    features: [
      {
        title: 'Skill-Gap Diagnostic',
        description: 'Know exactly where your team needs help.',
        howItWorks: 'Baseline your team with a high-fidelity competency test.',
        outcome: 'Targeted, data-driven L&D spend.'
      },
      {
        title: 'Micro-Simulation Modules',
        description: 'Short, practical exercises for daily practice.',
        howItWorks: '5-10 minute tasks in a real IDE or software sandbox.',
        outcome: 'Continuous, habit-based upskilling.'
      },
      {
        title: 'AI Role-Play Training',
        description: 'Master soft skills through safe practice.',
        howItWorks: 'Interactive scenarios for Sales, Support, and Leadership.',
        outcome: 'Confident, high-EQ employees.'
      },
      {
        title: 'Internal Mobility Pathing',
        description: 'Prepare employees for their next role.',
        howItWorks: 'Curates content based on the skills needed for their next promotion.',
        outcome: 'Higher retention and internal succession.'
      },
      {
        title: 'ROI Dashboards',
        description: 'Prove the value of your training programs.',
        howItWorks: 'Tracks the rise in competency scores across the organization.',
        outcome: 'Clear, defensible budget requests.'
      }
    ],
    howItWorks: [
      { step: 'Assess', text: 'Run a diagnostic to find individual and team gaps.' },
      { step: 'Personalize', text: 'AI creates a custom learning path for every employee.' },
      { step: 'Practice', text: 'Employees complete simulations and role-plays.' },
      { step: 'Verify', text: 'Earn badges and certifications through final validation.' }
    ],
    impact: [
      { label: 'Retention of Learning', value: '90%' },
      { label: 'Promotion Rate', value: '+45%' },
      { label: 'Employee Engagement', value: '+60%' }
    ],
    useCases: ['Technical Upskilling', 'New Manager Training', 'Sales Enablement', 'Customer Success Onboarding'],
    differentiation: 'We are the only L&D platform built on the same engine used for high-stakes technical hiring.',
    integrations: ['Cornerstone', 'LinkedIn Learning', 'Workday Learning', 'Slack', 'MS Teams'],
    proof: {
      metric: '90%',
      label: 'Learning retention compared to 20% for video',
      testimonial: '"EvalufAI L&D allowed us to move 20% of our support team into engineering roles by providing a clear, practice-based upskilling path."'
    },
    faqs: [
      { q: 'Does it replace our LMS?', a: "It can, or it can integrate as a 'practice layer' on top of it." },
      { q: 'How many courses are there?', a: 'Over 500+ simulation-based modules across all departments.' },
      { q: 'Can we create our own?', a: "Yes, our 'Simulation Builder' is available for internal subject matter experts." },
      { q: 'Is it fun?', a: 'Yes, it includes leaderboards, badges, and streaks to drive engagement.' },
      { q: 'Does it work on mobile?', a: 'Soft skill modules do; technical ones are best on desktop.' },
      { q: 'Is it expensive?', a: 'We offer per-user pricing that scales with your team.' }
    ]
  },
  'one-way-video-interviews': {
    title: 'One-Way Video Interviews',
    icon: PlayCircle,
    color: 'purple',
    hero: {
      headline: 'The Gold Standard for Asynchronous Candidate Screening',
      subheading: 'Stop playing phone tag. One-Way Video Interviews let candidates record their responses when they’re ready, while your team reviews them in bulk.',
      primaryCTA: 'Start Screening',
      secondaryCTA: 'See Pricing'
    },
    problem: {
      title: 'Why Traditional Screening is Broken',
      paragraphs: [
        "Coordinating schedules for initial phone screens takes days of back-and-forth emails. By the time you find a slot, the best candidates have often moved on to other offers.",
        "Phone screens are also low-signal. You can't see the candidate's presence, enthusiasm, or non-verbal communication, leading to many 'wasted' first-round interviews."
      ]
    },
    solution: {
      title: 'Meet EvalufAI One-Way Video Interviews',
      description: 'EvalufAI provides a seamless, branded experience for asynchronous interviewing. We offer high-definition recording, custom prompt sets, and built-in technical validation so you can vet talent faster and more objectively.'
    },
    beforeAfter: {
      before: ['Infinite scheduling loops', 'Low-signal audio calls', 'High recruiter time commitment', 'Slow candidate progression'],
      after: ['Zero scheduling required', 'High-signal video responses', 'Bulk review in minutes', '24-hour time-to-shortlist']
    },
    features: [
      {
        title: 'Custom Branded Prompts',
        description: 'Interviewers can record video questions.',
        howItWorks: 'Hiring managers record themselves asking the questions to humanize the process.',
        outcome: '30% higher completion rates.'
      },
      {
        title: 'Timed Responses',
        description: 'Ensure authentic, non-rehearsed answers.',
        howItWorks: 'Set a limit (e.g., 60 seconds) for each response to test quick thinking.',
        outcome: 'True insight into candidate readiness.'
      },
      {
        title: 'Multi-Device Recording',
        description: 'Candidates can record on phone or laptop.',
        howItWorks: 'No-download, browser-based recording for all mobile devices.',
        outcome: 'Maximum candidate convenience.'
      },
      {
        title: 'Integrated Rubrics',
        description: 'Grade candidates consistently.',
        howItWorks: 'Reviewers use a standardized 1-5 scale directly in the interface.',
        outcome: 'Bias-free hiring decisions.'
      },
      {
        title: 'Batch Sharing',
        description: 'Get hiring manager feedback instantly.',
        howItWorks: 'Send a shortlist of videos to managers with one click.',
        outcome: '2x faster interview-to-hire ratio.'
      }
    ],
    howItWorks: [
      { step: 'Select', text: 'Choose a question set for the specific role.' },
      { step: 'Invite', text: 'Candidate receives a branded link to record.' },
      { step: 'Review', text: 'Recruiters watch and score the submissions.' },
      { step: 'Collaborate', text: 'Share the best videos with the hiring team.' }
    ],
    impact: [
      { label: 'Time Saved', value: '15h/week' },
      { label: 'Shortlist Speed', value: '5x' },
      { label: 'Candidate NPS', value: '4.7/5' }
    ],
    useCases: ['Campus Recruiting', 'Retail & Hospitality', 'Global Support Teams', 'Volume Engineering Hires'],
    differentiation: "We offer the most candidate-friendly interface with 'think-time' and retry options to ensure top performance.",
    integrations: ['Workday', 'Greenhouse', 'SuccessFactors', 'LinkedIn', 'Slack'],
    proof: {
      metric: '15 hours',
      label: 'Saved per recruiter every single week',
      testimonial: '"One-way interviews have completely removed the scheduling headache from our campus hiring. It’s been a game-changer."'
    },
    faqs: [
      { q: 'Is it awkward for candidates?', a: "We include 'warm-up' questions to help them get comfortable before the real ones." },
      { q: 'Can they see the questions ahead of time?', a: 'You can toggle this on or off based on your preference.' },
      { q: 'How many retries are allowed?', a: 'Fully customizable, from zero to infinite.' },
      { q: 'Is it mobile friendly?', a: 'Yes, works perfectly on iOS and Android browsers.' },
      { q: 'Do you provide transcripts?', a: 'Yes, AI generates high-accuracy transcripts for every video.' },
      { q: 'How do I share with managers?', a: "You can generate a 'Secure Share' link or push directly to your ATS." }
    ]
  }
};
