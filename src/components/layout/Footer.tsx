import { ArrowUpRight, Globe, Mail, MessageCircle, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    ['About Us', '/about'],
    ['How It Works', '/how-it-works'],
    ['Services', '/services'],
    ['Blog', '/blog'],
  ],
  Users: [
    ['Post a Service', '/contact'],
    ['Join as Provider', '/for-professionals'],
    ['Pricing', '/pricing'],
    ['Trust and Safety', '/trust-and-safety'],
    ['FAQ', '/faq'],
  ],
  Legal: [
    ['Terms', '/terms-of-service'],
    ['Privacy', '/privacy-policy'],
    ['Cookies', '/cookie-policy'],
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-panel/60">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-display text-base font-semibold tracking-[0.04em]">
                  <span className="text-text">Karigar</span>
                  <span className="text-brand-500">Hai</span>
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Modular frontend architecture, premium motion, and scalable page templates built for the full website.
            </p>
            <div className="flex flex-wrap gap-3">
              <IconButton href="mailto:support@karigarhai.com" icon={Mail} label="Email" />
              <IconButton href="#" icon={Globe} label="Website" />
              <IconButton href="#" icon={MessageCircle} label="Support" />
              <IconButton href="#" icon={PlayCircle} label="Video" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="space-y-4">
                <h3 className="font-display text-xs tracking-[0.28em] text-text">{group}</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link className="inline-flex items-center gap-1 transition hover:text-text" to={href}>
                        {label} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 KarigarHai. All rights reserved.</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  );
}

function IconButton({ href, icon: Icon, label }: { href: string; icon: typeof Mail; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-sm text-text transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
