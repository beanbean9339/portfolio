import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

// Example project data
const projects = [
  {
    title: "Branding & Logo Design",
    description: "Redesigned a client’s branding with logos, color palette, and typography.",
    imageUrl: "/images/branding-sample.jpg",
    projectUrl: "https://behance.net/yourproject",
  },
  {
    title: "Photography Series",
    description: "A series of urban photography shots capturing city life.",
    imageUrl: "/images/photo-sample.jpg",
  },
  {
    title: "Podcast Episode Production",
    description: "Produced and edited podcast episodes on cultural topics.",
    imageUrl: "/images/podcast-sample.jpg",
    projectUrl: "https://podcastlink.com",
  },
  {
    title: "Consulting Project",
    description: "Worked with a startup to optimize their workflow and data strategy.",
    imageUrl: "/images/consulting-sample.jpg",
  },
  {
    title: "Drawings & Illustrations",
    description: "Created digital and traditional illustrations for personal and client projects.",
    imageUrl: "/images/drawing-sample.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <Box py={10} px={6} bg="gray.50">
      <Heading mb={6} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
