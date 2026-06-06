import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const Y = '#F5C400';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

export default function RefundPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Refund Policy</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Our policy ensures fairness for both Malik and Karigar. Your funds are protected from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Escrow Works */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>How Escrow Protection Works</h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { step: '1', title: 'Job Posted', desc: 'Malik posts a job with budget and details. Payment is NOT collected yet.' },
                  { step: '2', title: 'Karigar Hired', desc: 'Malik selects a Karigar and hires them. Payment is held securely in escrow.' },
                  { step: '3', title: 'Work Completed', desc: 'Karigar completes the job. Malik inspects and confirms satisfaction.' },
                  { step: '4', title: 'Payment Released', desc: 'Once approved, payment is released to Karigar\'s UPI within 24 hours.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ width: '50px', height: '50px', background: Y, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '20px', color: TEXT, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                      <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Refund Scenarios */}
      <section style={{ padding: '80px 32px', background: WHITE }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Refund Scenarios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              { icon: CheckCircle2, title: 'Job Not Started', desc: 'If the Karigar doesn\'t show up, you can request a refund and hire someone else.' },
              { icon: CheckCircle2, title: 'Unsatisfactory Work', desc: 'If work doesn\'t meet agreed standards, withhold payment and resolve with our support team.' },
              { icon: CheckCircle2, title: 'Job Cancelled', desc: 'If you cancel before work starts, full refund. If after work starts, payment is negotiated fairly.' },
              { icon: AlertCircle, title: 'Disputes', desc: 'Our support team mediates disputes. We investigate and make fair decisions based on evidence.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: BG, borderRadius: '12px', border: `1px solid ${BORDER}`, padding: '28px' }}>
                  <item.icon size={40} style={{ color: Y, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section style={{ padding: '60px 32px', background: BG, textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>Have Questions About Refunds?</h2>
        <p style={{ color: MUTED, marginBottom: '28px', fontSize: '16px' }}>Contact our support team. We're here to help ensure fair outcomes for everyone.</p>
        <button style={{ padding: '12px 28px', borderRadius: '8px', background: Y, border: 'none', color: TEXT, fontWeight: 700, cursor: 'pointer' }}>Contact Support</button>
      </section>

      <Footer />
    </div>
  );
}