import React from "react";
import { Box } from "@chakra-ui/react";
import DrawingsSection from "../components/DrawingsSection";

export default function Drawings() {
  return (
    <Box as="main" bg="gray.50" minH="100vh" p={4}>
      <DrawingsSection />
    </Box>
  );
}
