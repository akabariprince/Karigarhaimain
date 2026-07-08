import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  CheckCircle2,
  CircleCheckBig,
  Clock3,
  CreditCard,
  FileText,
  HelpCircle,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/section/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { RouteGroup } from '../data/routes';

type GenericPageProps = {
  route: RouteGroup;
};

type HeroBlock = {
  title: string;
  description: string;
  ctas?: Array<{ label: string; href: string; variant?: 'solid' | 'ghost' | 'outline' }>;
  stats?: Array<{ label: string; value: string }>;
};

const premiumCopy: Record<string, HeroBlock> = {
  '/how-it-works': {
    title: 'Simple. Transparent. Reliable.',
    description: 'A complete service flow with customer journey, provider journey, escrow, OTP, and resolution steps.',
    ctas: [{ label: 'Start Exploring', href: '/contact', variant: 'solid' }],
    stats: [{ value: '10', label: 'flows' }, { value: '1', label: 'book' }, { value: '24h', label: 'support' }],
  },
  '/services': {
    title: 'Services built for discovery.',
    description: 'Category-led structure with every service page designed to answer what is included, excluded, and how it works.',
    ctas: [{ label: 'View Services', href: '/services', variant: 'solid' }],
    stats: [{ value: '20+', label: 'categories' }, { value: '6', label: 'info blocks' }, { value: '1', label: 'system' }],
  },
  '/for-professionals': {
    title: 'For professionals who need flexibility.',
    description: 'Registration, KYC, profile building, job discovery, proposals, wallet, withdrawals, and performance tracking.',
    ctas: [{ label: 'Join Now', href: '/contact', variant: 'solid' }],
    stats: [{ value: 'KYC', label: 'verified' }, { value: 'Wallet', label: 'enabled' }, { value: 'Score', label: 'tracked' }],
  },
  '/about': {
    title: 'A product story with restraint.',
    description: 'Company story, problem statement, solution, culture, and roadmap in a clean premium presentation.',
    ctas: [{ label: 'Explore Services', href: '/services', variant: 'solid' }],
    stats: [{ value: '1', label: 'story' }, { value: '4', label: 'values' }, { value: '1', label: 'roadmap' }],
  },
  '/trust-and-safety': {
    title: 'Trust and verification built in.',
    description: 'Customer protection, provider protection, manual KYC, escrow, secure chat, fraud controls, and dispute handling.',
    ctas: [{ label: 'Read FAQ', href: '/faq', variant: 'solid' }],
    stats: [{ value: 'OTP', label: 'start' }, { value: 'KYC', label: 'verified' }, { value: 'AES', label: 'encrypted' }],
  },
  '/faq': {
    title: 'Answers for customers and providers.',
    description: 'A structured FAQ hub with grouped questions for onboarding, booking, payments, safety, and account management.',
    ctas: [{ label: 'Contact Support', href: '/contact', variant: 'solid' }],
    stats: [{ value: '50+', label: 'questions' }, { value: '8', label: 'groups' }, { value: '1', label: 'search' }],
  },
};

const premiumHighlights: Record<string, string[]> = {
  '/how-it-works': ['Customer flow', 'Provider flow', 'Escrow', 'Disputes'],
  '/services': ['Overview', 'Included', 'Excluded', 'Pricing'],
  '/for-professionals': ['Registration', 'KYC', 'Wallet', 'Withdrawals'],
  '/about': ['Story', 'Mission', 'Values', 'Roadmap'],
  '/trust-and-safety': ['Protection', 'Fraud', 'Chat', 'Emergency'],
  '/faq': ['General', 'Customer', 'Provider', 'Policy'],
};

