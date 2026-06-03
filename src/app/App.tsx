import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {
  Star, MapPin, CheckCircle2, Shield, Lock, Briefcase,
  TrendingUp, ChevronDown, ChevronLeft, ChevronRight, Smartphone, Zap,
  MessageCircle, CreditCard, Search, ArrowRight, Users,
} from 'lucide-react';

// ─── Design tokens ────────────────────────────────────────────────────────────
const Y = '#F5C400';          // golden yellow primary
const YL = '#FFFBEB';         // yellow light bg
const YD = '#C9A100';         // yellow dark (hover)
const DARK = '#0F172A';       // dark navy
const DARK2 = '#1E293B';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';
const SHADOW_SM = '0 2px 8px rgba(0,0,0,0.07)';
const SHADOW_MD = '0 4px 20px rgba(0,0,0,0.09)';
const SHADOW_LG = '0 8px 40px rgba(0,0,0,0.12)';

// ─── Scroll animation helper ───────────────────────────────────────────────────
function AOS({ children, delay = 0, animation = 'fadeUp', className = '' }: {
  children: React.ReactNode; delay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' });
  const v: Record<string, { hidden: object; visible: object }> = {
    fadeUp: { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    slideLeft: { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.93 }, visible: { opacity: 1, scale: 1 } },
  };
  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
      variants={v[animation]} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

// ─── Reusable ─────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-block', padding: '4px 14px', background: YL, border: `1px solid rgba(245,196,0,0.35)`, borderRadius: '9999px', color: '#92700A', fontSize: '12px', fontWeight: 700, marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'Google Sans Flex, sans-serif' }}>
      {children}
    </div>
  );
}

function YellowButton({ children, onClick, size = 'default', fullWidth = false }: { children: React.ReactNode; onClick?: () => void; size?: 'sm' | 'default' | 'lg'; fullWidth?: boolean }) {
  const pad = size === 'lg' ? '14px 32px' : size === 'sm' ? '7px 16px' : '10px 22px';
  const fs = size === 'lg' ? '17px' : size === 'sm' ? '13px' : '15px';
  return (
    <button onClick={onClick} style={{ padding: pad, borderRadius: '9px', border: 'none', background: Y, color: DARK, fontSize: fs, fontWeight: 700, cursor: 'pointer', boxShadow: `0 3px 12px rgba(245,196,0,0.35)`, transition: 'all 0.2s ease', width: fullWidth ? '100%' : 'auto', fontFamily: 'Google Sans Flex, sans-serif', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,196,0,0.5)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(245,196,0,0.35)'; }}>
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 22px', borderRadius: '9px', border: `1.5px solid ${BORDER}`, background: WHITE, color: TEXT, fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: 'Google Sans Flex, sans-serif', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.color = YD; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}>
      {children}
    </button>
  );
}

function StarRating({ value, count }: { value: number; count?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} style={{ fill: i <= Math.round(value) ? '#FBBF24' : '#E2E8F0', color: i <= Math.round(value) ? '#FBBF24' : '#E2E8F0' }} />
      ))}
      <span style={{ color: TEXT, fontSize: '13px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif', marginLeft: '2px' }}>{value}</span>
      {count && <span style={{ color: MUTED, fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif' }}>({count})</span>}
    </div>
  );
}

function Avatar({ initials, color, size = 48, img }: { initials: string; color: string; size?: number; img?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: img ? 'transparent' : color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', border: `2px solid rgba(255,255,255,0.9)`, boxShadow: SHADOW_SM }}>
      {img ? <img src={img} alt={initials} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.3, fontFamily: 'Google Sans Flex, sans-serif' }}>{initials}</span>}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { emoji: '⚡', label: 'Electrician', count: '2,400+' },
  { emoji: '🔧', label: 'Plumber', count: '1,800+' },
  { emoji: '🪚', label: 'Carpenter', count: '1,200+' },
  { emoji: '🎨', label: 'Painter', count: '900+' },
  { emoji: '❄️', label: 'AC Repair', count: '600+' },
  { emoji: '🏠', label: 'Mason', count: '1,500+' },
  { emoji: '🔌', label: 'Appliance', count: '800+' },
  { emoji: '🌱', label: 'Gardener', count: '400+' },
];

