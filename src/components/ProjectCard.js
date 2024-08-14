import React from "react";
import "./project.css";

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-name">
        <h3 className="project-title">{title}</h3>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
      <h4 style={{ padding: "10px" }}>Tech Stack</h4>
      <div className="project-tech-stack1">
        {techStack.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.image} alt={tech.name} />
            <h6 className="project-tech-stack">{tech.name}</h6>
          </div>
        ))}
      </div>
      <div className="projects-button">
        <button className="button-project-link">
          <a
            className="project-deployed-link"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live💻
          </a>
        </button>
        <button className="button-project-link">
          <a
            className="project-github-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
