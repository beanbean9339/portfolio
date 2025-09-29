import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import profilePic from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <Box maxW="6xl" mx="auto" px={6} display="flex" flexDir={{ base: "column", md: "row" }} alignItems="center" gap={12}>
        
        {/* Profile Image */}
        <Box
          w={{ base: "40", md: "64" }}
          h={{ base: "40", md: "64" }}
          flexShrink={0}
          position="relative"
          borderRadius="full"
          overflow="hidden"
          border="4px solid"
          borderColor="gray.200"
          boxShadow="lg"
        >
          <img
            src={profilePic}
            alt="Isabella Lo"
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </Box>

        {/* About Text */}
        <Box flex="1">
          <Heading as="h2" size="2xl" mb={6} color="gray.800">
            About Me
          </Heading>

          <Text fontSize="lg" color="gray.700" mb={4} lineHeight="tall">
            Hi, I’m Isabella. I’m a Computer and Information Science student at Ohio State University with a minor in Business. I love building web applications, exploring data analytics, and bringing creative ideas to life with code.
          </Text>

          <Text fontSize="lg" color="gray.700" mb={4} lineHeight="tall">
            Beyond tech, I’m passionate about fashion, music, and sustainable living. I enjoy merging technology with real-world experiences, whether through projects, community work, or personal endeavors.
          </Text>

          <Text fontSize="lg" color="gray.700" lineHeight="tall">
            I’m always curious, always learning, and eager to collaborate on projects that challenge me and make a positive impact.
          </Text>
        </Box>
      </Box>
    </section>
  );
};

export default AboutSection;
