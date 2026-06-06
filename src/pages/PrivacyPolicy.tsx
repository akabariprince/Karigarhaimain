import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';

const Y = '#F5C400';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

export default function PrivacyPolicy() {
  const sections = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly (name, phone, email, Aadhaar for verification) and information about your use of our platform (job history, ratings, messages, location data).' },
    { title: '2. How We Use Your Information', content: 'We use your information to verify your identity, facilitate job connections, process payments, improve our services, and communicate with you about your account and jobs.' },
    { title: '3. Data Security', content: 'We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.' },
    { title: '4. Your Privacy Rights', content: 'You have the right to access, update, or delete your personal information. You can manage your privacy settings in your account dashboard.' },
    { title: '5. Third-Party Services', content: 'We may share your information with payment processors, verification partners, and other service providers necessary to operate the platform.' },
    { title: '6. Cookies & Tracking', content: 'We use cookies and similar technologies to enhance your experience. You can control cookie settings in your browser preferences.' },
    { title: '7. Children\'s Privacy', content: 'Our platform is not intended for users under 18. We do not knowingly collect personal information from minors.' },
    { title: '8. Contact Us', content: 'If you have questions about our privacy practices, please contact us at privacy@karigarhaimain.com' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Privacy Policy</h1>
            <p style={{ fontSize: '16px', color: MUTED, marginTop: '16px' }}>Last updated: June 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {sections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} style={{ marginBottom: '40px', background: WHITE, borderRadius: '12px', border: `1px solid ${BORDER}`, padding: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#92700A' }}>{section.title}</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: '15px' }}>{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}