const WORKERS = [
  { name: 'Ramesh Kumar', trade: 'Electrician', rating: 4.9, reviews: 127, location: 'Ahmedabad', dist: '0.8 km', rate: '₹350/hr', initials: 'RK', color: '#E85D26', img: 'https://images.unsplash.com/photo-1697305592193-6a64a63a347e?w=200&h=200&fit=crop&auto=format', available: true, jobs: 186 },
  { name: 'Suresh Patel', trade: 'Plumber', rating: 4.8, reviews: 94, location: 'Surat', dist: '1.2 km', rate: '₹300/hr', initials: 'SP', color: '#0EA5E9', img: '', available: true, jobs: 143 },
  { name: 'Mohan Desai', trade: 'Carpenter', rating: 4.7, reviews: 83, location: 'Vadodara', dist: '2.1 km', rate: '₹450/hr', initials: 'MD', color: '#8B5CF6', img: 'https://images.unsplash.com/photo-1645597454479-14cb0e8bcabe?w=200&h=200&fit=crop&auto=format', available: false, jobs: 97 },
  { name: 'Priya Shah', trade: 'Painter', rating: 4.9, reviews: 156, location: 'Rajkot', dist: '1.6 km', rate: '₹280/hr', initials: 'PS', color: '#EC4899', img: '', available: true, jobs: 214 },
];

const STATS = [
  { value: '10,000+', label: 'Verified Karigar' },
  { value: '50,000+', label: 'Jobs Completed' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '200+', label: 'Cities Served' },
  { value: '₹2 Cr+', label: 'Earned by Karigar' },
];

const STEPS_MALIK = [
  { n: '01', icon: Briefcase, title: 'Post your job', desc: 'Describe what you need in 3 minutes — completely free, no account needed.' },
  { n: '02', icon: Users, title: 'Review applications', desc: 'See profiles, ratings, photos of past work, and reviews from other Malik.' },
  { n: '03', icon: MessageCircle, title: 'Chat and hire', desc: 'Discuss the job details and confirm your preferred Karigar.' },
  { n: '04', icon: CreditCard, title: 'Pay after job is done', desc: 'Payment is released from escrow only when you confirm satisfaction.' },
];

const STEPS_KARIGAR = [
  { n: '01', icon: Smartphone, title: 'Create your profile', desc: 'Sign up with Aadhaar verification and add your trade skills and portfolio.' },
  { n: '02', icon: MapPin, title: 'Find nearby jobs', desc: 'Browse jobs matching your trade within your neighborhood.' },
  { n: '03', icon: Zap, title: 'Apply with one tap', desc: 'Send your proposal instantly — no long forms, no calls needed.' },
  { n: '04', icon: TrendingUp, title: 'Get paid on time', desc: 'Complete the work, get rated, receive payment directly to your UPI.' },
];

const TESTIMONIALS = [
  { rating: 5, quote: 'Found a plumber in 20 minutes when my bathroom flooded. The Karigar was verified, professional, and charged a fair rate. KarigarHai saved my day!', name: 'Priya S.', role: 'Homeowner', location: 'Ahmedabad', jobType: 'Plumbing', initials: 'PS', color: '#E85D26' },
  { rating: 5, quote: 'I get steady work every week now. The app shows me jobs near my home, I apply with one tap, and payment always comes on time. This changed my life.', name: 'Ramesh Patel', role: 'Electrician', location: 'Surat', jobType: 'Karigar Story', initials: 'RP', color: '#16A34A' },
  { rating: 5, quote: 'Hired a carpenter for custom furniture. Saw his previous work photos, read reviews, and knew exactly what to expect. Work was perfect.', name: 'Amit Mehta', role: 'Business Owner', location: 'Vadodara', jobType: 'Carpentry', initials: 'AM', color: '#8B5CF6' },
];

const FAQS = [
  { q: 'Is KarigarHai free to use?', a: 'Yes! Posting jobs is completely free for Malik. Karigar can apply to jobs for free. We only charge a small service fee on successful job completion.' },
  { q: 'How does payment work?', a: 'Payment is held in secure escrow when you hire. Once the job is done and you confirm satisfaction, the payment is released to the Karigar. You never pay upfront.' },
  { q: 'Are Karigar verified?', a: 'Every Karigar goes through our Pakka Karigar verification with Aadhaar. We verify identity, phone number, and trade skills before they can accept jobs.' },
  { q: 'What cities are available?', a: 'We currently operate in 200+ cities across Gujarat including Ahmedabad, Surat, Vadodara, Rajkot, and expanding rapidly across India.' },
  { q: 'How do I post a job?', a: 'Download the app or visit our website, describe your job, set your budget, and post. Karigar near you will start applying within minutes.' },
  { q: 'What if I have a problem with the job?', a: 'Contact our support team immediately. We mediate disputes, can withhold payment if standards are not met, and remove bad actors from the platform.' },
];

