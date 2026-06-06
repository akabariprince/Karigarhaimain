import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

const BLOG_POSTS = [
  { title: 'How to Find the Best Karigar for Your Project', date: '2025-06-01', author: 'Priya Sharma', excerpt: 'Tips and tricks for hiring verified skilled workers on KarigarHai...' },
  { title: 'Success Story: How Ramesh Earned ₹2L in 6 Months', date: '2025-05-28', author: 'Amit Patel', excerpt: 'Real story of an electrician who transformed his income using our platform...' },
  { title: 'The Future of Skilled Work in India', date: '2025-05-20', author: 'Sarah Khan', excerpt: 'Exploring trends in the gig economy and skilled labor market...' },
  { title: 'Safety Tips: Hiring Workers for Your Home', date: '2025-05-15', author: 'Neha Gupta', excerpt: 'Essential safety guidelines for both Malik and Karigar...' },
];

export default function Blog() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>KarigarHai Blog</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              Stories, tips, and insights from India's skilled work community. Learn from experts and fellow Malik and Karigar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {BLOG_POSTS.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ background: WHITE, borderRadius: '16px', border: `1px solid ${BORDER}`, padding: '28px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: TEXT }}>{post.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: MUTED, marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {post.date}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={14} /> {post.author}</div>
                  </div>
                  <button style={{ color: Y, fontSize: '14px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Read More <ArrowRight size={14} />
                  </button>
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