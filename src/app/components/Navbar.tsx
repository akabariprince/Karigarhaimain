import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Y = '#F5C400';
const NAV_BG = '#0F172A';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Find Karigar', href: '#categories' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'For Karigar', href: '#for-karigar' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <nav style={{ background: NAV_BG, borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', background: Y, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#0F172A', fontSize: '18px', fontWeight: 800, fontFamily: 'Google Sans Flex, sans-serif' }}>K</span>
            </div>
            <span style={{ color: 'white', fontSize: '17px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>KarigarHai</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 500, fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s', fontFamily: 'Google Sans Flex, sans-serif' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '10px' }}>
            <button style={{ padding: '8px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}>
              Log in
            </button>
            <button style={{ padding: '8px 20px', borderRadius: '8px', border: 'none', background: Y, color: '#0F172A', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Google Sans Flex, sans-serif', boxShadow: '0 2px 8px rgba(245,196,0,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(245,196,0,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(245,196,0,0.3)'; }}>
              Post a Job
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '7px', padding: '7px', cursor: 'pointer', color: 'white', display: 'flex' }}>
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{ background: '#1E293B', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '12px 24px 20px' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
              style={{ display: 'block', color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: '15px', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: 'Google Sans Flex, sans-serif' }}>
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px' }}>
            <button style={{ padding: '11px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', fontWeight: 600, fontSize: '15px', cursor: 'pointer', fontFamily: 'Google Sans Flex, sans-serif' }}>Log in</button>
            <button style={{ padding: '11px', borderRadius: '8px', border: 'none', background: Y, color: '#0F172A', fontWeight: 700, fontSize: '15px', cursor: 'pointer', fontFamily: 'Google Sans Flex, sans-serif' }}>Post a Job</button>
          </div>
        </div>
      )}
    </nav>
  );
}
