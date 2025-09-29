import React from "react";
import { Box, Heading, SimpleGrid, Tag } from "@chakra-ui/react";

const skills = [
  "Graphic Design",
  "Illustration",
  "Photography",
  "Podcast Production",
  "Video Editing",
  "Logo & Branding",
  "Web Development (React, JavaScript)",
  "UI/UX Design",
  "Consulting & Strategy",
];

export default function SkillsSection() {
  return (
    <Box py={10} px={6} bg="white">
      <Heading mb={6} textAlign="center">
        My Skills
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} justifyItems="center">
        {skills.map((skill, index) => (
          <Tag
            key={index}
            size="lg"
            variant="solid"
            colorScheme="teal"
            fontWeight="bold"
            px={4}
            py={2}
            borderRadius="full"
          >
            {skill}
          </Tag>
        ))}
      </SimpleGrid>
    </Box>
  );
}
