import React, { useEffect, useRef } from "react";
import { skillsGroups } from "../data/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".skills-group-box",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
    <section id="skills" className="section-style2 skills-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">03 // SKILLS</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">06 CATEGORIES</span>
          </div>
          <h2 className="section-monumental-heading">TOOLS OF THE TRADE.</h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="skills-editorial-grid-style2">
          {skillsGroups.map((group) => (
            <div className="skills-group-box" key={group.title}>
              <div className="group-top-bar">
                <span className="group-idx-code">CAT // {group.number}</span>
                <span className="group-count">{group.skills.length} ITEMS</span>
              </div>

              <h3 className="group-title-heading">{group.title}</h3>

              <div className="group-chips-wrap">
                {group.skills.map((skill) => (
                  <div className="skill-chip-style2" key={skill}>
                    <span className="chip-bullet-violet" />
                    <span className="chip-text-label">{skill}</span>
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
