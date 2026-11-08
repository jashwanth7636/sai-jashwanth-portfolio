import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Terminal, Layers, Code, ShieldCheck, Github } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop-style2"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title-id"
    >
      <div
        className="modal-panel-style2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="modal-top-bar">
          <div className="modal-meta-crumbs">
            <span className="crumb-num">0{project.number}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-code">{project.code}</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-cat">{project.category}</span>
          </div>

          <button
            className="modal-close-trigger"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body-scroll">
          {/* Hero Banner */}
          <div className="modal-hero-header">
            <h2 id="modal-title-id" className="modal-main-title">
              {project.title}
            </h2>
            <p className="modal-lead-desc">{project.shortDescription}</p>

            <div className="modal-tags-row">
              {project.tags.map((tag) => (
                <span className="modal-tag-badge" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Grid of Technical Details */}
          <div className="modal-sections-stack">
            {/* Project Overview */}
            <div className="modal-detail-section">
              <div className="detail-section-head">
                <Layers size={14} className="accent-icon" />
                <h3>SYSTEM OVERVIEW</h3>
              </div>
              <p>{project.overview}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="modal-two-col-grid">
              <div className="modal-detail-section sub-card">
                <div className="detail-section-head">
                  <Terminal size={14} className="accent-icon" />
                  <h3>OPERATIONAL PROBLEM</h3>
                </div>
                <p>{project.problem}</p>
              </div>

              <div className="modal-detail-section sub-card">
                <div className="detail-section-head">
                  <ShieldCheck size={14} className="accent-icon" />
                  <h3>TECHNICAL SOLUTION</h3>
                </div>
                <p>{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="modal-detail-section">
              <div className="detail-section-head">
                <CheckCircle2 size={14} className="accent-icon" />
                <h3>KEY CAPABILITIES</h3>
              </div>
              <ul className="modal-feature-items">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i}>
                    <span className="feature-num">0{i + 1}</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Individual Implementation */}
            <div className="modal-detail-section sub-card highlighted">
              <div className="detail-section-head">
                <Code size={14} className="accent-icon" />
                <h3>IMPLEMENTATION DETAILS</h3>
              </div>
              <p>{project.whatIBuilt}</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="modal-bottom-bar">
          <div className="modal-cta-group">
            {project.githubUrl && (
              <a
                className="btn-modal-action btn-violet"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} />
                <span>GITHUB REPOSITORY</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            <a
              className="btn-modal-action btn-outline"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const el = document.getElementById("contact");
                if (el) {
                  if (window.lenisInstance) {
                    window.lenisInstance.scrollTo(el, { offset: -72 });
                  } else {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <span>INQUIRE ABOUT THIS PROJECT</span>
            </a>
          </div>

          <button className="btn-modal-action btn-close" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
