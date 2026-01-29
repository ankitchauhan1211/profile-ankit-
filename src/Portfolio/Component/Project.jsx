import React from "react";
import { projects } from "./projects"; 
import "./project.css";

function Project() {
  return (
    <div className="project-section" id="project">
      <div className="project-header">
        <h1>Projects</h1>
        <b>A showcase of my work at TechVeda</b>
      </div>

      <div className="person-img">
        <img src="./project.png" alt="Person" />
      </div>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-logo">{proj.logo}</div>
            <h3 className="project-name">{proj.name}</h3>

            <div className="tech-stack">
              {proj.techStack.map((tech, index) => (
                <span className="tech-badge" key={index}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              Live / View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
