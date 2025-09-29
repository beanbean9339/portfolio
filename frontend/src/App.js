import React from "react";
import { Box, Heading } from "@chakra-ui/react";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DrawingsSection from "./components/DrawingsSection";
import PhotographySection from "./components/PhotographySection";
import PodcastSection from "./components/PodcastSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import VideoEditingSection from "./components/VideoEditingSection";

function App() {
  return (
    <Box>
      <Navbar />

      <Hero />

      {/* Use placeholders for now */}
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <DrawingsSection />
      <PhotographySection />
      <VideoEditingSection />
      <PodcastSection />
      <ContactSection />

      <Footer />
    </Box>
  );
}

export default App;
