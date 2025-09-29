import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import VideoEditingSection from "../components/VideoEditingSection";
import ProjectCard from "../components/ProjectCard";

// Example video editing projects
const videos = [
  {
    title: "Short Film Edit",
    description: "A short film I edited for a school project.",
    image: "/images/short-film.jpg",
    link: "#"
  },
  {
    title: "Social Media Video",
    description: "Edited clips for Instagram content.",
    image: "/images/social-video.jpg",
    link: "#"
  },
  {
    title: "Event Highlight Reel",
    description: "Highlight reel for an event I filmed and edited.",
    image: "/images/event-reel.jpg",
    link: "#"
  },
  // Add more video projects as needed
];

export default function VideoEditing() {
  return (
    <Box as="main" bg="gray.50" py={10} px={5}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Video Editing Projects
      </Heading>
      <VideoEditingSection>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {videos.map((video, index) => (
            <ProjectCard
              key={index}
              title={video.title}
              description={video.description}
              image={video.image}
              link={video.link}
            />
          ))}
        </SimpleGrid>
      </VideoEditingSection>
    </Box>
  );
}
