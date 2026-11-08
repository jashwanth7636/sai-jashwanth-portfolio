import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, onSelect }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="project-card-style2"
      onClick={() => onSelect(project)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Large Monochrome Project Image */}
      <div className="card-image-box">
        {!imageError ? (
          <img
            src={project.image}
            alt={`Visual representation for ${project.title}`}
            className="card-project-img"
            loading="lazy"
            width="800"
            height="520"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="card-fallback-visual">
            <span className="fallback-code">{project.code}</span>
            <span className="fallback-title">{project.title}</span>
          </div>
        )}
        <div className="card-image-topbar">
          <span className="card-cat-tag">{project.category}</span>
          <span className="card-code-tag">{project.code}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body-content">
        <div className="card-meta-line">
          <span className="card-num-label">PROJECT // 0{project.number}</span>
          <span className="card-year-label">{project.year}</span>
        </div>

        <h3 className="card-title-heading">{project.title}</h3>
        <p className="card-desc-paragraph">{project.shortDescription}</p>

        {/* Technology Tags */}
        <div className="card-tech-list">
          {project.tags.map((tag) => (
            <span className="tech-badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Card Action Link */}
        <div className="card-action-bar">
          <span className="view-details-prompt">
            <span>VIEW CASE STUDY</span>
            <div className="action-arrow-box">
              <ArrowUpRight size={15} />
            </div>
          </span>
        </div>
      </div>
    </article>
  );
}
