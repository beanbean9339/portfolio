import React from "react";
import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="gray.900" color="white" px={8} py={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl">Isabella Lo</Box>
        <HStack spacing={6}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/projects">Projects</Link>
          <Link as={RouterLink} to="/photography">Photography</Link>
          <Link as={RouterLink} to="/podcast">Podcast</Link>
          <Link as={RouterLink} to="/drawings">Drawings</Link>
          <Link as={RouterLink} to="/videoediting">Video</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
}
