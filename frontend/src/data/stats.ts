import { CONTACT_CONFIG } from '../config/contact';
import type { StatItem } from '../types';

export const getStatsData = (): StatItem[] => [
  {
    value: CONTACT_CONFIG.stats.projectsDelivered,
    numberOnly: 50,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'High-impact digital systems and apps launched successfully',
    iconName: 'CheckCircle2',
  },
  {
    value: CONTACT_CONFIG.stats.happyClients,
    numberOnly: 25,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Enterprises, high-growth startups and global brands',
    iconName: 'Smile',
  },
  {
    value: CONTACT_CONFIG.stats.digitalSolutions,
    numberOnly: 10,
    suffix: '+',
    label: 'Digital Solutions',
    description: 'Specialized enterprise modules & turn-key software suites',
    iconName: 'Layers',
  },
  {
    value: CONTACT_CONFIG.stats.clientSatisfaction,
    numberOnly: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistent 5-star ratings and long-term partnership retention',
    iconName: 'Award',
  },
];
