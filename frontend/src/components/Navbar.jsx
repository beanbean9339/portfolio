import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <Box bg="gray.900" color="white" px={8} py={4} position="sticky" top={0} zIndex={10}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl">Isabella Lo</Box>
        <HStack spacing={6}>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="photography" smooth={true} duration={500} className="cursor-pointer">Photography</ScrollLink>
          <ScrollLink to="podcast" smooth={true} duration={500} className="cursor-pointer">Podcast</ScrollLink>
          <ScrollLink to="drawings" smooth={true} duration={500} className="cursor-pointer">Drawings</ScrollLink>
          <ScrollLink to="videoediting" smooth={true} duration={500} className="cursor-pointer">Video</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</ScrollLink>
        </HStack>
      </Flex>
    </Box>
  );
}
