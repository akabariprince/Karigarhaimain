import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

const FAQS = [
  { category: 'Getting Started', items: [
    { q: 'How do I create an account?', a: 'Sign up through the app or website using your phone number. Verify with OTP and complete your profile.' },
    { q: 'Is KarigarHai free?', a: 'Yes! Posting jobs and applying is completely free. We only charge a small service fee on successful completion.' },
  ]},
  { category: 'For Malik', items: [
    { q: 'How do I hire a Karigar?', a: 'Post your job with details, budget, and location. Browse applications and hire the best match.' },
    { q: 'How does payment work?', a: 'Payment is held in secure escrow. Release it only after confirming the job is done correctly.' },
  ]},
  { category: 'For Karigar', items: [
    { q: 'How do I get verified?', a: 'Complete Aadhaar verification, add your trade skills, and upload portfolio. Takes about 24 hours.' },
    { q: 'When do I get paid?', a: 'After completing the job and receiving Malik approval, payment is released to your UPI within 24 hours.' },
  ]},
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number>(-1);

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Help Center</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Find answers to your questions. We're here to help!
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: BG, border: `1.5px solid ${BORDER}`, borderRadius: '10px', padding: '12px 16px', marginTop: '28px', maxWidth: '500px' }}>
              <Search size={18} style={{ color: MUTED }} />
              <input placeholder="Search help..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ border: 'none', background: 'transparent', fontSize: '14px', fontFamily: 'inherit', flex: 1, outline: 'none' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {FAQS.map((section, sIdx) => (
            <motion.div key={sIdx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: sIdx * 0.1 }} viewport={{ once: true }} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '28px', paddingBottom: '12px', borderBottom: `2px solid ${Y}`, display: 'inline-block' }}>{section.category}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
                {section.items.map((faq, i) => (
                  <div key={i} style={{ background: WHITE, borderRadius: '12px', border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
                    <button onClick={() => setOpenFaq(openFaq === `${sIdx}-${i}` ? -1 : `${sIdx}-${i}`)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 600, color: TEXT }}>
                      <span style={{ textAlign: 'left' }}>{faq.q}</span>
                      <ChevronDown size={20} style={{ color: Y, transform: openFaq === `${sIdx}-${i}` ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                    </button>
                    {openFaq === `${sIdx}-${i}` && (
                      <div style={{ padding: '0 20px 20px', color: MUTED, lineHeight: 1.6, borderTop: `1px solid ${BORDER}` }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section style={{ padding: '60px 32px', background: WHITE, textAlign: 'center' }}>
        <HelpCircle size={48} style={{ color: Y, margin: '0 auto 20px' }} />
        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>Still need help?</h2>
        <p style={{ color: MUTED, marginBottom: '28px' }}>Contact our support team and we'll be happy to assist.</p>
        <button style={{ padding: '12px 28px', borderRadius: '8px', background: Y, border: 'none', color: DARK, fontWeight: 700, cursor: 'pointer' }}>Contact Support</button>
      </section>

      <Footer />
    </div>
  );
}