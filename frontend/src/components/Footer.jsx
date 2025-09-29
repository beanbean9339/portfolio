import React from "react";
import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" py={6} px={8}>
      <HStack spacing={6} justify="center" mb={4}>
        <Link href="https://www.instagram.com/yourusername" isExternal>
          <Icon as={FaInstagram} w={6} h={6} />
        </Link>
        <Link href="https://www.linkedin.com/in/yourusername" isExternal>
          <Icon as={FaLinkedin} w={6} h={6} />
        </Link>
        <Link href="https://github.com/yourusername" isExternal>
          <Icon as={FaGithub} w={6} h={6} />
        </Link>
        <Link href="https://open.spotify.com/user/yourusername" isExternal>
          <Icon as={FaSpotify} w={6} h={6} />
        </Link>
      </HStack>

      <Text textAlign="center" fontSize="sm" color="gray.400">
        &copy; {new Date().getFullYear()} Isabella Lo. All rights reserved.
      </Text>
    </Box>
  );
}
