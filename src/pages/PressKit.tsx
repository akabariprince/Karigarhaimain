import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Download, Mail, Phone } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

const PRESS_ASSETS = [
  { name: 'Logo Files (PNG, SVG)', desc: 'High-resolution logo files in various formats' },
  { name: 'Brand Guidelines', desc: 'Complete brand guidelines and color specifications' },
  { name: 'Company Photos', desc: 'High-quality photos of our team and platform' },
  { name: 'Product Screenshots', desc: 'App screenshots and UI mockups' },
];

export default function PressKit() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Press Kit</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Everything you need to write about KarigarHai. Download our logo, brand assets, and company information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '40px' }}>About KarigarHai</h2>
          <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '40px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: MUTED, marginBottom: '20px' }}>
              KarigarHai is India's most trusted platform connecting skilled workers (Karigar) with customers (Malik) who need their services. We verify every worker with Aadhaar, ensure secure payments through escrow, and maintain honest reviews from both parties.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: MUTED }}>
              Our mission is to empower skilled workers with steady work, fair pay, and dignity. We operate across 200+ cities with 10,000+ verified Karigar completing 50,000+ jobs monthly.
            </p>
          </div>
        </div>
      </section>

      {/* Press Assets */}
      <section style={{ padding: '80px 32px', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '60px' }}>Download Assets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {PRESS_ASSETS.map((asset, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: BG, borderRadius: '12px', border: `1px solid ${BORDER}`, padding: '28px', textAlign: 'center' }}>
                  <Download size={40} style={{ color: Y, margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{asset.name}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', marginBottom: '20px' }}>{asset.desc}</p>
                  <button style={{ width: '100%', padding: '10px', borderRadius: '8px', background: Y, border: 'none', color: DARK, fontWeight: 700, cursor: 'pointer' }}>Download</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '40px' }}>Press Inquiries</h2>
          <p style={{ color: MUTED, fontSize: '16px', marginBottom: '40px', lineHeight: 1.6 }}>
            Have questions or need more information? Get in touch with our press team.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <Mail size={20} style={{ color: Y }} />
              <a href="mailto:press@karigarhaimain.com" style={{ fontSize: '16px', color: Y, textDecoration: 'none', fontWeight: 600 }}>press@karigarhaimain.com</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <Phone size={20} style={{ color: Y }} />
              <span style={{ fontSize: '16px', color: TEXT, fontWeight: 600 }}>+91 XXXX XXXX XX</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}