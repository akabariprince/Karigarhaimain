import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    let destroyed = false;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let frame = 0;

    void import('lenis').then(({ default: Lenis }) => {
      if (destroyed) return;
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = window.requestAnimationFrame(raf);
      };

      frame = window.requestAnimationFrame(raf);
    });

    return () => {
      destroyed = true;
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      lenis?.destroy();
    };
  }, []);
}
