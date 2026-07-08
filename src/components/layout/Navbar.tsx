import { ChevronDown, Menu, X } from 'lucide-react';
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
        scrolled ? 'bg-bg/82 shadow-glow backdrop-blur-2xl' : 'bg-transparent',
      ),
    [scrolled],
  );

  return (
    <>
      <header className={navClass}>
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="leading-tight">
              <p className="font-display text-base font-semibold tracking-[0.04em] sm:text-lg lg:text-xl">
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
            <button className="ml-2 inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted transition hover:bg-panel hover:text-text">
              More <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-panel hover:text-text" to="/contact">
              Login
            </Link>
            <Link
              className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
              to="/contact"
            >
              Download App
            </Link>
          </div>

          <button
            className="ml-auto grid h-11 w-11 place-items-center rounded-2xl border border-line bg-panel shadow-soft xl:hidden"
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
        className={cn('fixed inset-0 z-[110] bg-slate-950/40 backdrop-blur-sm transition-opacity xl:hidden', open ? 'opacity-100' : 'pointer-events-none opacity-0')}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-[115] h-full w-[88vw] max-w-sm border-l border-line bg-bg/96 p-5 shadow-soft backdrop-blur-2xl transition-transform duration-300 xl:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-semibold tracking-[0.04em]">
            <span className="text-text">Karigar</span>
            <span className="text-brand-500">Hai</span>
          </span>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-panel">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 space-y-2">
          {premiumNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block rounded-2xl border border-line bg-panel px-4 py-3 text-base font-medium text-text"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
