import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { cn } from '../../lib/cn';
import { WhatsAppMark } from '../shared/WhatsAppMark';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(48,145,156,0.08),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(211,129,79,0.08),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(255,255,255,0.98)_18%,_transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_94%)]" />
      <Navbar />
      <motion.main
        initial={reduced ? false : { opacity: 0.98 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
      <Footer />
      <AnimatePresence>
        <motion.a
          href="https://wa.me/919099807800"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp support"
          initial={{ opacity: 0, x: -18, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -18, scale: 0.94 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={cn(
            'fixed bottom-5 left-5 z-[140] grid h-10 w-10 place-items-center rounded-full border border-emerald-400/20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-soft backdrop-blur-xl',
            'hover:-translate-y-0.5',
          )}
          title="WhatsApp support"
        >
          <WhatsAppMark className="h-6 w-6" />
        </motion.a>
      </AnimatePresence>
      <AnimatePresence>
        {visible ? (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={cn(
              'fixed bottom-5 right-5 z-[140] grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white shadow-soft backdrop-blur-xl',
              'hover:-translate-y-0.5',
            )}
            aria-label="Move to top"
          >
            <span className="grid h-6 w-6 place-items-center">
              <ArrowUp className="h-4 w-4" />
            </span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
