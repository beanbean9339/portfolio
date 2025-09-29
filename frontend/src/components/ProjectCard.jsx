import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", margin: "1rem 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
}

export default ProjectCard;
