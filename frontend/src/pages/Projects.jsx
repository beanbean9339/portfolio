import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "My personal portfolio built with React.", link: "#" },
    { title: "Art Nonprofit App", description: "Web app for connecting alumni with students.", link: "#" },
    { title: "Hackathon Project", description: "Built with Java and Spring Boot.", link: "#" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

export default Projects;
