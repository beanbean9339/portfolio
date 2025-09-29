import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function App() {
  return (
    <Box
      maxW="container.md"
      mx="auto"
      mt={10}
      px={4}
      animation={`${fadeIn} 1s ease forwards`}
    >
      <Heading mb={4}>Chakra UI is Working!</Heading>
      <Text mb={4}>
        If you see this styled text, you’re good to go.
      </Text>
      <Button colorScheme="teal">Test Button</Button>
    </Box>
  );
}

export default App;
