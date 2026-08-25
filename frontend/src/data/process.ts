import type { ProcessStep } from '../types';

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Deep Requirements Gathering',
    description: 'Understand your business objectives, target audience, competitive landscape, and functional project requirements in detail.',
    highlights: ['Stakeholder Interviews', 'Technical Feasibility Analysis', 'Scope Definition', 'Requirement Mapping'],
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    tagline: 'Architectural Blueprint',
    description: 'Define the optimal tech stack, system architecture, delivery milestones, sprint roadmap, and risk mitigation strategies.',
    highlights: ['System Architecture Design', 'Technology Selection', 'Milestone Planning', 'Resource Allocation'],
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'Human-Centered UI/UX',
    description: 'Create intuitive user journeys, wireframes, high-fidelity interactive Figma prototypes, and modular design systems aligned with your brand.',
    highlights: ['Wireframes & User Flows', 'Figma Prototypes', 'Design System Creation', 'Interactive Micro-interactions'],
    iconName: 'Palette',
  },
  {
    number: '04',
    title: 'DEVELOP',
    tagline: 'Clean Agile Engineering',
    description: 'Build robust, scalable, secure, and clean codebases using modern frontend, backend, database, and cloud technologies.',
    highlights: ['Modular Component Code', 'REST / GraphQL APIs', 'Database Optimization', 'Security Protocols'],
    iconName: 'Code',
  },
  {
    number: '05',
    title: 'TEST & LAUNCH',
    tagline: 'Quality Assurance & Deployment',
    description: 'Comprehensive end-to-end testing, security audits, load testing, performance tuning, and zero-downtime production deployment.',
    highlights: ['Cross-Browser / Mobile Testing', 'Load & Speed Optimization', 'CI/CD Pipeline Setup', 'Store / Cloud Launch'],
    iconName: 'Rocket',
  },
  {
    number: '06',
    title: 'GROW',
    tagline: 'Continuous Scaling & Support',
    description: 'Monitor analytics, provide 24/7 technical maintenance, roll out feature updates, and scale infrastructure as your business expands.',
    highlights: ['Telemetry & Uptime Monitoring', 'Feature Iterations', 'Cloud Auto-Scaling', 'Dedicated Support'],
    iconName: 'TrendingUp',
  },
];
