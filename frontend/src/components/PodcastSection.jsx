import React from "react";
import { Box, Heading, VStack, Text, Link, SimpleGrid } from "@chakra-ui/react";

const episodes = [
  {
    title: "Episode 1: Exploring Creativity",
    description: "Diving into the psychology of creativity and inspiration.",
    url: "https://yourpodcastlink.com/episode1"
  },
  {
    title: "Episode 2: Design & Tech",
    description: "How design and technology intersect in modern projects.",
    url: "https://yourpodcastlink.com/episode2"
  },
  {
    title: "Episode 3: Gen Z Culture",
    description: "Analyzing trends and behaviors in Gen Z.",
    url: "https://yourpodcastlink.com/episode3"
  },
  // Add more episodes here
];

export default function PodcastSection() {
  return (
    <Box id="podcast-section" py={16} px={4} bg="gray.100">
      <Heading textAlign="center" mb={12} fontSize={["3xl", "4xl"]} color="gray.700">
        Podcast
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {episodes.map((episode, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
          >
            <VStack align="start" spacing={3}>
              <Heading fontSize="xl">{episode.title}</Heading>
              <Text color="gray.600">{episode.description}</Text>
              <Link
                href={episode.url}
                isExternal
                color="teal.500"
                fontWeight="bold"
              >
                Listen
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
