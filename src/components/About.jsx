import React, { useEffect, useRef } from "react";
import { experienceData, certificationsList, spokenLanguages } from "../data/skills";
import { ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".about-block",
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

  const internship = experienceData[0];

  return (
    <section id="about" className="section-style2 about-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row about-block">
          <div className="header-label-group">
            <span className="section-label-num">01 // ABOUT</span>
            <div className="header-divider-line" />
          </div>
          <h2 className="section-monumental-heading">BUILT THROUGH CURIOSITY.</h2>
        </div>

        {/* 2-Column Brutalist Layout */}
        <div className="about-grid-content">
          {/* Left Column: Core Narrative */}
          <div className="about-narrative-col about-block">
            <p className="about-lead-text">
              "I'm a Computer Science and Information Technology student interested in software development, full-stack applications, and artificial intelligence. I enjoy learning by building projects, experimenting with technologies, and turning practical problems into working software."
            </p>

            <p className="about-secondary-text">
              Currently pursuing my B.Tech at Presidency University, Bengaluru (CGPA: 7.28, Expected Graduation: 2027), I focus on writing reliable, structured code across full-stack architectures and machine learning systems.
            </p>

            {/* Quick Metadata Spec Bar */}
            <div className="about-spec-box">
              <div className="spec-item">
                <span className="spec-tag">DISCIPLINE</span>
                <span className="spec-content">B.Tech CSE / IT · 7th Sem</span>
              </div>
              <div className="spec-item">
                <span className="spec-tag">LOCATION</span>
                <span className="spec-content">Bengaluru, Karnataka, India</span>
              </div>
              <div className="spec-item">
                <span className="spec-tag">LANGUAGES</span>
                <span className="spec-content">{spokenLanguages.join(" · ")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Confirmed Internship & Certifications */}
          <div className="about-credentials-col about-block">
            {/* Confirmed Internship Block */}
            <div className="credential-panel">
              <div className="panel-badge-row">
                <span className="panel-badge-code">EXPERIENCE // INTERNSHIP</span>
                <span className="panel-badge-date">{internship.duration}</span>
              </div>

              <h3 className="credential-role">{internship.role}</h3>
              <h4 className="credential-org">{internship.company} · {internship.type}</h4>

              <ul className="credential-responsibilities">
                {internship.responsibilities.map((resp, i) => (
                  <li key={i}>
                    <span className="bullet-point">/</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Block */}
            <div className="certifications-panel">
              <div className="panel-badge-row">
                <span className="panel-badge-code">VERIFIED CERTIFICATIONS</span>
              </div>

              <div className="cert-tags-grid">
                {certificationsList.map((cert) => (
                  <div className="cert-tag-item" key={cert}>
                    <CheckCircle2 size={13} className="accent-icon" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
