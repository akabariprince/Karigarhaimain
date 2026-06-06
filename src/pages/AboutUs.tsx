import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { ArrowRight, Users, Target, Heart, Award } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const DARK2 = '#1E293B';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

export default function AboutUs() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>About KarigarHai</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              We're building India's most trusted platform connecting skilled workers with those who need them. Every day, thousands of Malik and Karigar trust us to deliver quality work at fair prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
            {[
              { icon: Target, title: 'Our Mission', desc: 'Empower skilled workers and connect them with honest work opportunities, transforming the informal economy.' },
              { icon: Users, title: 'Our Vision', desc: 'A world where every Karigar has dignity, fair pay, and steady work. Where every Malik gets quality service they can trust.' },
              { icon: Heart, title: 'Our Values', desc: 'Trust, Transparency, and Fairness. We believe in verification, honest reviews, and secure payments.' },
              { icon: Award, title: 'Our Impact', desc: '10,000+ verified workers. 50,000+ jobs completed. ₹2 Cr+ earned by Karigar. 200+ cities served.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: WHITE, padding: '32px', borderRadius: '16px', border: `1px solid ${BORDER}` }}>
                  <item.icon size={40} style={{ color: Y, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 32px', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '40px' }}>Built by Builders for India</h2>
          <p style={{ fontSize: '16px', color: MUTED, maxWidth: '600px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            Our team combines tech expertise with deep understanding of India's service economy. We're committed to making a real difference.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}