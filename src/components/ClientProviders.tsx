'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(useGSAP);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop: full animations with heavy effects
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        '[data-animate="card"]',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(
        '[data-animate="office"]',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
    });

    // Mobile: disable animations for instant render (optimizes Speed Index)
    mm.add('(max-width: 768px)', () => {
      gsap.set('[data-animate="card"]', { opacity: 1, y: 0 });
      gsap.set('[data-animate="office"]', { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
