import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { SiteShell } from './components/layout/SiteShell';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { routeGroups } from './data/routes';
import { useLenis } from './hooks/useLenis';
import { cn } from './lib/cn';

const HomePage = lazy(() => import('./pages/HomePage'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/for-customers" element={<Navigate to="/services" replace />} />
      <Route path="/for-providers" element={<Navigate to="/for-professionals" replace />} />
      <Route path="/safety-verification" element={<Navigate to="/trust-and-safety" replace />} />
      <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
      <Route path="/cookies-policy" element={<Navigate to="/cookie-policy" replace />} />
      <Route path="/refund-policy" element={<Navigate to="/terms-of-service" replace />} />
      <Route path="/support" element={<Navigate to="/contact" replace />} />
      <Route path="/careers" element={<Navigate to="/about" replace />} />
      {routeGroups.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<GenericPage route={route} />}
        />
      ))}
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function AppLoader() {
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-bg text-text">
      <div className="relative flex flex-col items-center gap-6">
        <div className="space-y-1 text-center">
          <p className="font-display text-2xl font-semibold tracking-[0.03em] sm:text-3xl">
            <span className="text-text">Karigar</span>
            <span className="text-brand-500">Hai</span>
          </p>
          <div className="mx-auto h-1.5 w-36 overflow-hidden rounded-full bg-brand-100 sm:w-44">
            <div className="h-full w-full animate-shimmer rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-warm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [booted, setBooted] = useState(false);

  useLenis();

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const shellKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      {!booted ? <AppLoader /> : null}
      <ScrollProgress />
      <SiteShell>
        <AnimatePresence mode="wait">
          <motion.div
            key={shellKey}
            initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={cn('min-h-screen')}
          >
            <Suspense fallback={<AppLoader />}>
              <AppRoutes />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </SiteShell>
    </div>
  );
}
