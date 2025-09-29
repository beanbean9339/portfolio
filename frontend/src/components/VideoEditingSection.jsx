import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";

const videoProjects = [
  {
    title: "Short Film Edit",
    description: "A cinematic short film showcasing storytelling and editing skills.",
    thumbnail: "/videos/shortfilm-thumbnail.jpg",
    link: "https://www.example.com/shortfilm",
  },
  {
    title: "Social Media Ad",
    description: "Dynamic ad created for social media campaign with motion graphics.",
    thumbnail: "/videos/socialad-thumbnail.jpg",
    link: "https://www.example.com/socialad",
  },
  {
    title: "Music Video Edit",
    description: "Edited music video for local band with transitions and color grading.",
    thumbnail: "/videos/musicvideo-thumbnail.jpg",
    link: "https://www.example.com/musicvideo",
  },
];

export default function VideoEditingSection() {
  return (
    <Box py={10} px={6} bg="gray.50">
      <Heading mb={6} textAlign="center">
        Video Editing Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {videoProjects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            shadow="md"
            _hover={{ shadow: "xl", transform: "scale(1.02)", transition: "0.3s" }}
          >
            <Image src={project.thumbnail} alt={project.title} objectFit="cover" w="100%" h="200px" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={2}>{project.description}</Text>
              <Link href={project.link} color="teal.500" isExternal>
                View Project
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
