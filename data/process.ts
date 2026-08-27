import type { ProcessStep } from '@/types';

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    tagline: 'Understand & Align',
    description: 'We dive deep into your business goals, target audience, technical requirements, and project scope.',
    highlights: ['Stakeholder Interviews', 'Technical Feasibility', 'Project Roadmap', 'Requirement Analysis'],
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'Strategy',
    tagline: 'Plan & Architect',
    description: 'We design the architecture, select the optimal tech stack, and map out milestones for reliable execution.',
    highlights: ['System Architecture', 'Database Modeling', 'Milestone Schedule', 'Resource Planning'],
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Design & Prototype',
    description: 'We create intuitive, responsive user interfaces and interactive clickable prototypes using modern design systems.',
    highlights: ['Wireframes & Flows', 'High-Fidelity Figma', 'Design System Tokens', 'Interactive Prototype'],
    iconName: 'Palette',
  },
  {
    number: '04',
    title: 'Development',
    tagline: 'Build & Integrate',
    description: 'Our engineers write clean, modular, and performant code following industry standards and security best practices.',
    highlights: ['Clean Architecture', 'API Integrations', 'Unit & E2E Testing', 'Sprint Reviews'],
    iconName: 'Code',
  },
  {
    number: '05',
    title: 'QA & Launch',
    tagline: 'Test & Deploy',
    description: 'Thorough performance benchmarking, security audits, and zero-downtime deployment to production cloud environments.',
    highlights: ['Performance Audits', 'Cross-browser Testing', 'Cloud Deployment', 'SEO Verification'],
    iconName: 'Rocket',
  },
  {
    number: '06',
    title: 'Scale & Support',
    tagline: 'Maintain & Grow',
    description: 'Continuous monitoring, routine updates, new feature expansions, and dedicated technical maintenance.',
    highlights: ['24/7 Monitoring', 'Security Patches', 'Feature Iterations', 'Ongoing Optimization'],
    iconName: 'TrendingUp',
  },
];
