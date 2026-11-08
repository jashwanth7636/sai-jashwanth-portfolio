import React, { useEffect, useRef } from "react";
import { experienceData } from "../data/skills";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".experience-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-style2 experience-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">EXP // INTERNSHIP</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">VERIFIED EXPERIENCE</span>
          </div>
          <h2 className="section-monumental-heading">PRACTICAL EXPERIENCE.</h2>
        </div>

        {/* Experience Cards */}
        <div className="experience-cards-stack">
          {experienceData.map((exp) => (
            <div className="experience-card" key={exp.company}>
              <div className="exp-card-header">
                <div className="exp-role-block">
                  <span className="exp-tag-label">INTERNSHIP // 01</span>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <h4 className="exp-company-sub">{exp.company} · {exp.type}</h4>
                </div>
                <div className="exp-duration-badge">
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="exp-responsibilities-list">
                {exp.responsibilities.map((item, idx) => (
                  <div className="resp-item-row" key={idx}>
                    <span className="resp-bullet">&gt;</span>
                    <span className="resp-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
