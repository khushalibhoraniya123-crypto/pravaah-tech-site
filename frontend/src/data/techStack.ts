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
    name: 'Frontend Technologies',
    badge: 'Pixel-Perfect UI',
    description: 'Modern reactive libraries and styling frameworks engineered for sub-second load times and fluid responsive interactions.',
    items: [
      { name: 'React.js', description: 'Interactive SPA & Component Architecture', icon: 'Atom', highlight: 'Industry Standard', color: '#61DAFB' },
      { name: 'Next.js', description: 'SSR, SSG & Server Actions Architecture', icon: 'Globe', highlight: 'SEO & Performance', color: '#000000' },
      { name: 'TypeScript', description: 'Type-Safe Robust Enterprise Codebases', icon: 'Code2', highlight: 'Clean Code', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', description: 'Modern Core Web Interactivity', icon: 'FileCode2', highlight: 'Core Web', color: '#F7DF1E' },
      { name: 'Tailwind CSS', description: 'Utility-first Modern Design System', icon: 'Palette', highlight: 'Fluid UI', color: '#38BDF8' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    badge: 'High Throughput Logic',
    description: 'Scalable server environments, REST/GraphQL microservices, and secure event-driven backend pipelines.',
    items: [
      { name: 'Node.js', description: 'Asynchronous Non-blocking Runtime', icon: 'Server', highlight: 'High Concurrency', color: '#5FA04E' },
      { name: 'Express.js', description: 'Fast, Unopinionated Web Framework', icon: 'Layers', highlight: 'REST APIs', color: '#000000' },
      { name: 'Python', description: 'Versatile Scripting & AI Integration', icon: 'Terminal', highlight: 'AI & Data', color: '#3776AB' },
      { name: 'Django', description: 'Batteries-Included High Security Framework', icon: 'Shield', highlight: 'Enterprise Ready', color: '#092E20' },
      { name: 'PHP', description: 'Modern Web & CMS Backend Architecture', icon: 'Cpu', highlight: 'Web Legacy', color: '#777BB4' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Caching',
    badge: 'ACID & NoSQL Storage',
    description: 'Distributed document databases, relational stores, and in-memory caches designed for data integrity.',
    items: [
      { name: 'MongoDB', description: 'Flexible Document-oriented NoSQL', icon: 'Database', highlight: 'Dynamic Schemas', color: '#47A248' },
      { name: 'PostgreSQL', description: 'Advanced Relational SQL Database', icon: 'HardDrive', highlight: 'Complex Queries', color: '#4169E1' },
      { name: 'MySQL', description: 'Proven Structured Enterprise SQL', icon: 'Table', highlight: 'Reliable Transactions', color: '#4479A1' },
      { name: 'Redis', description: 'In-Memory Key-Value Caching & Queues', icon: 'Zap', highlight: 'Sub-millisecond', color: '#DC382D' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    badge: 'Automated CI/CD',
    description: 'Cloud infrastructure orchestration, containerization, and continuous delivery pipelines.',
    items: [
      { name: 'AWS (Amazon Web Services)', description: 'EC2, S3, Lambda, CloudFront & RDS', icon: 'Cloud', highlight: 'Cloud Leader', color: '#FF9900' },
      { name: 'Docker', description: 'Consistent Containerized Environments', icon: 'Box', highlight: 'Portability', color: '#2496ED' },
      { name: 'GitHub Actions', description: 'Automated Build, Test & Deploy Pipelines', icon: 'GitBranch', highlight: 'Automated CI/CD', color: '#2088FF' },
      { name: 'CI/CD Pipelines', description: 'Zero-Downtime Deployment Automation', icon: 'Workflow', highlight: 'Continuous Delivery', color: '#6C3FE8' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    badge: 'Next-Gen Cognitive Tech',
    description: 'Large language models, generative AI architectures, automated bots, and predictive machine learning.',
    items: [
      { name: 'OpenAI (GPT-4 / Claude API)', description: 'LLMs, Embeddings & Natural Language', icon: 'Sparkles', highlight: 'State of the Art', color: '#10A37F' },
      { name: 'Machine Learning', description: 'Predictive Models & Data Intelligence', icon: 'BrainCircuit', highlight: 'Predictive Analytics', color: '#8B5CF6' },
      { name: 'Generative AI', description: 'Image, Text & Synthetic Media Synthesis', icon: 'Wand2', highlight: 'Content Synthesis', color: '#EC4899' },
      { name: 'AI Automation', description: 'Autonomous Workflows & Smart Agents', icon: 'Bot', highlight: '24/7 Autopilot', color: '#1769E0' },
    ],
  },
];
