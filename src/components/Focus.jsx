import React, { useEffect, useRef } from "react";
import { focusAreas } from "../data/skills";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Focus() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".focus-card-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="focus" className="section-style2 focus-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">04 // FOCUS</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">CORE DOMAINS</span>
          </div>
          <h2 className="section-monumental-heading">FROM IDEAS TO IMPLEMENTATION.</h2>
        </div>

        {/* 3 Content Blocks Grid */}
        <div className="focus-cards-grid">
          {focusAreas.map((area) => (
            <div className="focus-card-block" key={area.title}>
              <div className="focus-top-meta">
                <span className="focus-idx-num">{area.number}</span>
                <div className="focus-arrow-icon">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <h3 className="focus-card-title">{area.title}</h3>
              <p className="focus-card-text">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const WhatIBuild = Focus;
