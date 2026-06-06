import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../app/components/Navbar';
import { Footer } from '../app/components/Footer';
import { Briefcase, MapPin, Users, TrendingUp } from 'lucide-react';

const Y = '#F5C400';
const DARK = '#0F172A';
const TEXT = '#0F172A';
const MUTED = '#64748B';
const BG = '#F8FAFC';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(0,0,0,0.08)';

const JOB_OPENINGS = [
  { title: 'Senior Product Manager', location: 'Ahmedabad', type: 'Full-time' },
  { title: 'Mobile App Developer (React Native)', location: 'Remote', type: 'Full-time' },
  { title: 'Backend Engineer', location: 'Ahmedabad', type: 'Full-time' },
  { title: 'Customer Success Manager', location: 'Surat', type: 'Full-time' },
  { title: 'Data Analyst', location: 'Remote', type: 'Full-time' },
  { title: 'Community Manager', location: 'Ahmedabad', type: 'Full-time' },
];

export default function Careers() {
  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: 'Google Sans Flex, sans-serif', color: TEXT }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: WHITE, padding: '80px 32px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>Join Our Mission</h1>
            <p style={{ fontSize: '18px', color: MUTED, maxWidth: '600px', lineHeight: 1.6 }}>
              We're hiring passionate people who want to transform India's skilled work ecosystem. Build with us and make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section style={{ padding: '80px 32px', background: BG }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Why Join KarigarHai</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { icon: TrendingUp, title: 'High Impact', desc: 'Work on a mission that transforms millions of lives across India.' },
              { icon: Users, title: 'Great Team', desc: 'Collaborate with talented, passionate, and diverse team members.' },
              { icon: Briefcase, title: 'Growth', desc: 'Learn, grow, and develop your skills in a fast-paced environment.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div style={{ textAlign: 'center' }}>
                  <item.icon size={48} style={{ color: Y, marginBottom: '16px', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: '80px 32px', background: WHITE }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '60px', textAlign: 'center' }}>Open Positions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {JOB_OPENINGS.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onMouseEnter={e => { e.currentTarget.style.borderColor = Y; e.currentTarget.style.backgroundColor = 'rgba(245,196,0,0.05)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.backgroundColor = BG; }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', color: MUTED, fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} /> {job.location}</div>
                      <div>{job.type}</div>
                    </div>
                  </div>
                  <button style={{ padding: '8px 16px', borderRadius: '8px', border: `1.5px solid ${Y}`, background: 'transparent', color: Y, fontWeight: 600, cursor: 'pointer' }}>Apply Now</button>
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