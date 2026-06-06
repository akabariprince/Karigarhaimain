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

export default function TermsOfService() {
  const sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing and using KarigarHai, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.' },
    { title: '2. User Accounts', content: 'You are responsible for maintaining the confidentiality of your account information. You agree to provide accurate information and to immediately notify us of any unauthorized use of your account.' },
    { title: '3. User Conduct', content: 'You agree not to use the platform for any unlawful purposes or in any way that could damage or disable our services. This includes harassment, fraud, or any discriminatory behavior.' },
    { title: '4. Payment Terms', content: 'All payments are held in secure escrow. As a Malik, you authorize us to hold funds until the job is completed. As a Karigar, you agree to complete jobs as described.' },
    { title: '5. Verification & Safety', content: 'All Karigar must complete Aadhaar verification. We reserve the right to remove users who violate our safety guidelines or engage in fraudulent activity.' },
    { title: '6. Dispute Resolution', content: 'In case of disputes, both parties agree to work with our support team for resolution. We mediate disputes fairly and may withhold payment if work standards are not met.' },
    { title: '7. Limitation of Liability', content: 'KarigarHai is provided on an "as-is" basis. We are not liable for indirect or consequential damages arising from your use of the platform.' },
    { title: '8. Changes to Terms', content: 'We may update these terms at any time. Your continued use of the platform constitutes acceptance of updated terms.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Terms of Service</h1>
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