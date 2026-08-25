export interface InMemoryInquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export const inMemoryInquiries: InMemoryInquiry[] = [
  {
    _id: 'inq_demo_01',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@innovatetech.io',
    phone: '+91 98765 43210',
    company: 'InnovateTech Systems',
    service: 'AI Solutions',
    budget: '$5,000 - $10,000',
    message: 'We are seeking an AI-driven automation solution for our enterprise workflow and customer intelligence dashboard.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600 * 1000 * 4),
    updatedAt: new Date(Date.now() - 3600 * 1000 * 4),
  },
  {
    _id: 'inq_demo_02',
    name: 'Sophia Reynolds',
    email: 'sophia@nexushealth.com',
    phone: '+1 (555) 349-2910',
    company: 'Nexus Health Global',
    service: 'Custom Web Applications',
    budget: '$10,000 - $25,000',
    message: 'Looking for a high-performance web platform with patient portal, telehealth integrations, and HIPAA-compliant data pipeline.',
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600 * 1000 * 28),
    updatedAt: new Date(Date.now() - 3600 * 1000 * 12),
  },
  {
    _id: 'inq_demo_03',
    name: 'Rohan Mehta',
    email: 'rohan@urbanfin.co',
    phone: '+91 91234 56789',
    company: 'UrbanFin Tech',
    service: 'UI/UX Design',
    budget: '$2,500 - $5,000',
    message: 'We need a comprehensive UI/UX overhaul for our fintech mobile application and web dashboard.',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 3600 * 1000 * 48),
    updatedAt: new Date(Date.now() - 3600 * 1000 * 20),
  },
];
