import React from "react";
import HeroSection from "./hero_section";
import AboutSection from "./about_section";
import styles from "./SecondarySection.module.css";
import PackagesSection from "./packages_section";
import ContactSection from "./contact_section";

const HomeComponent = () => {
  return (
    <div>
      <HeroSection />
      <div className={styles.secondary__section}>
        <AboutSection />
        <PackagesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomeComponent;
