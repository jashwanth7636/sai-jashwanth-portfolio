import React, { useEffect, useRef } from "react";
import { FileText, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ResumeCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".resume-box-style2",
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
    <section id="resume-cta" className="section-style2 resume-cta-section" ref={sectionRef}>
      <div className="container">
        <div className="resume-box-style2">
          <div className="resume-box-left">
            <span className="resume-overline">DOCUMENTATION // CURRICULUM VITAE</span>
            <h2 className="resume-main-heading">READY FOR WHAT'S NEXT.</h2>
            <p className="resume-sub-copy">
              Explore my background, technical skills, and selected projects.
            </p>
          </div>

          <div className="resume-box-right">
            <a
              className="btn-brutalist-action"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View Resume PDF"
            >
              <span>VIEW RESUME PDF</span>
              <FileText size={16} className="btn-icon-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
