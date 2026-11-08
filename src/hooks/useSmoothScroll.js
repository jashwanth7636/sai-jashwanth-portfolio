import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Use smooth scrolling only on devices with fine pointer (desktop/laptop)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: isFinePointer,
      syncTouch: false,
      touchMultiplier: 1.0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleRaf);
    gsap.ticker.lagSmoothing(0);

    window.lenisInstance = lenis;

    // Recompute scroll triggers once web fonts have fully loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(handleRaf);
      lenis.destroy();
      delete window.lenisInstance;
    };
  }, []);
}

