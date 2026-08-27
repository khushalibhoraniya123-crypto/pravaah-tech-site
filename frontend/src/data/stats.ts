import type { StatItem } from '../types';

export const getStatsData = (): StatItem[] => [
  {
    value: '12+',
    numberOnly: 12,
    suffix: '+',
    label: 'Project Delivered',
    description: 'High-impact digital systems and apps launched successfully',
    iconName: 'CheckCircle2',
  },
  {
    value: '9+',
    numberOnly: 9,
    suffix: '+',
    label: 'Happy Client',
    description: 'Enterprises, high-growth startups and global brands',
    iconName: 'Smile',
  },
  {
    value: '3+',
    numberOnly: 3,
    suffix: '+',
    label: 'Digital Solution',
    description: 'Specialized enterprise modules & turn-key software suites',
    iconName: 'Layers',
  },
  {
    value: '99%',
    numberOnly: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistent 5-star ratings and long-term partnership retention',
    iconName: 'Award',
  },
];
