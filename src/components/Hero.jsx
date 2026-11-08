import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-anim-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
      ).fromTo(
        rightRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(el, { offset: -72, duration: 1.0 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="hero-section-style2" ref={heroRef}>
      {/* Subtle Background Grid */}
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="container hero-container-grid">
        {/* Left Side: Monumental Condensed Typography & Hero CTA */}
        <div className="hero-left-col" ref={leftRef}>
          {/* Introductory Line */}
          <div className="hero-intro-line hero-anim-item">
            <span>SOFTWARE DEVELOPER / AI ENTHUSIAST / PROBLEM SOLVER</span>
          </div>

          {/* Main Huge Condensed Headline */}
          <div className="hero-headline-block hero-anim-item">
            <h1 className="hero-giant-name">
              <span className="name-line">SAI</span>
              <span className="name-line">
                JASHWANTH<span className="hero-asterisk">*</span>
              </span>
            </h1>
          </div>

          {/* Supporting Description */}
          <p className="hero-support-desc hero-anim-item">
            Computer Science student exploring full-stack development, AI/ML, and real-world applications.
          </p>

          {/* Hero Call to Action: Outlined Circular Arrow Button + EXPLORE PROJECTS */}
          <div className="hero-cta-wrap hero-anim-item">
            <a
              href="#projects"
              className="hero-explore-cta"
              onClick={scrollToProjects}
              aria-label="Explore Projects"
            >
              <div className="circle-arrow-btn">
                <ArrowDown size={18} className="cta-arrow-icon" />
              </div>
              <span className="cta-text-label">EXPLORE PROJECTS</span>
            </a>
          </div>
        </div>

        {/* Right-Side Editorial Panel (Separated by Thin Vertical Border) */}
        <div className="hero-right-col" ref={rightRef}>
          <div className="right-panel-inner">
            {/* Panel Headline */}
            <div className="right-headline-box">
              <span className="right-quote-line">TURNING IDEAS</span>
              <span className="right-quote-line">INTO WORKING</span>
              <span className="right-quote-line text-white">SOFTWARE.</span>
            </div>

            {/* Grayscale Abstract Digital Mesh Visual (NO PERSONAL PHOTO) */}
            <div className="right-mesh-wrapper">
              <img
                src="/images/hero-mesh.svg"
                alt="Grayscale abstract digital mesh and technical wireframe visualization"
                className="right-mesh-img"
                loading="eager"
              />
              <div className="mesh-overlay-technical">
                <span className="mesh-tag">FIGURE 01 // DIGITAL MESH</span>
                <span className="mesh-coord">12.9716°N · 77.5946°E</span>
              </div>
            </div>

            {/* Bottom Metadata Rows */}
            <div className="hero-metadata-stack">
              <div className="meta-stat-row">
                <span className="meta-stat-val">03</span>
                <span className="meta-stat-sep">—</span>
                <span className="meta-stat-lbl">PROJECTS</span>
              </div>
              <div className="meta-stat-row">
                <span className="meta-stat-val">10+</span>
                <span className="meta-stat-sep">—</span>
                <span className="meta-stat-lbl">TECH STACK</span>
              </div>
              <div className="meta-stat-row">
                <span className="meta-stat-val">2027</span>
                <span className="meta-stat-sep">—</span>
                <span className="meta-stat-lbl">GRADUATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
