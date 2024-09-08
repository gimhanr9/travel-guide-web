import React from "react";
import HeroSection from "./hero_section";
import AboutSection from "./about_section";
import PackagesSection from "./packages_section";
import ContactSection from "./contact_section";
import TestimonialsSection from "./testimonials_section";

const HomeComponent = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <div className="secondary-section-main">
        <section id="about">
          <AboutSection />
        </section>
        <section id="packages">
          <PackagesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default HomeComponent;
