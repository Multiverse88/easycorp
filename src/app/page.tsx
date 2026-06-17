'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import HeroSection from '@/components/HeroSection';
import BranchCard from '@/components/BranchCard';
import OfficeMaps from '@/components/OfficeMaps';
import { branches } from '@/data/branches';

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    // Use matchMedia to optimize animations for mobile
    const mm = gsap.matchMedia();

    // Desktop: full animations with heavy effects
    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        ".ec-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.1, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ".office-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    });

    // Mobile: lighter, faster animations
    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        ".ec-card",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.1, ease: "power2.out" }
      );
      
      gsap.fromTo(
        ".office-card",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.15, ease: "power2.out" }
      );
    });

    return () => mm.revert(); // Cleanup
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
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

  return (
    <div className="ec-layout">
      <div className="ec-container">
        <div className="ec-homepage">
          <HeroSection />
          
          <main className="ec-grid-container">
            <div className="ec-grid">
              {branches.map((branch) => (
                <BranchCard key={branch.name} branch={branch} />
              ))}
            </div>
          </main>

          <OfficeMaps />
        </div>
      </div>
      <footer className="ec-footer">
        <p>© 2026 Easy Corp. All rights reserved.</p>
      </footer>
    </div>
  );
}
