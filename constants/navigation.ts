export interface NavLinkItem {
  label: string;
  targetId: string;
}

export const NAV_ITEMS: NavLinkItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'Services', targetId: 'services' },
  { label: 'About', targetId: 'about' },
  { label: 'Process', targetId: 'process' },
  { label: 'Technologies', targetId: 'technologies' },
  { label: 'Why Us', targetId: 'why-us' },
  { label: 'Reviews', targetId: 'testimonials' },
  { label: 'Contact', targetId: 'contact' },
];

export const PORTFOLIO_DOMAIN_TABS = ['Web', 'Mobile', 'UI/UX', 'Software', 'AI'];
