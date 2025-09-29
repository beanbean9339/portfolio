import React from "react";
import { Box } from "@chakra-ui/react";
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <Box as="main" bg="gray.50" minH="100vh">
      <AboutSection />
    </Box>
  );
}
