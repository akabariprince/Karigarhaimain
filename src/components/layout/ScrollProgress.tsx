import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[150] h-1 w-full origin-left bg-gradient-to-r from-brand-300 via-brand-500 to-warm"
      style={{ scaleX }}
    />
  );
}
