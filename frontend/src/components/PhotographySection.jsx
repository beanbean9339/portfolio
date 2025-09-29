import React from "react";
import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const photos = [
  { src: "/images/photo1.jpg", alt: "Photo 1" },
  { src: "/images/photo2.jpg", alt: "Photo 2" },
  { src: "/images/photo3.jpg", alt: "Photo 3" },
  { src: "/images/photo4.jpg", alt: "Photo 4" },
  { src: "/images/photo5.jpg", alt: "Photo 5" },
  // Add more photos here
];

export default function PhotographySection() {
  return (
    <Box id="photography-section" py={16} px={4} bg="gray.50">
      <Heading
        textAlign="center"
        mb={12}
        fontSize={["3xl", "4xl"]}
        color="gray.700"
      >
        Photography
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {photos.map((photo, index) => (
          <Box
            key={index}
            overflow="hidden"
            borderRadius="md"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              objectFit="cover"
              w="100%"
              h={["200px", "250px", "300px"]}
            />
            <Text mt={2} textAlign="center" fontWeight="medium" color="gray.600">
              {photo.alt}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
