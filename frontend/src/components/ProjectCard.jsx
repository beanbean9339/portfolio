import React from "react";
import { Box, Image, Heading, Text, Link, VStack } from "@chakra-ui/react";

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
    >
      {imageUrl && (
        <Image src={imageUrl} alt={title} objectFit="cover" w="100%" h="200px" />
      )}
      <VStack align="start" p={6} spacing={3}>
        <Heading fontSize="xl">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        {projectUrl && (
          <Link href={projectUrl} color="teal.500" fontWeight="bold" isExternal>
            View Project
          </Link>
        )}
      </VStack>
    </Box>
  );
}
