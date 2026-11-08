import React, { useEffect, useRef } from "react";
import { educationData } from "../data/skills";
import { GraduationCap, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".edu-timeline-row",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
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
    <section id="education" className="section-style2 education-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">05 // EDUCATION</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-monumental-heading">ALWAYS LEARNING.</h2>
        </div>

        {/* Technical Timeline List */}
        <div className="education-timeline-stack">
          {educationData.map((item, idx) => (
            <div className="edu-timeline-row" key={item.institution}>
              {/* Year Column */}
              <div className="edu-year-col">
                <span className="edu-big-year">{item.year}</span>
                <span className="edu-status-pill">{item.status}</span>
              </div>

              {/* Details Column */}
              <div className="edu-card-content">
                <div className="edu-head-line">
                  <span className="edu-seq-index">0{idx + 1}</span>
                  <h3 className="edu-degree-text">{item.degree}</h3>
                </div>

                <h4 className="edu-school-text">{item.institution}</h4>
                <p className="edu-metrics-text">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