const NEAR_WORKERS = [
  { name: 'Ramesh K.', trade: 'Electrician', dist: '0.8 km', rating: 4.9, initials: 'RK', color: '#E85D26', available: true, x: '18%', y: '35%' },
  { name: 'Suresh P.', trade: 'Plumber', dist: '1.2 km', rating: 4.8, initials: 'SP', color: '#0EA5E9', available: true, x: '55%', y: '22%' },
  { name: 'Mohan D.', trade: 'Carpenter', dist: '2.1 km', rating: 4.7, initials: 'MD', color: '#8B5CF6', available: false, x: '72%', y: '58%' },
  { name: 'Kiran M.', trade: 'Painter', dist: '2.6 km', rating: 4.8, initials: 'KM', color: '#EC4899', available: true, x: '32%', y: '65%' },
  { name: 'Ajay B.', trade: 'Mason', dist: '3.0 km', rating: 4.6, initials: 'AB', color: '#F59E0B', available: true, x: '82%', y: '30%' },
];

const PRICING = [
  { name: 'Free', price: '₹0', desc: 'For Malik getting started', features: ['Post up to 3 jobs/month', 'Browse Karigar profiles', 'Basic chat', 'Escrow payment protection'], cta: 'Get started', featured: false },
  { name: 'Karigar+', price: '₹199', period: '/month', desc: 'Best for regular hirers', features: ['Unlimited job posts', 'Priority Karigar matching', 'Advanced filters & search', 'Dedicated support', 'Verified badge on all hires'], cta: 'Start free trial', featured: true },
  { name: 'Business', price: '₹799', period: '/month', desc: 'For businesses & contractors', features: ['Everything in Karigar+', 'Team accounts (5 users)', 'Bulk job posting', 'API access', 'Custom SLA & invoicing'], cta: 'Contact sales', featured: false },
];

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<'malik' | 'karigar'>('malik');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [selectedTrade, setSelectedTrade] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % 3), 4500);
    return () => clearInterval(timer);
  }, []);

  const visibleT = [TESTIMONIALS[activeTestimonial], TESTIMONIALS[(activeTestimonial + 1) % 3]];

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 0 56px', borderBottom: `1px solid ${BORDER}`, overflow: 'hidden', position: 'relative' }}>
        {/* Subtle bg circle decoration */}
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '500px', height: '500px', background: YL, borderRadius: '50%', opacity: 0.6, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: YL, border: `1px solid rgba(245,196,0,0.4)`, borderRadius: '9999px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '13px' }}>🇮🇳</span>
                  <span style={{ color: '#92700A', fontSize: '12px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif', letterSpacing: '0.04em' }}>INDIA'S #1 SKILLED WORKER PLATFORM</span>
                </div>

                <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '20px', fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
                  Find Skilled{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Karigar
                    <span style={{ position: 'absolute', bottom: '2px', left: 0, right: 0, height: '6px', background: Y, borderRadius: '3px', opacity: 0.7 }} />
                  </span>
                  <br />Near You
                </h1>

                <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.65, marginBottom: '32px', maxWidth: '460px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                  Plumbers, electricians, carpenters and 20+ trades. Verified. Rated. Local. Available within minutes.
                </p>

                {/* Search bar */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: BG, border: `1.5px solid ${BORDER}`, borderRadius: '10px', padding: '10px 16px', flex: 1, minWidth: '160px', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.currentTarget.style.borderColor = Y)} onBlur={e => (e.currentTarget.style.borderColor = BORDER)}>
                    <Search size={16} style={{ color: MUTED, flexShrink: 0 }} />
                    <input placeholder="What do you need? (e.g. Electrician)" style={{ border: 'none', background: 'transparent', fontSize: '14px', fontFamily: 'Google Sans Flex, sans-serif', color: TEXT, outline: 'none', width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: BG, border: `1.5px solid ${BORDER}`, borderRadius: '10px', padding: '10px 16px', minWidth: '140px' }}>
                    <MapPin size={16} style={{ color: MUTED, flexShrink: 0 }} />
                    <input placeholder="Your location" style={{ border: 'none', background: 'transparent', fontSize: '14px', fontFamily: 'Google Sans Flex, sans-serif', color: TEXT, outline: 'none', width: '100%' }} />
                  </div>
                  <YellowButton><Search size={16} /> Search</YellowButton>
                </div>

                {/* Quick filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                  {['⚡ Electrician', '🔧 Plumber', '🪚 Carpenter', '🎨 Painter', '❄️ AC Repair'].map(tag => (
                    <button key={tag} style={{ padding: '5px 14px', borderRadius: '9999px', border: `1px solid ${BORDER}`, background: WHITE, color: MUTED, fontSize: '13px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif' }}
                      onMouseEnter={e => { e.currentTarget.style.background = YL; e.currentTarget.style.borderColor = 'rgba(245,196,0,0.4)'; e.currentTarget.style.color = '#92700A'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}>
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Trust row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                  {[{ icon: Shield, text: 'Aadhaar verified' }, { icon: Lock, text: 'Secure escrow' }, { icon: Star, text: '4.8★ avg rating' }].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: MUTED, fontSize: '13px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                      <Icon size={14} style={{ color: '#16A34A' }} />
                      {text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — featured worker card */}
            <motion.div className="lg:col-span-2 hidden lg:flex justify-end" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ position: 'relative' }}>
              {/* Main profile card */}
              <div style={{ background: WHITE, borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', padding: '24px', width: '260px', position: 'relative' }}>
                {/* Available badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', background: 'rgba(22,163,74,0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#16A34A', borderRadius: '50%' }} />
                  <span style={{ color: '#16A34A', fontSize: '11px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>AVAILABLE NOW</span>
                </div>

                {/* Avatar */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid white', boxShadow: SHADOW_SM }}>
                    <img src="https://images.unsplash.com/photo-1697305592193-6a64a63a347e?w=200&h=200&fit=crop&auto=format" alt="Ramesh Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>Ramesh Kumar</div>
                    <div style={{ color: MUTED, fontSize: '13px', fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '4px' }}>Electrician · Aadhaar ✓</div>
                    <StarRating value={4.9} count={127} />
                  </div>
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: '0', marginBottom: '16px', background: BG, borderRadius: '10px', overflow: 'hidden' }}>
                  {[['186', 'Jobs Done'], ['127', 'Reviews'], ['₹350', 'Per Hour']].map(([v, l], i) => (
                    <div key={l} style={{ flex: 1, textAlign: 'center', padding: '10px 6px', borderRight: i < 2 ? `1px solid ${BORDER}` : 'none' }}>
                      <div style={{ fontWeight: 700, fontSize: '15px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>{v}</div>
                      <div style={{ color: MUTED, fontSize: '10px', fontFamily: 'Google Sans Flex, sans-serif' }}>{l}</div>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '16px', color: MUTED, fontSize: '13px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                  <MapPin size={13} style={{ color: Y }} />
                  Ahmedabad, Gujarat · 0.8 km away
                </div>

                <YellowButton fullWidth><span>Hire Now</span> <ArrowRight size={15} /></YellowButton>
              </div>

              {/* Floating badge 1 */}
              <div className="card-float-1" style={{ position: 'absolute', top: '-16px', right: '20px', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '8px 12px', boxShadow: SHADOW_MD, display: 'flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap' }}>
                <div style={{ width: '24px', height: '24px', background: 'rgba(22,163,74,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={13} style={{ color: '#16A34A' }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>Job Completed</span>
              </div>

              {/* Floating badge 2 */}
              <div className="card-float-3" style={{ position: 'absolute', bottom: '-12px', left: '-16px', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '8px 12px', boxShadow: SHADOW_MD, display: 'flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap' }}>
                <Star size={14} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>4.9 — Just reviewed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: '0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {STATS.map((s, i) => (
              <AOS key={i} delay={i * 0.07} animation="fadeUp">
                <div style={{ textAlign: 'center', padding: '24px 16px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none' }} className={i < 4 ? 'md:border-r' : ''}>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: Y, lineHeight: 1.2, fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR CATEGORIES ────────────────────────────────────────────── */}
      <section id="categories" style={{ padding: '80px 0', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <SectionLabel>Browse Trades</SectionLabel>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif' }}>Popular Categories</h2>
              </div>
              <button style={{ color: Y, fontSize: '14px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                View all trades <ArrowRight size={14} />
              </button>
            </div>
          </AOS>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map((cat, i) => (
              <AOS key={i} delay={i * 0.06} animation="scaleIn">
                <div
                  style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '16px', padding: '20px 12px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.boxShadow = `0 4px 20px rgba(245,196,0,0.18)`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: '48px', height: '48px', background: YL, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '22px' }}>{cat.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: TEXT, marginBottom: '3px', fontFamily: 'Google Sans Flex, sans-serif' }}>{cat.label}</div>
                  <div style={{ color: MUTED, fontSize: '11px', fontFamily: 'Google Sans Flex, sans-serif' }}>{cat.count}</div>
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED KARIGAR ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <SectionLabel>Top Rated</SectionLabel>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif' }}>Featured Karigar</h2>
              </div>
              <button style={{ color: Y, fontSize: '14px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                View all Karigar <ArrowRight size={14} />
              </button>
            </div>
          </AOS>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKERS.map((w, i) => (
              <AOS key={i} delay={i * 0.1} animation="scaleIn">
                <div
                  style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '18px', padding: '24px', transition: 'all 0.25s ease', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = SHADOW_LG; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(245,196,0,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BORDER; }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <Avatar initials={w.initials} color={w.color} size={60} img={w.img} />
                    <div style={{ padding: '4px 10px', borderRadius: '9999px', background: w.available ? 'rgba(22,163,74,0.1)' : 'rgba(100,116,139,0.1)', color: w.available ? '#16A34A' : MUTED, fontSize: '11px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>
                      {w.available ? '● Available' : '○ Busy'}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: TEXT, marginBottom: '2px', fontFamily: 'Google Sans Flex, sans-serif' }}>{w.name}</div>
                    <div style={{ color: MUTED, fontSize: '13px', marginBottom: '10px', fontFamily: 'Google Sans Flex, sans-serif' }}>{w.trade}</div>
                    <StarRating value={w.rating} count={w.reviews} />

                    <div style={{ margin: '14px 0', height: '1px', background: BORDER }} />

                    <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: MUTED, fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                        <MapPin size={12} style={{ color: Y }} /> {w.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: MUTED, fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                        <Briefcase size={12} style={{ color: Y }} /> {w.jobs} jobs
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontWeight: 800, fontSize: '17px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>{w.rate}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: MUTED, fontSize: '11px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                        <CheckCircle2 size={12} style={{ color: '#16A34A' }} /> Aadhaar verified
                      </div>
                    </div>
                  </div>

                  <YellowButton fullWidth>Hire Now <ArrowRight size={14} /></YellowButton>
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" style={{ padding: '80px 0', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <SectionLabel>Simple Process</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '8px' }}>How KarigarHai Works</h2>
              <p style={{ color: MUTED, fontSize: '16px', fontFamily: 'Google Sans Flex, sans-serif' }}>Simple for both Malik and Karigar</p>
            </div>
          </AOS>

          {/* Tab toggle */}
          <AOS animation="scaleIn" delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'inline-flex', background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '12px', padding: '4px', gap: '4px' }}>
                {(['malik', 'karigar'] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    style={{ padding: '9px 28px', borderRadius: '9px', border: 'none', background: activeTab === tab ? Y : 'transparent', color: activeTab === tab ? DARK : MUTED, fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.25s ease', boxShadow: activeTab === tab ? '0 3px 10px rgba(245,196,0,0.3)' : 'none', fontFamily: 'Google Sans Flex, sans-serif' }}>
                    {tab === 'malik' ? "I'm a Malik (Hirer)" : "I'm a Karigar (Worker)"}
                  </button>
                ))}
              </div>
            </div>
          </AOS>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'malik' ? STEPS_MALIK : STEPS_KARIGAR).map((step, i) => (
              <AOS key={`${activeTab}-${i}`} delay={i * 0.09} animation="scaleIn">
                <div style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '16px', padding: '28px 22px', position: 'relative', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.boxShadow = `0 6px 24px rgba(245,196,0,0.14)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none'; }}>
                  {/* Step number */}
                  <div style={{ position: 'absolute', top: '18px', right: '18px', fontWeight: 800, fontSize: '32px', color: YL, lineHeight: 1, fontFamily: 'Google Sans Flex, sans-serif', pointerEvents: 'none' }}>{step.n}</div>
                  {/* Icon */}
                  <div style={{ width: '52px', height: '52px', background: YL, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <step.icon size={24} style={{ color: '#92700A' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '17px', color: TEXT, marginBottom: '8px', fontFamily: 'Google Sans Flex, sans-serif' }}>{step.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6, fontFamily: 'Google Sans Flex, sans-serif' }}>{step.desc}</p>
                </div>
              </AOS>
            ))}
          </div>

          <AOS delay={0.4} animation="fadeUp">
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <YellowButton size="lg">Get started — it's free <ArrowRight size={16} /></YellowButton>
            </div>
          </AOS>
        </div>
      </section>

      {/* ── KARIGAR NEAR YOU ─────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ marginBottom: '40px' }}>
              <SectionLabel>Hyperlocal</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '8px' }}>Karigar Near You</h2>
              <p style={{ color: MUTED, fontSize: '16px', fontFamily: 'Google Sans Flex, sans-serif' }}>Skilled workers available in your neighborhood right now</p>
            </div>
          </AOS>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Map visual */}
            <AOS animation="slideLeft">
              <div style={{ background: '#EEF2FF', borderRadius: '20px', height: '380px', position: 'relative', overflow: 'hidden', border: `1.5px solid ${BORDER}` }}>
                {/* Grid lines */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
                {/* Roads */}
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.8)' }} />
                <div style={{ position: 'absolute', left: '35%', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.8)' }} />
                <div style={{ position: 'absolute', left: '70%', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.8)' }} />
                {/* "You are here" */}
                <div style={{ position: 'absolute', top: '46%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                  <div style={{ width: '36px', height: '36px', background: DARK, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid white', boxShadow: SHADOW_MD }}>
                    <MapPin size={16} style={{ color: Y }} />
                  </div>
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: DARK, color: 'white', fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap', marginTop: '4px', fontFamily: 'Google Sans Flex, sans-serif' }}>You</div>
                </div>
                {/* Worker pins */}
                {NEAR_WORKERS.map((w, i) => (
                  <div key={i} style={{ position: 'absolute', top: w.y, left: w.x, transform: 'translate(-50%, -50%)' }}>
                    <div style={{ width: '40px', height: '40px', background: w.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid white`, boxShadow: SHADOW_MD, cursor: 'pointer', opacity: w.available ? 1 : 0.55, transition: 'transform 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>{w.initials}</span>
                    </div>
                    <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: WHITE, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '2px 7px', whiteSpace: 'nowrap', marginTop: '4px', fontSize: '9px', fontWeight: 600, color: TEXT, fontFamily: 'Google Sans Flex, sans-serif', boxShadow: SHADOW_SM }}>
                      {w.trade}
                    </div>
                  </div>
                ))}
                {/* Range circle */}
                <div style={{ position: 'absolute', top: '50%', left: '35%', transform: 'translate(-50%, -50%)', width: '180px', height: '180px', border: `2px dashed rgba(245,196,0,0.4)`, borderRadius: '50%', pointerEvents: 'none' }} />
                {/* Legend */}
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '8px 12px', fontSize: '11px', fontFamily: 'Google Sans Flex, sans-serif', color: MUTED }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}><div style={{ width: '8px', height: '8px', background: '#16A34A', borderRadius: '50%' }} /> Available</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', background: MUTED, borderRadius: '50%' }} /> Busy</div>
                </div>
              </div>
            </AOS>

            {/* Worker list */}
            <AOS animation="slideRight">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NEAR_WORKERS.map((w, i) => (
                  <div key={i} style={{ background: BG, border: `1.5px solid ${BORDER}`, borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px', transition: 'all 0.2s ease', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.background = YL; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = BG; }}>
                    <Avatar initials={w.initials} color={w.color} size={44} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: TEXT, marginBottom: '2px', fontFamily: 'Google Sans Flex, sans-serif' }}>{w.name}</div>
                      <div style={{ color: MUTED, fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif' }}>{w.trade}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end', marginBottom: '2px' }}>
                        <Star size={11} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                        <span style={{ fontWeight: 700, fontSize: '12px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>{w.rating}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: MUTED, fontSize: '11px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                        <MapPin size={10} style={{ color: Y }} /> {w.dist}
                      </div>
                    </div>
                    <div style={{ padding: '4px 10px', background: w.available ? 'rgba(22,163,74,0.1)' : 'rgba(100,116,139,0.1)', borderRadius: '9999px', color: w.available ? '#16A34A' : MUTED, fontSize: '11px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif', flexShrink: 0 }}>
                      {w.available ? 'Free' : 'Busy'}
                    </div>
                  </div>
                ))}
                <YellowButton size="lg" fullWidth>See all Karigar near you <ArrowRight size={16} /></YellowButton>
              </div>
            </AOS>
          </div>
        </div>
      </section>

      {/* ── TRUST & WHY US ───────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Why KarigarHai</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif' }}>Built on Trust</h2>
            </div>
          </AOS>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Pakka Karigar Verified', desc: 'Every Karigar verified with Aadhaar. Real identity, real skills, real reviews — before they can accept their first job.', badge: 'Identity Verified', badgeColor: '#16A34A' },
              { icon: Lock, title: 'Safe Escrow Payment', desc: 'Your money is held securely in escrow and released to the Karigar only after you confirm the job is done correctly.', badge: 'Zero Risk', badgeColor: '#0EA5E9' },
              { icon: Star, title: 'Honest Review System', desc: 'Both Malik and Karigar rate each other after every job. Fake reviews are detected and removed automatically.', badge: '4.8★ Average', badgeColor: '#F59E0B' },
            ].map(({ icon: Icon, title, desc, badge, badgeColor }, i) => (
              <AOS key={i} delay={i * 0.12} animation="scaleIn">
                <div style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '18px', padding: '32px 26px', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = SHADOW_LG; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = Y; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = BORDER; }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '56px', height: '56px', background: YL, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={26} style={{ color: '#92700A' }} />
                    </div>
                    <div style={{ padding: '4px 10px', background: `${badgeColor}15`, border: `1px solid ${badgeColor}30`, borderRadius: '9999px', color: badgeColor, fontSize: '11px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>{badge}</div>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '18px', color: TEXT, marginBottom: '10px', fontFamily: 'Google Sans Flex, sans-serif' }}>{title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.65, fontFamily: 'Google Sans Flex, sans-serif' }}>{desc}</p>
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Reviews</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '8px' }}>What People Are Saying</h2>
              <p style={{ color: MUTED, fontSize: '16px', fontFamily: 'Google Sans Flex, sans-serif' }}>Real reviews from real users across India</p>
            </div>
          </AOS>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{ marginBottom: '28px' }}>
            {visibleT.map((t, i) => (
              <AOS key={`${activeTestimonial}-${i}`} delay={i * 0.08} animation="scaleIn">
                <div style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: '18px', padding: '28px', boxShadow: SHADOW_SM, transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = SHADOW_LG; e.currentTarget.style.borderColor = Y; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = SHADOW_SM; e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} style={{ fill: '#FBBF24', color: '#FBBF24' }} />)}
                  </div>
                  <p style={{ color: DARK2, fontSize: '15px', lineHeight: 1.65, marginBottom: '20px', fontFamily: 'Google Sans Flex, sans-serif' }}>"{t.quote}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar initials={t.initials} color={t.color} size={42} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>{t.name}</div>
                      <div style={{ color: MUTED, fontSize: '12px', fontFamily: 'Google Sans Flex, sans-serif' }}>{t.role} · {t.location}</div>
                    </div>
                    <div style={{ padding: '4px 10px', background: YL, border: `1px solid rgba(245,196,0,0.35)`, borderRadius: '9999px', color: '#92700A', fontSize: '11px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>{t.jobType}</div>
                  </div>
                </div>
              </AOS>
            ))}
          </div>

          {/* Dots + arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => setActiveTestimonial(p => (p - 1 + 3) % 3)}
              style={{ width: '34px', height: '34px', borderRadius: '50%', border: `1.5px solid ${BORDER}`, background: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = Y; e.currentTarget.style.borderColor = Y; }}
              onMouseLeave={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.borderColor = BORDER; }}>
              <ChevronLeft size={16} style={{ color: MUTED }} />
            </button>
            <div style={{ display: 'flex', gap: '7px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  style={{ width: activeTestimonial === i ? '22px' : '7px', height: '7px', borderRadius: '9999px', border: 'none', background: activeTestimonial === i ? Y : '#D1D5DB', cursor: 'pointer', transition: 'all 0.3s ease' }} />
              ))}
            </div>
            <button onClick={() => setActiveTestimonial(p => (p + 1) % 3)}
              style={{ width: '34px', height: '34px', borderRadius: '50%', border: `1.5px solid ${BORDER}`, background: WHITE, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = Y; e.currentTarget.style.borderColor = Y; }}
              onMouseLeave={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.borderColor = BORDER; }}>
              <ChevronRight size={16} style={{ color: MUTED }} />
            </button>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: '80px 0', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Pricing</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif', marginBottom: '8px' }}>Simple, Transparent Pricing</h2>
              <p style={{ color: MUTED, fontSize: '16px', fontFamily: 'Google Sans Flex, sans-serif' }}>No hidden fees. Cancel anytime.</p>
            </div>
          </AOS>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRICING.map((plan, i) => (
              <AOS key={i} delay={i * 0.1} animation="scaleIn">
                <div style={{ background: plan.featured ? DARK : WHITE, border: plan.featured ? `2px solid ${Y}` : `1.5px solid ${BORDER}`, borderRadius: '20px', padding: '32px 26px', position: 'relative', transition: 'all 0.25s ease', transform: plan.featured ? 'scale(1.04)' : 'scale(1)', boxShadow: plan.featured ? `0 8px 40px rgba(245,196,0,0.2)` : SHADOW_SM }}>
                  {plan.featured && (
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: Y, color: DARK, fontSize: '11px', fontWeight: 800, padding: '4px 14px', borderRadius: '9999px', whiteSpace: 'nowrap', fontFamily: 'Google Sans Flex, sans-serif' }}>MOST POPULAR</div>
                  )}
                  <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: plan.featured ? 'rgba(255,255,255,0.6)' : MUTED, fontFamily: 'Google Sans Flex, sans-serif' }}>{plan.name}</div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '36px', fontWeight: 800, color: plan.featured ? WHITE : TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>{plan.price}</span>
                    {plan.period && <span style={{ color: plan.featured ? 'rgba(255,255,255,0.5)' : MUTED, fontSize: '14px', fontFamily: 'Google Sans Flex, sans-serif' }}>{plan.period}</span>}
                  </div>
                  <div style={{ color: plan.featured ? 'rgba(255,255,255,0.55)' : MUTED, fontSize: '13px', marginBottom: '24px', fontFamily: 'Google Sans Flex, sans-serif' }}>{plan.desc}</div>
                  <div style={{ height: '1px', background: plan.featured ? 'rgba(255,255,255,0.1)' : BORDER, marginBottom: '20px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: plan.featured ? 'rgba(255,255,255,0.8)' : DARK2, fontSize: '13px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                        <CheckCircle2 size={14} style={{ color: plan.featured ? Y : '#16A34A', flexShrink: 0 }} /> {f}
                      </div>
                    ))}
                  </div>
                  {plan.featured ? (
                    <YellowButton fullWidth>{plan.cta}</YellowButton>
                  ) : (
                    <button style={{ width: '100%', padding: '11px', borderRadius: '9px', border: `1.5px solid ${BORDER}`, background: 'transparent', color: TEXT, fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.background = YL; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'transparent'; }}>
                      {plan.cta}
                    </button>
                  )}
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: Y, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.12)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '250px', height: '250px', background: 'rgba(0,0,0,0.06)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AOS animation="slideLeft">
              <div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: DARK, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '16px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                  Ready to get<br />work done?
                </h2>
                <p style={{ color: 'rgba(15,23,42,0.7)', fontSize: '17px', lineHeight: 1.6, marginBottom: '32px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                  Download KarigarHai today. Hire a verified Karigar or find steady work near your home — all for free.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
                  <button style={{ padding: '12px 28px', borderRadius: '10px', border: 'none', background: DARK, color: 'white', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)'; }}>
                    <Smartphone size={18} /> Download App
                  </button>
                  <button style={{ padding: '12px 28px', borderRadius: '10px', border: `2px solid rgba(15,23,42,0.3)`, background: 'transparent', color: DARK, fontSize: '15px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = DARK; e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(15,23,42,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
                    Post a Job — Free
                  </button>
                </div>
                {/* Social proof */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex' }}>
                    {['RK', 'SP', 'MD', 'PS'].map((init, i) => (
                      <div key={init} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: i > 0 ? '-10px' : 0, background: ['#E85D26', '#0EA5E9', '#8B5CF6', '#EC4899'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 - i, position: 'relative' }}>
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>{init}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ color: 'rgba(15,23,42,0.7)', fontSize: '13px', fontFamily: 'Google Sans Flex, sans-serif' }}>
                    <span style={{ fontWeight: 700, color: DARK }}>10,000+</span> Karigar waiting for work near you
                  </div>
                </div>
              </div>
            </AOS>

            <AOS animation="slideRight">
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Store badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '52px', cursor: 'pointer', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))', transition: 'transform 0.2s' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '52px', cursor: 'pointer', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))', transition: 'transform 0.2s' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')} />
                </div>
                {/* QR card */}
                <div style={{ background: WHITE, borderRadius: '16px', padding: '18px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '96px', height: '96px', background: BG, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${BORDER}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '3px' }}>
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} style={{ width: '12px', height: '12px', background: [0,1,2,3,4,5,6,12,18,19,20,21,22,23,24,7,10,14,17].includes(i) ? DARK : BG, borderRadius: '2px' }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '12px', color: TEXT, fontFamily: 'Google Sans Flex, sans-serif' }}>Scan to download</div>
                    <div style={{ color: MUTED, fontSize: '11px', fontFamily: 'Google Sans Flex, sans-serif' }}>50,000+ downloads</div>
                  </div>
                </div>
              </div>
            </AOS>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: WHITE }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px' }}>
          <AOS animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>FAQ</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: TEXT, letterSpacing: '-0.02em', fontFamily: 'Google Sans Flex, sans-serif' }}>Frequently Asked Questions</h2>
            </div>
          </AOS>
          <div>
            {FAQS.map((faq, i) => (
              <AOS key={i} delay={i * 0.04} animation="fadeUp">
                <div style={{ borderBottom: `1px solid ${BORDER}`, borderLeft: openFaq === i ? `3px solid ${Y}` : '3px solid transparent', transition: 'border-left 0.25s ease' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 16px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ color: openFaq === i ? '#92700A' : TEXT, fontSize: '16px', fontWeight: openFaq === i ? 700 : 600, fontFamily: 'Google Sans Flex, sans-serif', paddingRight: '16px', flex: 1, transition: 'color 0.2s' }}>{faq.q}</span>
                    <ChevronDown size={18} style={{ color: openFaq === i ? Y : MUTED, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease, color 0.2s', flexShrink: 0 }} />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.3s ease', opacity: openFaq === i ? 1 : 0 }}>
                    <p style={{ padding: '0 16px 20px', color: MUTED, fontSize: '15px', lineHeight: 1.65, fontFamily: 'Google Sans Flex, sans-serif' }}>{faq.a}</p>
                  </div>
                </div>
              </AOS>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
