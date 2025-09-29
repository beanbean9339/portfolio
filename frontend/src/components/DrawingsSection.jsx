import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";

const drawings = [
  {
    title: "Sketch 1",
    src: "/images/drawings/sketch1.jpg",
    description: "Pencil sketch of a cityscape",
  },
  {
    title: "Sketch 2",
    src: "/images/drawings/sketch2.jpg",
    description: "Portrait study in graphite",
  },
  {
    title: "Sketch 3",
    src: "/images/drawings/sketch3.jpg",
    description: "Abstract pen drawing",
  },
  {
    title: "Sketch 4",
    src: "/images/drawings/sketch4.jpg",
    description: "Concept art for a character design",
  },
  // Add more drawings as you create them
];

export default function DrawingsSection() {
  return (
    <Box py={16} px={8} bg="white">
      <Heading fontSize={["2xl", "3xl", "4xl"]} mb={8} textAlign="center">
        My Drawings
      </Heading>
      <Text fontSize="lg" color="gray.700" mb={10} textAlign="center">
        A collection of my personal and professional artwork.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {drawings.map((drawing, index) => (
          <Box key={index} borderRadius="md" overflow="hidden" boxShadow="md">
            <Image
              src={drawing.src}
              alt={drawing.title}
              objectFit="cover"
              w="100%"
              h="250px"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box p={4}>
              <Heading fontSize="lg" mb={2}>
                {drawing.title}
              </Heading>
              <Text color="gray.600">{drawing.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Box mt={10} textAlign="center">
        <Link color="blue.500" href="/portfolio/drawings">
          View Full Gallery &rarr;
        </Link>
      </Box>
    </Box>
  );
}
