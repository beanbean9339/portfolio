import React from "react";
import { Box } from "@chakra-ui/react";
import PhotographySection from "../components/PhotographySection";

export default function Photography() {
  return (
    <Box as="main" bg="gray.50" py={10}>
      <PhotographySection />
    </Box>
  );
}
