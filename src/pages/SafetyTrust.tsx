import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Shield, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

export default function SafetyTrust() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Safety & Trust</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Your safety and security are our top priority. Learn how we protect both Malik and Karigar on KarigarHai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>How We Keep You Safe</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { icon: Shield, title: 'Aadhaar Verification', desc: 'Every Karigar is verified with government-issued Aadhaar ID. We verify identity, phone, and trade skills before they can accept jobs.' },
              { icon: Lock, title: 'Secure Escrow Payments', desc: 'Your money is held securely in escrow. Released only after you confirm the job is completed correctly.' },
              { icon: CheckCircle2, title: 'Verified Reviews', desc: 'Both Malik and Karigar rate each other after every job. Fake reviews are detected and removed automatically.' },
              { icon: AlertCircle, title: 'Quick Support', desc: 'Having issues? Our support team mediates disputes and removes bad actors from the platform immediately.' },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '32px' }}>
                  <feature.icon size={40} style={{ color: Y, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{feature.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section style={{ padding: '80px 32px', background: WHITE }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Safety Tips for Both Malik & Karigar</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Before Hiring', tips: ['Verify the Karigar profile and reviews', 'Discuss job details and budget clearly', 'Check portfolio and past work photos', 'Confirm availability and timeline'] },
              { title: 'During the Job', tips: ['Stay in touch via our chat system', 'Never make cash payments outside the platform', 'Document work progress with photos', 'Raise concerns immediately if issues arise'] },
              { title: 'After the Job', tips: ['Inspect work thoroughly before approving', 'Write honest reviews based on experience', 'Report any safety concerns to support', 'Keep payment in escrow until satisfied'] },
            ].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: BG, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '32px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{section.title}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {section.tips.map((tip, j) => (
                      <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={20} style={{ color: Y, flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: MUTED, fontSize: '14px' }}>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}