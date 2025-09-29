import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, InfoIcon } from "@chakra-ui/icons";

export default function ContactSection() {
  return (
    <Box py={16} px={8} bg="gray.100">
      <Box maxW="4xl" mx="auto">
        <Heading fontSize={["2xl", "3xl", "4xl"]} mb={6}>
          Get in Touch
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={10}>
          Whether you want to collaborate, ask a question, or just say hi, feel free
          to reach out. I’d love to hear from you!
        </Text>

        <Flex
          direction={["column", "column", "row"]}
          gap={10}
          justify="space-between"
        >
          {/* Contact Info */}
          <Stack spacing={4} flex="1">
            <Box>
              <Flex align="center" gap={2}>
                <EmailIcon />
                <Text>Email: </Text>
              </Flex>
              <Link href="mailto:isabella@example.com" color="blue.500">
                isabella@example.com
              </Link>
            </Box>
            <Box>
              <Flex align="center" gap={2}>
                <PhoneIcon />
                <Text>Phone: </Text>
              </Flex>
              <Text>(123) 456-7890</Text>
            </Box>
            <Box>
              <Flex align="center" gap={2}>
                <InfoIcon />
                <Text>Social: </Text>
              </Flex>
              <Link href="https://linkedin.com/in/yourprofile" color="blue.500">
                LinkedIn
              </Link>{" "}
              |{" "}
              <Link href="https://github.com/yourprofile" color="blue.500">
                GitHub
              </Link>
            </Box>
          </Stack>

          {/* Contact Form */}
          <Box flex="1">
            <Stack spacing={4}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button colorScheme="blue">Send Message</Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
