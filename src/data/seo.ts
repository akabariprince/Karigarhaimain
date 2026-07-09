import type { RouteGroup } from './routes';

export type SeoData = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const siteName = 'KarigarHai';
const siteUrl = import.meta.env.VITE_SITE_URL || 'https://karigarhai.com';

const seoByPath: Record<string, SeoData> = {
  '/': {
    title: `${siteName} | Trusted local service professionals`,
    description:
      'Book verified local service professionals with secure payments, OTP-based start, escrow protection, and responsive support.',
    canonicalPath: '/',
  },
  '/how-it-works': {
    title: `How It Works | ${siteName}`,
    description:
      'See the booking flow, provider journey, escrow release, OTP check-in, completion approval, and dispute handling.',
    canonicalPath: '/how-it-works',
  },
  '/services': {
    title: `Services | ${siteName}`,
    description:
      'Browse home service categories, what is included, what is excluded, and related service options for every job.',
    canonicalPath: '/services',
  },
  '/for-professionals': {
    title: `For Professionals | ${siteName}`,
    description:
      'Learn about provider registration, KYC, verification, earnings, withdrawals, badges, referrals, and job discovery.',
    canonicalPath: '/for-professionals',
  },
  '/about': {
    title: `About | ${siteName}`,
    description:
      'Read the company story, mission, vision, values, roadmap, and the problem the platform is built to solve.',
    canonicalPath: '/about',
  },
  '/trust-and-safety': {
    title: `Trust & Safety | ${siteName}`,
    description:
      'Explore customer protection, provider protection, escrow, OTP, fraud prevention, moderation, and emergency support.',
    canonicalPath: '/trust-and-safety',
  },
  '/faq': {
    title: `FAQ | ${siteName}`,
    description:
      'Find answers about registration, verification, payments, escrow, wallet, KYC, ratings, reviews, refunds, and disputes.',
    canonicalPath: '/faq',
  },
  '/pricing': {
    title: `Pricing | ${siteName}`,
    description:
      'Review customer pricing, provider fees, taxes, cancellation charges, refund rules, and payment examples.',
    canonicalPath: '/pricing',
  },
  '/blog': {
    title: `Blog | ${siteName}`,
    description:
      'Read featured service guides, articles, and editorial content focused on home services, safety, and hiring tips.',
    canonicalPath: '/blog',
  },
  '/contact': {
    title: `Contact | ${siteName}`,
    description:
      'Reach the KarigarHai team by email, phone, or WhatsApp for support, partnerships, media, and office details.',
    canonicalPath: '/contact',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${siteName}`,
    description:
      'Learn how KarigarHai collects, uses, stores, and protects personal data, cookies, analytics, payment, and KYC records.',
    canonicalPath: '/privacy-policy',
  },
  '/terms-of-service': {
    title: `Terms of Service | ${siteName}`,
    description:
      'Read the service terms that govern accounts, marketplace rules, payments, escrow, cancellations, refunds, disputes, and liability.',
    canonicalPath: '/terms-of-service',
  },
  '/cookie-policy': {
    title: `Cookie Policy | ${siteName}`,
    description:
      'Understand the cookies used on KarigarHai, including essential, functional, performance, analytics, and preference cookies.',
    canonicalPath: '/cookie-policy',
  },
  '/404': {
    title: `Page Not Found | ${siteName}`,
    description: 'The requested page could not be found.',
    canonicalPath: '/',
    noindex: true,
  },
};

export function getSeoData(pathname: string, route?: RouteGroup | null): SeoData {
  if (seoByPath[pathname]) return seoByPath[pathname];
  if (route) {
    return {
      title: `${route.title} | ${siteName}`,
      description: `${route.title} page on ${siteName}.`,
      canonicalPath: route.path,
    };
  }

  return {
    title: `${siteName}`,
    description:
      'KarigarHai is a premium local services marketplace with verified professionals, secure payments, and an intuitive booking flow.',
    canonicalPath: pathname || '/',
  };
}

export function getSiteUrl() {
  return siteUrl.replace(/\/$/, '');
}
