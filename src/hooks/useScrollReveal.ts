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
          { y: 36, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
            },
          },
        );
      });
    }, root as Element);

    return () => ctx.revert();
  }, [scope]);
}
