import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  Building2,
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
  Megaphone,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/section/SectionHeading';
import { WhatsAppMark } from '../components/shared/WhatsAppMark';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { RouteGroup } from '../data/routes';

type GenericPageProps = {
  route: RouteGroup;
};

type LegalSection = {
  heading: string;
  body: string;
};

const serviceCategories = [
  'Painter',
  'Plumber',
  'Electrician',
  'Carpenter',
  'Home Cleaner',
  'Gardener',
  'AC Repair',
  'Appliance Repair',
  'Mason',
  'Welder',
  'Interior Designer',
  'Pest Control',
  'Waterproofing',
  'False Ceiling',
  'Tile and Flooring',
  'Deep Cleaning',
  'Disinfection',
  'Moving Help',
  'Furniture Assembly',
  'Solar Technician',
];

const faqTopics = [
  'General',
  'Customer',
  'Provider',
  'Registration',
  'Verification',
  'Payments',
  'Escrow',
  'Wallet',
  'KYC',
  'OTP',
  'Ratings',
  'Reviews',
  'Cancellation',
  'Refunds',
  'Disputes',
  'Technical Issues',
  'Notifications',
  'Privacy',
  'Security',
];

export default function GenericPage({ route }: GenericPageProps) {
  const legal = route.path === '/privacy-policy' || route.path === '/terms-of-service' || route.path === '/cookie-policy';
  useScrollReveal(legal ? undefined : `[data-page="${route.path}"]`);

  if (route.path === '/how-it-works') return <HowItWorksPage route={route} />;
  if (route.path === '/services') return <ServicesPage route={route} />;
  if (route.path === '/for-professionals') return <ProfessionalsPage route={route} />;
  if (route.path === '/about') return <AboutPage route={route} />;
  if (route.path === '/trust-and-safety') return <TrustSafetyPage route={route} />;
  if (route.path === '/faq') return <FaqPage route={route} />;
  if (route.path === '/pricing') return <PricingPage route={route} />;
  if (route.path === '/blog') return <BlogPage route={route} />;
  if (route.path === '/contact') return <ContactPage route={route} />;
  if (route.path === '/privacy-policy') return <LegalPage title="Privacy Policy" sections={privacySections} route={route} />;
  if (route.path === '/terms-of-service') return <LegalPage title="Terms of Service" sections={termsSections} route={route} />;
  if (route.path === '/cookie-policy') return <LegalPage title="Cookie Policy" sections={cookieSections} route={route} />;

  return <FallbackPage route={route} />;
}

