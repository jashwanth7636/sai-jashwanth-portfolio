import React, { useState, useEffect, useRef } from "react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".project-grid-col",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section-style2 projects-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">02 // PROJECTS</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">03 ITEMS</span>
          </div>
          <h2 className="section-monumental-heading">FEATURED PROJECTS</h2>
        </div>

        {/* 3-Column Desktop Grid for Real Project Showcases */}
        <div className="projects-three-col-grid">
          {projectsData.map((project) => (
            <div className="project-grid-col" key={project.id}>
              <ProjectCard
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
