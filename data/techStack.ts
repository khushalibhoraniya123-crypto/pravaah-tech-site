export interface TechCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  items: {
    name: string;
    description: string;
    icon: string;
    highlight: string;
    color: string;
  }[];
}

export const TECH_STACK_DATA: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    badge: 'Sub-Second React & Web',
    description: 'Modern reactive libraries and styling frameworks engineered for sub-second load times and fluid responsive interactions.',
    items: [
      { name: 'React 19', description: 'Interactive Component Architectures & Hooks', icon: 'Atom', highlight: 'SPA & Web Apps', color: '#61DAFB' },
      { name: 'Next.js 15', description: 'SSR, SSG & Server Actions with Edge Caching', icon: 'Globe', highlight: 'SEO & Performance', color: '#000000' },
      { name: 'TypeScript', description: 'Type-Safe Robust Enterprise Codebases', icon: 'Code2', highlight: 'Zero Any Policy', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', description: 'Modern Asynchronous Web Interactivity', icon: 'FileCode2', highlight: 'Core Web Standard', color: '#F7DF1E' },
      { name: 'Tailwind CSS', description: 'Utility-first Modern Design Token System', icon: 'Palette', highlight: 'Responsive UI', color: '#38BDF8' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    badge: 'High Throughput Logic',
    description: 'Scalable server environments, REST/GraphQL microservices, and secure event-driven backend pipelines.',
    items: [
      { name: 'Node.js', description: 'Asynchronous Non-blocking High-Concurrency Runtime', icon: 'Server', highlight: 'Microservices', color: '#5FA04E' },
      { name: 'Express.js', description: 'Fast, Minimalist RESTful API Framework', icon: 'Layers', highlight: 'RESTful Endpoints', color: '#000000' },
      { name: 'Python & FastAPI', description: 'High-Speed Asynchronous Endpoints & ML Bridges', icon: 'Terminal', highlight: 'AI & Data Services', color: '#3776AB' },
      { name: 'Go (Golang)', description: 'Ultra-Fast Low-Latency Distributed Microservices', icon: 'Cpu', highlight: 'Sub-10ms APIs', color: '#00ADD8' },
      { name: 'GraphQL & Webhooks', description: 'Flexible Query Schemas & Real-time Event Subscriptions', icon: 'Workflow', highlight: 'Event Bus', color: '#E10098' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Caching',
    badge: 'ACID & NoSQL Storage',
    description: 'Distributed document databases, relational stores, and in-memory caches designed for maximum data integrity.',
    items: [
      { name: 'PostgreSQL', description: 'Advanced Relational SQL Database with RLS', icon: 'Database', highlight: 'ACID Transactions', color: '#4169E1' },
      { name: 'MongoDB', description: 'Flexible Document-oriented NoSQL Cluster', icon: 'HardDrive', highlight: 'Dynamic Schemas', color: '#47A248' },
      { name: 'MySQL', description: 'Proven Structured Enterprise SQL Storage', icon: 'Table', highlight: 'Enterprise Storage', color: '#4479A1' },
      { name: 'Redis Cache', description: 'In-Memory Key-Value Caching & Queue Management', icon: 'Zap', highlight: 'Sub-millisecond', color: '#DC382D' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    badge: 'Automated CI/CD',
    description: 'Cloud infrastructure orchestration, containerization, and continuous delivery pipelines with 99.9% uptime SLAs.',
    items: [
      { name: 'AWS Cloud', description: 'EC2, S3, Lambda, CloudFront & Managed RDS', icon: 'Cloud', highlight: 'Enterprise Cloud', color: '#FF9900' },
      { name: 'Docker', description: 'Consistent Containerized Deployment Environments', icon: 'Box', highlight: 'Zero Config Drift', color: '#2496ED' },
      { name: 'GitHub Actions', description: 'Automated Build, Test & Production Deployments', icon: 'GitBranch', highlight: 'Automated CI/CD', color: '#2088FF' },
      { name: 'Kubernetes', description: 'Resilient Microservice Auto-Scaling & Cluster Health', icon: 'Shield', highlight: '99.99% Availability', color: '#326CE5' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    badge: 'Cognitive Systems',
    description: 'Large language models, generative AI architectures, automated bots, and predictive machine learning.',
    items: [
      { name: 'OpenAI GPT-4o & Claude', description: 'Advanced Generative Reasoning & Custom Prompting', icon: 'Sparkles', highlight: 'Foundational LLMs', color: '#10A37F' },
      { name: 'LangChain & Vector RAG', description: 'Grounded Knowledge Ingestion & Citation Search', icon: 'BrainCircuit', highlight: 'Zero Hallucination', color: '#8B5CF6' },
      { name: 'Autonomous AI Agents', description: 'Multi-Tool Execution & 24/7 Autopilot Systems', icon: 'Bot', highlight: 'Task Orchestration', color: '#1769E0' },
      { name: 'OCR & Intelligent Extraction', description: 'Computer Vision Document & Invoice Parsing', icon: 'Wand2', highlight: '99.9% Accuracy', color: '#EC4899' },
    ],
  },
];
