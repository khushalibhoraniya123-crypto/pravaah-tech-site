import type { ProcessPhase } from '@/types';

export const PROCESS_DATA: ProcessPhase[] = [
  {
    number: '01',
    category: 'DISCOVERY',
    title: 'Discover & Market Research',
    tagline: 'Goal Alignment & Competitor Audit',
    description:
      'Deep-dive session to extract core business goals, target user behavior, and project technical scope.',
    highlights: ['Goal Alignment', 'Competitor Audit'],
    iconName: 'Search',
    color: '#00D2FF',
  },
  {
    number: '02',
    category: 'ARCHITECTURE',
    title: 'Strategic Blueprinting',
    tagline: 'Tech Stack & Milestone Mapping',
    description:
      'Formulating the technical architecture, selecting modern stacks, and building the project roadmap.',
    highlights: ['Tech Stack', 'Milestone Mapping'],
    iconName: 'Compass',
    color: '#2563EB',
  },
  {
    number: '03',
    category: 'INTERFACE',
    title: 'UI/UX Visual Crafting',
    tagline: 'Figma Prototypes & Design System',
    description:
      'High-converting interactive wireframes, custom animations, and a cohesive design system for your brand.',
    highlights: ['Figma Prototypes', 'Design System'],
    iconName: 'Palette',
    color: '#7C3AED',
  },
  {
    number: '04',
    category: 'ENGINEERING',
    title: 'Robust Core Development',
    tagline: 'Clean Code & API Integrations',
    description:
      'Transforming designs into clean, scalable, and secure production-ready code with responsive layouts.',
    highlights: ['Clean Code', 'API Integrations'],
    iconName: 'Code',
    color: '#4F46E5',
  },
  {
    number: '05',
    category: 'DEPLOYMENT',
    title: 'QA, Testing & Zero-Downtime Launch',
    tagline: 'QA Automation & Cloud Launch',
    description:
      'Comprehensive multi-device testing, security auditing, and deployment to high-availability servers.',
    highlights: ['QA Automation', 'Cloud Launch'],
    iconName: 'Rocket',
    color: '#059669',
  },
  {
    number: '06',
    category: 'GROWTH',
    title: 'Scale, Monitor & Continuous Iterate',
    tagline: 'Performance Tuning & Scaling',
    description:
      'Post-launch performance optimization, real-time analytics monitoring, and continuous feature expansion.',
    highlights: ['Performance Tuning', 'Scaling'],
    iconName: 'TrendingUp',
    color: '#9333EA',
  },
];
