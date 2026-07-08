import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { cn } from '../../lib/cn';

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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(48,145,156,0.16),_transparent_30%),radial-gradient(circle_at_80%_10%,_rgba(211,129,79,0.14),_transparent_20%),linear-gradient(180deg,_rgba(9,18,20,0.03),_transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.45] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_94%)]" />
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
        {visible ? (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={cn(
              'fixed bottom-5 right-5 z-[140] inline-flex items-center gap-2 rounded-full border border-line bg-panel/95 px-4 py-3 text-sm font-medium text-text shadow-soft backdrop-blur-xl',
              'hover:-translate-y-0.5',
            )}
            aria-label="Move to top"
          >
            <motion.span
              animate={reduced ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-warm text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.span>
            <span className="hidden sm:inline">Move to top</span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
