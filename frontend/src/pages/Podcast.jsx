import React from "react";
import { Box } from "@chakra-ui/react";
import PodcastSection from "../components/PodcastSection";

export default function Podcast() {
  return (
    <Box as="main" bg="gray.50" py={10}>
      <PodcastSection />
    </Box>
  );
}
