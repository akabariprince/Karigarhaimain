export type RouteTier = 'premium' | 'medium' | 'simple';

export type RouteGroup = {
  path: string;
  title: string;
  tier: RouteTier;
  sections: string[];
};

export const routeGroups: RouteGroup[] = [
  {
    path: '/how-it-works',
    title: 'How It Works',
    tier: 'premium',
    sections: ['Customer flow', 'Provider flow', 'Booking lifecycle', 'Escrow'],
  },
  {
    path: '/services',
    title: 'Services',
    tier: 'premium',
    sections: ['Categories', 'Overview', 'Included', 'FAQ'],
  },
  {
    path: '/for-professionals',
    title: 'For Professionals',
    tier: 'premium',
    sections: ['Registration', 'KYC', 'Earnings', 'Withdrawals'],
  },
  {
    path: '/about',
    title: 'About',
    tier: 'premium',
    sections: ['Story', 'Mission', 'Solution', 'Roadmap'],
  },
  {
    path: '/trust-and-safety',
    title: 'Trust & Safety',
    tier: 'premium',
    sections: ['Protection', 'Escrow', 'Fraud', 'Support'],
  },
  {
    path: '/faq',
    title: 'FAQ',
    tier: 'premium',
    sections: ['General', 'Customer', 'Provider', 'Policy'],
  },
  {
    path: '/pricing',
    title: 'Pricing',
    tier: 'medium',
    sections: ['Customer Pricing', 'Provider Pricing', 'Fees', 'FAQs'],
  },
  {
    path: '/blog',
    title: 'Blog',
    tier: 'medium',
    sections: ['Featured', 'Search', 'Newsletter', 'SEO'],
  },
  {
    path: '/contact',
    title: 'Contact',
    tier: 'simple',
    sections: ['Form', 'Details'],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    tier: 'simple',
    sections: ['Policy'],
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    tier: 'simple',
    sections: ['Policy'],
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy',
    tier: 'simple',
    sections: ['Policy'],
  },
];

export const premiumNav = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];
