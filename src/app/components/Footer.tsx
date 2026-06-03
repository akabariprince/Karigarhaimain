import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const productLinks = [
    'How it works',
    'For Karigar',
    'For Malik',
    'Pricing',
    'Download app',
    'Post a job',
  ];

  const companyLinks = [
    'About us',
    'Blog',
    'Careers',
    'Press kit',
    'Contact us',
  ];

  const supportLinks = [
    'Help center',
    'Safety & trust',
    'Terms of service',
    'Privacy policy',
    'Refund policy',
  ];

  return (
    <footer style={{ background: '#0F172A', color: 'white', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #E85D26, #FF7A42)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 14px rgba(232,93,38,0.35)' }}>
                <span style={{ color: 'white', fontSize: '18px', fontWeight: 800, fontFamily: 'Google Sans Flex, sans-serif' }}>K</span>
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Google Sans Flex, sans-serif' }}>KarigarHai</span>
            </div>
            <p className="text-lg mb-2" style={{ fontWeight: 600 }}>Har Kaam Ka Karigar</p>
            <p className="text-gray-400 text-sm mb-6">
              India's most trusted platform for skilled local workers. Verified. Rated. Local.
            </p>
            <div className="flex gap-3 mb-6">
              {[{ Icon: Instagram }, { Icon: Facebook }, { Icon: Twitter }, { Icon: Linkedin }, { Icon: Youtube }].map(({ Icon }, i) => (
                <a key={i} href="#" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F5C400'; e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.borderColor = '#F5C400'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm">
              <span>Made in India</span>
              <span>🇮🇳</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>Download KarigarHai</h4>
            <div className="space-y-3">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <div className="mt-4 bg-white p-3 rounded-lg inline-block">
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  QR Code
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 KarigarHai. All rights reserved. · Ahmedabad, India
          </p>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-white text-sm">English</button>
            <button className="text-gray-400 hover:text-white text-sm">हिंदी</button>
            <button className="text-gray-400 hover:text-white text-sm">ગુજરાતી</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
