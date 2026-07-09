import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(scope?: string) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = scope ? document.querySelector(scope) : document;
    if (!root) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => {
        gsap.fromTo(
          node,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 90%',
              once: true,
            },
          },
        );
      });
    }, root as Element);

    return () => ctx.revert();
  }, [scope]);
}
