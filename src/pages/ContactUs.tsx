import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Get In Touch</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '40px' }}>Contact Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {[
                    { icon: Mail, label: 'Email', value: 'support@karigarhaimain.com' },
                    { icon: Phone, label: 'Phone', value: '+91 1800 KARIGAR' },
                    { icon: MapPin, label: 'Address', value: 'Ahmedabad, Gujarat, India' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                      <item.icon size={24} style={{ color: Y, flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: '14px', color: MUTED, marginBottom: '4px' }}>{item.label}</p>
                        <p style={{ fontSize: '16px', fontWeight: 600 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '28px' }}>Send us a Message</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ padding: '12px 16px', borderRadius: '8px', border: `1.5px solid ${BORDER}`, fontSize: '14px', fontFamily: 'inherit' }} />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ padding: '12px 16px', borderRadius: '8px', border: `1.5px solid ${BORDER}`, fontSize: '14px', fontFamily: 'inherit' }} />
                  <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ padding: '12px 16px', borderRadius: '8px', border: `1.5px solid ${BORDER}`, fontSize: '14px', fontFamily: 'inherit', resize: 'vertical' }} />
                  <button type="submit" style={{ padding: '12px 24px', borderRadius: '8px', background: Y, border: 'none', color: DARK, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}