function HowItWorksPage({ route }: GenericPageProps) {
  const steps = [
    ['01', 'Register and verify', 'Create an account, confirm the OTP, and complete the basic profile.'],
    ['02', 'Post a job', 'Describe the work, set a budget, add photos, and choose the booking style.'],
    ['03', 'Compare applications', 'Review budgets, timelines, ratings, and nearby providers who respond.'],
    ['04', 'Start with OTP', 'The booking starts only after the provider checks in at the location.'],
    ['05', 'Track work', 'Clock in and clock out, or follow the day-based progress timeline.'],
    ['06', 'Complete and approve', 'Submit completion photos, review the outcome, and release payment.'],
  ];

  const lifecycle = [
    'Booking creation',
    'Provider matching',
    'Escrow hold',
    'OTP activation',
    'Live progress',
    'Completion approval',
    'Wallet payout',
    'Rating and review',
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-6" data-reveal>
          <p className="font-display text-xs tracking-[0.34em] text-brand-500">Complete customer flow</p>
          <h1 className="max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
            Booking, escrow, OTP, tracking, completion.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted">
            The how-it-works page now reads like a product walkthrough, with a different structure from the homepage and more emphasis on sequence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Start Booking</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/faq">See FAQs</Link>
            </Button>
          </div>
        </div>

        <Card className="p-6" data-reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {lifecycle.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">0{index + 1}</p>
                <p className="mt-3 font-display text-xl">{item}</p>
                <p className="mt-2 text-sm leading-7 text-muted">Visible state in the booking lifecycle.</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading eyebrow="Journey" title="Customer and provider flows" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map(([step, title, body]) => (
            <Card key={step} data-reveal className="p-6">
              <p className="font-display text-xs tracking-[0.32em] text-brand-500">{step}</p>
              <h3 className="mt-4 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {['Escrow', 'Notifications', 'Cancellation', 'Dispute'].map((item) => (
            <Card key={item} className="p-6" data-reveal>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-500">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">Detailed behavior, user action, and platform response.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ route }: GenericPageProps) {
  const included = [
    'Job description review',
    'Verified provider access',
    'Booking timeline',
    'Escrow support',
    'OTP-based start',
    'Photos for completion',
  ];
  const excluded = [
    'Off-platform cash deals',
    'Unverified profiles',
    'Hidden charges',
    'Work outside the booking scope',
    'Unreported cancellations',
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">20+ categories</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Built as a service directory, not a clone of the homepage.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              This page is structured like a category-led service hub with overview, inclusions, exclusions, timings, materials, safety, related services, and FAQs.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {serviceCategories.slice(0, 12).map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-bg px-3 py-4 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6" data-reveal>
            <p className="font-display text-2xl">What’s included</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-4 w-4 text-brand-500" />{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6" data-reveal>
            <p className="font-display text-2xl">What’s excluded</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3"><ShieldAlert className="mt-0.5 h-4 w-4 text-warm" />{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6" data-reveal>
            <p className="font-display text-2xl">Service details</p>
            <div className="mt-4 space-y-4 text-sm text-muted">
              <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-brand-500" />Estimated duration</div>
              <div className="flex items-center gap-3"><Wrench className="h-4 w-4 text-brand-500" />Required materials</div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-brand-500" />Safety tips</div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((item, index) => (
            <Card key={item} data-reveal className="p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl">{item}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">Related services, pricing context, and preparation notes.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProfessionalsPage({ route }: GenericPageProps) {
  const cards = [
    ['Registration', 'Sign up, verify OTP, and complete the basic profile.'],
    ['KYC', 'Upload documents, confirm identity, and wait for approval.'],
    ['Portfolio', 'Add skills, service zones, experience, and service photos.'],
    ['Job discovery', 'Nearby requests appear automatically in your feed.'],
    ['Proposals', 'Submit price, timing, and short notes to customers.'],
    ['Hiring', 'Accept the job, confirm the start, and begin the work.'],
    ['Earnings', 'See wallet balances, completed jobs, and payout summaries.'],
    ['Withdrawals', 'Request payouts to your bank account with verification.'],
    ['Badges', 'Earn trust badges and score improvements over time.'],
    ['Referral', 'Invite other professionals and track referrals.'],
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Provider journey</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Registration, KYC, job discovery, earnings, withdrawals.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              A different structure from the customer page: this one focuses on onboarding, credibility, and business performance.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Wallet', 'Live balances', WalletCards],
                ['Score', 'Performance score', Star],
                ['KYC', 'Verification status', ShieldCheck],
                ['Jobs', 'Nearby requests', Search],
              ].map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <Icon className="h-5 w-5 text-brand-500" />
                  <p className="mt-3 font-display text-xl">{title as string}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{text as string}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {cards.map(([title, text]) => (
            <Card key={title} data-reveal className="p-6">
              <p className="font-display text-2xl">{title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutPage({ route }: GenericPageProps) {
  const values = ['Mission', 'Vision', 'Values', 'Why we exist', 'Industry problems', 'Our solution', 'Team', 'Culture', 'Roadmap'];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Company story</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Why this platform exists, what problem it solves, and where it is going.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              The about page is now editorial and strategic, not just a card grid. It reads like a brand story with room for roadmap and culture.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {['Trust', 'Growth', 'Balance'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="font-display text-2xl">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">Operating principle.</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <Card key={item} data-reveal className="p-6">
              <p className="font-display text-2xl">{item}</p>
              <p className="mt-3 text-sm leading-7 text-muted">Expanded narrative section for the brand and product strategy.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function TrustSafetyPage({ route }: GenericPageProps) {
  const protection = [
    'Customer protection',
    'Provider protection',
    'Manual KYC',
    'OTP',
    'Escrow',
    'Secure chat',
    'Fraud prevention',
    'Fake profile detection',
    'Review moderation',
    'Dispute resolution',
    'Data encryption',
    'Security monitoring',
    'Compliance',
    'Emergency support',
    'Safety guidelines',
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Safety system</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Protection, moderation, verification, and emergency support.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              This page now explains the trust system in detail with its own layout, focusing on safety, privacy, and fraud controls.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Escrow', 'Fraud', 'Compliance', 'Support'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <ShieldCheck className="h-5 w-5 text-brand-500" />
                  <p className="mt-3 font-display text-xl">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">Trust module.</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {protection.map((item) => (
            <Card key={item} data-reveal className="p-5">
              <p className="font-display text-2xl">{item}</p>
              <p className="mt-3 text-sm leading-7 text-muted">How the system protects the booking lifecycle and account integrity.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqPage({ route }: GenericPageProps) {
  const sections = faqTopics.map((topic) => ({
    topic,
    questions: [
      `What should I know about ${topic.toLowerCase()}?`,
      `How does ${topic.toLowerCase()} work in the app?`,
      `What happens if ${topic.toLowerCase()} fails?`,
      `Who can I contact about ${topic.toLowerCase()}?`,
      `Where is ${topic.toLowerCase()} visible in my account?`,
    ],
  }));

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">FAQ hub</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Questions grouped by the real product flow.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              The FAQ page now has its own structure with grouped topics and many question variants instead of a short teaser.
            </p>
          </div>
          <Card className="p-6">
            <div className="flex items-center gap-3 rounded-[1.5rem] border border-line bg-bg px-4 py-3">
              <Search className="h-5 w-5 text-brand-500" />
              <span className="text-sm text-muted">Search questions</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((group) => (
            <Card key={group.topic} data-reveal className="p-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-brand-500" />
                <p className="font-display text-2xl">{group.topic}</p>
              </div>
              <div className="mt-5 space-y-3">
                {group.questions.map((question) => (
                  <details key={question} className="rounded-2xl border border-line bg-bg p-4">
                    <summary className="cursor-pointer list-none text-sm font-medium text-text">{question}</summary>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Short answer explaining the behavior, support path, or policy detail related to this topic.
                    </p>
                  </details>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function PricingPage({ route }: GenericPageProps) {
  const rows = [
    ['Customer pricing', 'Visible before booking confirmation'],
    ['Provider pricing', 'Platform fee and withdrawal rules'],
    ['Taxes', 'Shown where applicable'],
    ['Cancellation charges', 'Applied based on booking stage'],
    ['Refund matrix', 'Mapped to resolution outcomes'],
    ['Payment examples', 'Simple examples for common cases'],
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Transparent fees</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Pricing, platform fees, taxes, cancellation, and refunds.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              This page is designed like a pricing and policy reference with examples and a fee matrix.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-3">
              {rows.map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="font-display text-xl">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

function BlogPage({ route }: GenericPageProps) {
  const articles = [
    'Featured blog',
    'Latest article',
    'Popular post',
    'SEO content',
    'Author profile',
    'Share options',
  ];

  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Editorial</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Featured stories, search, newsletters, authors, and related posts.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              The blog uses its own layout with editorial cards and supporting content blocks.
            </p>
          </div>
          <Card className="p-6">
            <div className="flex items-center gap-3 rounded-[1.5rem] border border-line bg-bg px-4 py-3">
              <Search className="h-5 w-5 text-brand-500" />
              <span className="text-sm text-muted">Search the blog</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((item) => (
            <Card key={item} data-reveal className="p-6">
              <p className="font-display text-2xl">{item}</p>
              <p className="mt-3 text-sm leading-7 text-muted">Unique blog support content for discovery and engagement.</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactPage({ route }: GenericPageProps) {
  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs tracking-[0.34em] text-brand-500">Contact and support</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[-0.06em] text-balance md:text-7xl">
              Support categories, office details, and response timing.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Contact page stays simple but content-rich, with the support groups users expect for a service marketplace.
            </p>
          </div>
          <Card className="p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {['Technical', 'Payment', 'KYC', 'Dispute', 'Sales', 'Partnerships', 'Media', 'Office'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="font-display text-xl">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">Support channel.</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6" data-reveal>
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">Direct contact</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-5xl">Use the fastest path to reach the team.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              For high-priority support, use the direct contact options below. These stay visible across the site and are reused in the navbar, footer, and mobile menu.
            </p>
            <div className="mt-8 space-y-3">
              <a href="mailto:hello@karigarhai.com" className="flex items-center gap-3 rounded-[1.5rem] border border-line bg-bg px-4 py-4 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.28em] text-muted">Email</span>
                  hello@karigarhai.com
                </span>
              </a>
              <a href="tel:+919099807800" className="flex items-center gap-3 rounded-[1.5rem] border border-line bg-bg px-4 py-4 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.28em] text-muted">Phone</span>
                  +91 9099 807 800
                </span>
              </a>
              <a href="https://wa.me/919099807800" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[1.5rem] border border-line bg-bg px-4 py-4 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <WhatsAppMark className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.28em] text-muted">WhatsApp</span>
                  Support chat
                </span>
              </a>
            </div>
          </Card>

          <Card className="p-6" data-reveal>
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">Support details</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ['Response time', 'Within a few business hours for standard support requests.'],
                ['Technical support', 'App issues, login problems, and bug reports.'],
                ['Payment support', 'Escrow, wallet, refunds, and release timing.'],
                ['Business support', 'Partnerships, media, and office coordination.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="font-display text-xl">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

function LegalPage({ title, sections, route }: { title: string; sections: LegalSection[]; route: RouteGroup }) {
  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-xs tracking-[0.34em] text-brand-500">{title}</p>
          <h1 className="font-display text-4xl tracking-[-0.05em] text-balance md:text-6xl">{title}</h1>
          <p className="text-sm leading-7 text-muted">
            This document describes how the KarigarHai service works, how data is handled, and what users can expect while using the marketplace.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Developed by <span className="text-text">Astitva Technologies</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8">
        <div className="grid gap-4">
          {sections.map((section, index) => (
            <Card key={section.heading} className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-2xl">{section.heading}</p>
                <span className="text-xs uppercase tracking-[0.28em] text-muted">0{index + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function FallbackPage({ route }: GenericPageProps) {
  return (
    <div data-page={route.path} className="pt-28">
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Card className="p-8">
          <h1 className="font-display text-4xl tracking-[-0.05em] text-balance md:text-5xl">{route.title}</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            This route uses a fallback layout. Add a dedicated template if you want this page to be fully bespoke.
          </p>
        </Card>
      </section>
    </div>
  );
}

const privacySections: LegalSection[] = [
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
];

const termsSections: LegalSection[] = [
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
];

const cookieSections: LegalSection[] = [
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
];
