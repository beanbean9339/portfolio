import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import PhotographySection from "../components/PhotographySection";
import DrawingsSection from "../components/DrawingsSection";
import PodcastSection from "../components/PodcastSection";
import VideoEditingSection from "../components/VideoEditingSection";
import SkillSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Box as="main" bg="gray.50">
      <Hero />
      <AboutSection />
      <ProjectSection />
      <PhotographySection />
      <DrawingsSection />
      <PodcastSection />
      <VideoEditingSection />
      <SkillSection />
      <ContactSection />
    </Box>
  );
}
