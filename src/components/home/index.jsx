import React from "react";
import HeroSection from "./hero_section";
import AboutSection from "./about_section";
import PackagesSection from "./packages_section";
import ContactSection from "./contact_section";
import TestimonialsSection from "./testimonials_section";
import { Box } from "@mui/material";

const HomeComponent = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <div className="secondary-section-main">
        <Box mt={2} py={1} px={{ xs: 0, md: 7 }}>
          <section id="about">
            <AboutSection />
          </section>
        </Box>
        <Box mt={1} px={{ xs: 0, md: 7 }}>
          <section id="packages">
            <PackagesSection />
          </section>
        </Box>
        <Box mt={1} px={{ xs: 2, md: 7 }}>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        </Box>
        <Box mt={1} mb={5} px={{ xs: 0, md: 7 }}>
          <section id="contact">
            <ContactSection />
          </section>
        </Box>
      </div>
    </div>
  );
};

export default HomeComponent;
