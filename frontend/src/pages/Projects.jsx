import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import ProjectSection from "../components/ProjectSection";
import ProjectCard from "../components/ProjectCard";

// Example projects data — you can replace this with your real projects
const projects = [
  {
    title: "Graphic Design Portfolio",
    description: "Logo and branding projects I've worked on.",
    image: "/images/graphic-design.jpg",
    link: "#"
  },
  {
    title: "Photography Projects",
    description: "A selection of my photography work.",
    image: "/images/photography.jpg",
    link: "#"
  },
  {
    title: "Consulting Work",
    description: "Projects I contributed to as a consultant.",
    image: "/images/consulting.jpg",
    link: "#"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Box as="main" bg="gray.50" py={10} px={5}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        My Projects
      </Heading>
      <ProjectSection>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </SimpleGrid>
      </ProjectSection>
    </Box>
  );
}