const mediumCopy: Record<string, HeroBlock> = {
  '/pricing': {
    title: 'Pricing that stays readable.',
    description: 'Customer pricing, provider pricing, platform fees, taxes, withdrawal rules, and refund matrix.',
    ctas: [{ label: 'Contact Sales', href: '/contact', variant: 'solid' }],
    stats: [{ value: '3', label: 'plans' }, { value: '1', label: 'calculator' }, { value: '0', label: 'noise' }],
  },
  '/blog': {
    title: 'A lighter editorial layout.',
    description: 'Featured article, category filters, popular posts, latest articles, SEO content, and newsletter signup.',
    ctas: [{ label: 'Open Blog', href: '/contact', variant: 'solid' }],
    stats: [{ value: '3', label: 'cards' }, { value: '1', label: 'search' }, { value: '1', label: 'newsletter' }],
  },
};

export default function GenericPage({ route }: GenericPageProps) {
  useScrollReveal(`[data-page="${route.path}"]`);

  if (route.tier === 'premium') {
    return <PremiumPage route={route} />;
  }

  if (route.tier === 'medium') {
    return <MediumPage route={route} />;
  }

  return <SimplePage route={route} />;
}

function PremiumPage({ route }: GenericPageProps) {
  const hero = premiumCopy[route.path] ?? premiumCopy['/about'];
  const highlights = premiumHighlights[route.path] ?? ['Overview', 'Details', 'Support', 'FAQ'];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">{hero.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctas?.map((cta) => (
                <Button key={cta.label} asChild variant={cta.variant ?? 'solid'}>
                  <Link to={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              {hero.stats?.map((stat) => (
                <span key={stat.label} className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/75 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-brand-500" />
                  <strong className="font-display text-text">{stat.value}</strong>
                  {stat.label}
                </span>
              ))}
            </div>
          </div>

          <Card className="p-6" data-reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {route.sections.map((section, index) => (
                <div key={section} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-muted">0{index + 1}</p>
                  <p className="mt-3 font-display text-xl">{section}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">Detailed section block.</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading eyebrow="Highlights" title="Scroll story and interactive cards" />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Card key={item} className="p-6" data-reveal>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-500">
                {index % 2 === 0 ? <CheckCircle2 className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
              </div>
              <h3 className="mt-6 font-display text-2xl">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                A route-specific section with subtle motion and clear hierarchy.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function MediumPage({ route }: GenericPageProps) {
  const hero = mediumCopy[route.path] ?? mediumCopy['/blog'];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8" data-reveal>
        <h1 className="max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-6xl">{hero.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{hero.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {hero.ctas?.map((cta) => (
            <Button key={cta.label} asChild variant={cta.variant ?? 'solid'}>
              <Link to={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {hero.stats?.map((stat) => (
            <Card key={stat.label} className="p-5" data-reveal>
              <p className="font-display text-3xl text-text">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {route.path === '/blog' ? <BlogBody /> : null}
      {route.path === '/pricing' ? <PricingBody /> : null}
    </div>
  );
}

function SimplePage({ route }: GenericPageProps) {
  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8" data-reveal>
        <Card className="p-8 md:p-10">
          <h1 className="font-display text-4xl tracking-[-0.05em] text-balance md:text-5xl">{route.title}</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Minimal treatment with a clean entrance, simple fade-up, and fast performance.
          </p>
        </Card>
      </section>

      {route.path === '/contact' ? <ContactBody /> : <PolicyBody title={route.title} />}
    </div>
  );
}

function PricingBody() {
  const blocks = [
    ['Customer Pricing', 'Transparent booking costs and booking-stage charges.'],
    ['Provider Pricing', 'Platform fees, wallet fees, and payout rules.'],
    ['Refund Matrix', 'Cancellation charges, dispute-based refunds, and examples.'],
    ['Fee Calculator', 'A simple breakdown for taxes, platform fees, and wallets.'],
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2">
        {blocks.map(([title, text]) => (
          <Card key={title} className="p-6" data-reveal>
            <p className="font-display text-2xl">{title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BlogBody() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {['Featured', 'Latest', 'Popular'].map((label) => (
          <Card key={label} className="overflow-hidden p-0" data-reveal>
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-warm/20" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">{label}</p>
              <h2 className="mt-3 font-display text-2xl tracking-[-0.04em]">Blog article</h2>
              <p className="mt-2 text-sm leading-7 text-muted">Search, related posts, author profile, share, and newsletter.</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactBody() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <Card className="p-6 md:p-8" data-reveal>
        <p className="font-display text-2xl">Support categories</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {['Technical Support', 'Payment Support', 'KYC Support', 'Dispute Support', 'Sales', 'Partnerships', 'Media', 'Office Details'].map(
            (field) => (
              <div key={field} className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-muted">
                {field}
              </div>
            ),
          )}
        </div>
      </Card>
      <Card className="p-6 md:p-8" data-reveal>
        <p className="font-display text-2xl">Office details</p>
        <div className="mt-6 space-y-3 text-sm text-muted">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-500" />Location</div>
          <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-brand-500" />Business hours</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-500" />Social links</div>
        </div>
      </Card>
    </section>
  );
}

function PolicyBody({ title }: { title: string }) {
  const copy: Record<string, { heading: string; body: string }[]> = {
    'Privacy Policy': [
      { heading: 'Information collected', body: 'We collect only the details needed to create accounts, process bookings, and provide support.' },
      { heading: 'Personal data', body: 'This can include your name, phone number, email, address, and the profile details you choose to share.' },
      { heading: 'Identity documents', body: 'KYC may require Aadhaar, PAN, business details, bank details, and related verification records.' },
      { heading: 'Location', body: 'Location data may be used to match nearby providers, calculate distance, and support live booking flows.' },
      { heading: 'Device information', body: 'We may collect device and browser information to improve performance, detect fraud, and secure logins.' },
      { heading: 'Cookies', body: 'Essential cookies help sessions work correctly and remember preferences while you use the site.' },
      { heading: 'Analytics', body: 'Limited analytics can help us understand usage and improve the user experience.' },
      { heading: 'Communications', body: 'Support chats, emails, and notifications may be stored to help resolve issues and improve service.' },
      { heading: 'Payment information', body: 'Payment details are handled through secure providers and are processed for booking and wallet operations.' },
      { heading: 'Data usage', body: 'We use data to operate the marketplace, provide support, reduce fraud, and improve reliability.' },
      { heading: 'Marketing', body: 'Marketing messages may be sent only where permitted, and you can opt out where supported.' },
      { heading: 'Third-party services', body: 'We may use third-party services for hosting, messaging, analytics, verification, and payments.' },
      { heading: 'Security', body: 'We use access controls and technical safeguards to protect information, but no system is perfectly secure.' },
      { heading: 'Retention', body: 'Data is retained only as long as needed for business, legal, or dispute-resolution purposes.' },
      { heading: 'User rights', body: 'You may request access, correction, or deletion of certain data, subject to legal limits.' },
      { heading: 'Account deletion', body: 'Closing your account may remove access, but some records may be kept for compliance or fraud prevention.' },
      { heading: 'Children’s privacy', body: 'The service is not intended for children, and we do not knowingly collect children’s data.' },
      { heading: 'Policy updates', body: 'This policy may be updated from time to time and the current version will be shown here.' },
      { heading: 'Contact information', body: 'Questions about privacy can be sent through the contact page or support channels.' },
    ],
    'Terms of Service': [
      { heading: 'Eligibility', body: 'You must be legally able to use the service and agree to provide accurate account information.' },
      { heading: 'Accounts', body: 'You are responsible for your login credentials, account activity, and keeping your profile current.' },
      { heading: 'Marketplace role', body: 'We connect customers and providers; service outcomes remain between the parties involved in a booking.' },
      { heading: 'Customer obligations', body: 'Share complete job details, follow booking steps, and pay according to the chosen payment flow.' },
      { heading: 'Provider obligations', body: 'Keep your profile accurate, follow accepted jobs carefully, and respect customer property and safety instructions.' },
      { heading: 'KYC', body: 'We may request identity or business verification to protect the marketplace and maintain trust.' },
      { heading: 'Service rules', body: 'Use the app only for legitimate service requests and only within the scope of the booking created on the platform.' },
      { heading: 'Payments', body: 'Payments may be collected, held in escrow, or released based on booking completion and platform rules.' },
      { heading: 'Escrow', body: 'Escrow protects both parties by holding the payment until the job reaches the agreed completion point.' },
      { heading: 'Wallet', body: 'Wallet balances, credits, and withdrawals are subject to verification and operational checks.' },
      { heading: 'Cancellation', body: 'Cancellation charges may apply depending on timing, job stage, and whether work has started.' },
      { heading: 'Refunds', body: 'Refunds are reviewed based on the booking record, evidence, and applicable dispute outcome.' },
      { heading: 'Disputes', body: 'If something goes wrong, we may review chat logs, media, and booking history to help resolve the issue.' },
      { heading: 'Reviews', body: 'Reviews should be honest and relevant to the completed service experience.' },
      { heading: 'Acceptable use', body: 'Do not misuse the app, harass users, submit fake leads, or interfere with normal operations.' },
      { heading: 'Prohibited activities', body: 'Fraud, abuse, unlawful work, impersonation, and data scraping are not allowed.' },
      { heading: 'Suspension', body: 'We may suspend or limit access if a user violates these rules or creates risk to others.' },
      { heading: 'Intellectual property', body: 'Brand assets, text, and app materials remain protected and may not be reused without permission.' },
      { heading: 'Limitation of liability', body: 'Our liability is limited to the extent allowed by law, including issues caused by third-party actions.' },
      { heading: 'Indemnity', body: 'You agree to cover losses that arise from misuse of the platform or violation of these terms.' },
      { heading: 'Governing law', body: 'These terms are interpreted under the governing law applicable to the company’s operating jurisdiction.' },
      { heading: 'Arbitration', body: 'Disputes may be routed to arbitration or another formal process where required by law or contract.' },
      { heading: 'Policy changes', body: 'We may update these terms from time to time and will reflect the latest version on this page.' },
      { heading: 'Contact information', body: 'Questions about these terms can be sent through the contact page or support channels.' },
    ],
    'Cookie Policy': [
      { heading: 'Cookie overview', body: 'Cookies help the site remember sessions, preferences, and a few usability settings.' },
      { heading: 'Cookie types', body: 'We use essential, functional, preference, performance, analytics, and limited third-party cookies.' },
      { heading: 'Essential cookies', body: 'These are needed for basic authentication, navigation, and security-related actions.' },
      { heading: 'Functional cookies', body: 'Functional cookies remember settings such as language, location, or display preferences.' },
      { heading: 'Performance cookies', body: 'Performance cookies help us understand loading behavior and improve speed.' },
      { heading: 'Analytics cookies', body: 'Analytics cookies can measure usage trends and help us improve the product.' },
      { heading: 'Preference cookies', body: 'Preference cookies store choices you make so the site can remember them later.' },
      { heading: 'Third-party cookies', body: 'Some embedded services may set their own cookies when you use external providers or widgets.' },
      { heading: 'Cookie consent', body: 'If consent is required, we may present a notice or settings control before non-essential cookies are used.' },
      { heading: 'Browser controls', body: 'You can manage cookies in your browser settings, including clearing, blocking, or limiting them.' },
      { heading: 'Opt-out methods', body: 'Some analytics or marketing tools may provide their own opt-out controls where applicable.' },
      { heading: 'Policy updates', body: 'This cookie policy may be updated when services or technology change.' },
      { heading: 'Contact information', body: 'Questions about cookies can be sent through the contact page.' },
    ],
  };

  const sections = copy[title] ?? [
    { heading: 'Overview', body: 'Short policy summary.' },
    { heading: 'Contact', body: 'Contact support for questions.' },
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
      <div className="grid gap-4">
        {sections.map((section, index) => (
          <Card key={section.heading} className="p-6" data-reveal>
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-2xl">{section.heading}</p>
              <span className="text-xs uppercase tracking-[0.28em] text-muted">0{index + 1}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
