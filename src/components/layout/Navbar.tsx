import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { premiumNav } from '../../data/routes';
import { cn } from '../../lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navClass = useMemo(
    () =>
      cn(
        'fixed left-0 right-0 top-0 z-[120] transition-all duration-300',
        scrolled ? 'border-b border-line bg-panel/85 backdrop-blur-2xl' : 'bg-transparent',
      ),
    [scrolled],
  );

  return (
    <>
      <header className={navClass}>
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="leading-tight">
              <p className="font-display text-xl font-semibold tracking-[0.02em] sm:text-2xl lg:text-2xl">
                <span className="text-text">Karigar</span>
                <span className="text-brand-500">Hai</span>
              </p>
            </div>
          </Link>

          <nav className="ml-8 hidden flex-1 items-center gap-1 xl:flex">
            {premiumNav.map((item) => (
              <NavLink key={item.href} href={item.href} active={location.pathname === item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
              to="/contact"
            >
              Download App
            </Link>
          </div>

          <button
            className={cn(
              'ml-auto grid h-11 w-11 place-items-center rounded-2xl border border-line bg-panel shadow-soft transition-opacity xl:hidden',
              open ? 'pointer-events-none opacity-0' : 'opacity-100',
            )}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: string }) {
  return (
    <Link
      to={href}
      className={cn(
        'rounded-full px-4 py-2 text-sm transition',
        active ? 'bg-panel text-text shadow-sm' : 'text-muted hover:bg-panel hover:text-text',
      )}
    >
      {children}
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className={cn('fixed inset-0 z-[110] bg-slate-950/20 backdrop-blur-sm transition-opacity xl:hidden', open ? 'opacity-100' : 'pointer-events-none opacity-0')}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-[130] h-full w-[92vw] max-w-sm border-l border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(243,248,248,0.92))] p-5 shadow-[0_24px_80px_rgba(7,19,22,0.18)] backdrop-blur-[30px] transition-all duration-300 xl:hidden',
          open ? 'translate-x-0 opacity-100 visible' : 'translate-x-[calc(100%+24px)] opacity-0 invisible',
        )}
      >
        <div className="flex items-start justify-between gap-4 pr-12">
          <div className="min-w-0">
            <span className="block font-display text-xl font-semibold tracking-[0.02em] sm:text-2xl">
              <span className="text-text">Karigar</span>
              <span className="text-brand-500">Hai</span>
            </span>
          </div>
          <button onClick={onClose} className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/95 backdrop-blur-xl">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 space-y-2">
          {premiumNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/92 px-4 py-4 text-base font-medium text-text transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
            >
              {item.label}
              <ArrowRight className="h-4 w-4 text-brand-500" />
            </Link>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-white/70 bg-white/92 p-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Quick action</p>
          <Link
            to="/contact"
            className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-4 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Download App
          </Link>
        </div>
      </aside>
    </>
  );
}
