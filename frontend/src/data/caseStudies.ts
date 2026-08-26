export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tagline: string;
  client: string;
  industry: string;
  year: string;
  badge: string;
  heroImageGradient: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'nexus-erp',
    title: 'Nexus Enterprise ERP',
    category: 'Custom Software & ERP',
    tagline: 'Multi-tenant business management ERP connecting 14 supply chain warehouses with sub-180ms response times.',
    client: 'Nexus Supply Chain Ltd.',
    industry: 'Logistics & Supply Chain',
    year: '2025',
    badge: '12,500+ Active Users',
    heroImageGradient: 'from-[#06132D] via-[#0B2559] to-[#059669]',
    challenge: 'The client struggled with disconnected legacy software across 14 international warehouses. Data entry was duplicated on spreadsheets, resulting in frequent stockout discrepancies and over $180,000 in annual recurring software subscription costs.',
    solution: 'Pravaah Technologies engineered a custom, multi-tenant enterprise ERP platform. We unified real-time inventory tracking, automated supplier purchase orders, accounting ledgers, and role-based staff permissions into one centralized dashboard.',
    architectureHighlights: [
      'Isolated tenant data partitions with PostgreSQL row-level security (RLS)',
      'High-throughput Go & Node.js microservice cluster supporting 4,800 req/sec',
      'Barcode and QR code scanning with offline emergency sync',
      'Immutable cryptographic audit logging for financial compliance',
    ],
    deliverables: [
      'Multi-Warehouse Inventory & Barcode Engine',
      'Automated Supplier PO & Invoicing Pipeline',
      'Executive P&L Telemetry & Real-Time Margin Tracking',
      'Role-Based Granular Access Control (RBAC)',
    ],
    techStack: ['Node.js', 'Go', 'Docker', 'PostgreSQL', 'Redis', 'React 19', 'Tailwind CSS'],
    metrics: [
      { label: 'Operational Speed', value: '+45%' },
      { label: 'Active Daily Users', value: '12,500+' },
      { label: 'API Response Latency', value: '<180ms' },
      { label: 'Annual SaaS Cost Saved', value: '$180,000' },
    ],
    testimonial: {
      quote: 'Pravaah Technologies delivered our custom enterprise ERP on time and with zero downtime. Their technical architecture eliminated $180k in annual software bloat and unified 14 warehouses seamlessly.',
      author: 'Rajesh Mehta',
      role: 'Managing Director & CEO',
    },
  },
  {
    id: 'aura-luxe',
    title: 'Aura Luxe Marketplace',
    category: 'Web Engineering & Commerce',
    tagline: 'Headless luxury e-commerce platform with sub-second page transitions and dynamic currency conversion.',
    client: 'Aura Luxe Global',
    industry: 'Luxury Retail & Commerce',
    year: '2025',
    badge: '+38% Conversion Lift',
    heroImageGradient: 'from-[#06132D] via-[#1A0B2E] to-[#6C3FE8]',
    challenge: 'Aura Luxe experienced a 42% cart abandonment rate on mobile devices due to slow 3.8s page load times and fragmented multi-currency checkout gateways.',
    solution: 'We rebuilt their entire storefront with Next.js 15 App Router, React Server Components, and edge CDN distribution. We engineered a streamlined 1-click checkout flow with automated geo-currency detection and Redis cart caching.',
    architectureHighlights: [
      'Sub-0.8s Global Time-to-First-Byte (TTFB) via Vercel Edge Networks',
      'Instant search and faceted filtering powered by vector embeddings',
      'Automated tax, shipping, and duty calculation API integrations',
      'Mobile-first responsive design with 98+ Google PageSpeed score',
    ],
    deliverables: [
      'Headless Next.js 15 Commercial Storefront',
      'Multi-Currency One-Click Checkout Engine',
      'Dynamic Inventory & Warehouse Integration',
      'Personalized AI Recommendation Widget',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe API', 'Redis'],
    metrics: [
      { label: 'Checkout Conversion Lift', value: '+38%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Google PageSpeed Score', value: '98/100' },
      { label: 'Mobile Bounce Rate', value: '-32%' },
    ],
    testimonial: {
      quote: 'The speed and visual polish of Pravaah’s React/Next.js frontend engineering is world-class. Our storefront now loads in under 0.8 seconds globally, directly driving a 38% increase in mobile checkout conversions.',
      author: 'Elena Rostova',
      role: 'VP of Digital Commerce',
    },
  },
  {
    id: 'cognitiveiq-ai',
    title: 'CognitiveIQ AI Assistant',
    category: 'AI Systems & Autonomous Agents',
    tagline: 'Enterprise grounded RAG search engine and autonomous support agents indexing 500k+ internal documents.',
    client: 'CognitiveIQ Systems',
    industry: 'Enterprise Technology & Compliance',
    year: '2025',
    badge: '14 hrs Saved/Week',
    heroImageGradient: 'from-[#06132D] via-[#0D2847] to-[#10A37F]',
    challenge: 'Over 800 employees spent an average of 14 hours weekly manually searching through 500,000+ compliance PDFs, vendor agreements, and internal technical documentation.',
    solution: 'We engineered an isolated private RAG (Retrieval-Augmented Generation) knowledge engine using Pinecone vector databases and customized OpenAI GPT-4o models. Every answer is citation-backed with zero external data retention.',
    architectureHighlights: [
      'Hybrid semantic vector search + keyword dense retrieval',
      'Strict zero-retention private cloud security guardrails',
      'Multi-tool autonomous agent scheduling and ticket resolution',
      'Sub-400ms neural inference and response streaming',
    ],
    deliverables: [
      'Grounded Enterprise Vector Search Portal',
      'Autonomous 24/7 Tier-1 Customer Support Bot',
      'Automated Legal Document & PDF Summarizer',
      'Executive Analytics on Internal Knowledge Gaps',
    ],
    techStack: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'LangChain', 'Pinecone', 'React 19', 'TypeScript'],
    metrics: [
      { label: 'First-Pass Query Resolution', value: '94%' },
      { label: 'Hours Saved Per Employee', value: '14 hrs/wk' },
      { label: 'Indexed Enterprise Pages', value: '500,000+' },
      { label: 'Data Leakage Risk', value: '0%' },
    ],
    testimonial: {
      quote: 'Deploying their grounded RAG AI agents transformed our internal legal and operations search. Our staff reclaims 14 hours per week searching through 500,000+ files, backed by zero-data-leakage architecture.',
      author: 'Vikram Singhania',
      role: 'Chief Technology Officer',
    },
  },
  {
    id: 'voyager-travel',
    title: 'Voyager Global Travel Portal',
    category: 'Web & Cloud Architecture',
    tagline: 'Interactive dynamic flight booking and destination itinerary engine processing over $4.2M in annual bookings.',
    client: 'Voyager International',
    industry: 'Travel & Hospitality',
    year: '2024',
    badge: '$4.2M Annual Bookings',
    heroImageGradient: 'from-[#06132D] via-[#0E2856] to-[#1769E0]',
    challenge: 'High server latency and concurrent transaction drop-offs during flight sales resulted in lost bookings and customer frustration.',
    solution: 'We decoupled the legacy monolithic platform into containerized microservices hosted on AWS with Redis caching and real-time inventory locking, reducing server response times from 3.2s to 450ms.',
    architectureHighlights: [
      'Distributed microservice booking pipeline with zero double-booking locks',
      'Real-time flight schedule and seat map telemetry',
      'Automated multilingual translation and dynamic currency settlement',
      'Integrated payment reconciliation engine with fraud detection',
    ],
    deliverables: [
      'Dynamic Flight & Hotel Booking Engine',
      'Interactive Custom Itinerary Planner',
      'Automated Ticket & Invoice Generation Pipeline',
      '24/7 Live Traveler Support Webhook Bridge',
    ],
    techStack: ['Node.js', 'Express', 'React', 'AWS ECS', 'Docker', 'Redis', 'PostgreSQL'],
    metrics: [
      { label: 'Annual Booking Volume', value: '$4.2M+' },
      { label: 'Active Destinations', value: '120+' },
      { label: 'Average Server Latency', value: '450ms' },
      { label: 'System Availability', value: '99.95%' },
    ],
    testimonial: {
      quote: 'Pravaah rebuilt our mission-critical booking engine to handle massive traffic surges flawlessly. Our booking completion velocity improved drastically.',
      author: 'Marcus Vance',
      role: 'Head of Operations',
    },
  },
  {
    id: 'finpulse-wealth',
    title: 'FinPulse Wealth Terminal',
    category: 'UI/UX & Product Design',
    tagline: 'High-density multi-asset wealth management terminal with 250+ tokens and WCAG AA compliance.',
    client: 'FinPulse Capital',
    industry: 'Fintech & Asset Management',
    year: '2024',
    badge: '+52% Trader Velocity',
    heroImageGradient: 'from-[#06132D] via-[#1F1147] to-[#EC4899]',
    challenge: 'Traders and wealth managers struggled with visual clutter, inconsistent navigation, and poor data hierarchy across multiple legacy asset monitoring screens.',
    solution: 'We created an atomic design system with 250+ responsive tokens, dark/light modes, customizable multi-chart layouts, and high-density telemetry widgets verified through extensive trader user testing.',
    architectureHighlights: [
      'Figma token architecture mapped directly to CSS variables and React components',
      'Sub-50ms WebSocket real-time price tick visualization',
      'Full WCAG AA accessibility compliance with high-contrast data visualization',
      'Customizable modular drag-and-drop workspace layout',
    ],
    deliverables: [
      'Complete Multi-Theme Figma Design System',
      'High-Density Multi-Asset Trading Terminal UI',
      'Interactive Clickable Component Library',
      'Design-to-Code Developer Hand-Off Documentation',
    ],
    techStack: ['Figma Tokens', 'React', 'TypeScript', 'Tailwind CSS', 'TradingView API', 'WebSockets'],
    metrics: [
      { label: 'Trader Task Velocity', value: '+52%' },
      { label: 'Usability Score', value: '96/100' },
      { label: 'Design Tokens Created', value: '250+' },
      { label: 'Accessibility Standard', value: 'WCAG AA' },
    ],
    testimonial: {
      quote: 'The UX precision and speed of information hierarchy that Pravaah designed gave our traders a decisive competitive edge.',
      author: 'Sophia Sterling',
      role: 'Head of Trading Systems',
    },
  },
  {
    id: 'healthsync-telehealth',
    title: 'HealthSync Telehealth Platform',
    category: 'Healthcare & HIPAA Systems',
    tagline: 'HIPAA-compliant encrypted telehealth consultation rooms and automated electronic medical records.',
    client: 'HealthSync Network',
    industry: 'Healthcare & Telemedicine',
    year: '2024',
    badge: '65% Less Wait Time',
    heroImageGradient: 'from-[#06132D] via-[#0A2E3D] to-[#0284C7]',
    challenge: 'Patient wait times exceeded 45 minutes for remote consultations, and fragmented medical records created compliance vulnerabilities.',
    solution: 'We engineered an end-to-end HIPAA-compliant telehealth platform with browser-based encrypted WebRTC video rooms, automated appointment SMS reminders, and integrated EMR notes.',
    architectureHighlights: [
      'End-to-end encrypted WebRTC audio/video consultation pipeline',
      'Strict HIPAA & SOC-2 compliant encrypted database partitions',
      'Automated doctor calendar scheduling with SMS/Email reminders',
      'Digital e-prescription generation and pharmacy routing API',
    ],
    deliverables: [
      'Encrypted HD Video Consultation Rooms',
      'Integrated Patient EMR & Prescription Vault',
      'Automated Doctor Calendar & Queue Manager',
      'Patient Mobile Web Portal',
    ],
    techStack: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'Docker', 'AWS HIPAA Cloud'],
    metrics: [
      { label: 'Patient Wait Time Reduction', value: '65%' },
      { label: 'Telehealth Consultations', value: '25,000+' },
      { label: 'Compliance Level', value: '100% HIPAA' },
      { label: 'Patient Rating', value: '4.9/5.0' },
    ],
    testimonial: {
      quote: 'Pravaah delivered a secure, reliable, and incredibly easy-to-use telehealth system that our doctors and patients love.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer',
    },
  },
];
