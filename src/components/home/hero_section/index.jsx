import React from "react";
import { Typography } from "@mui/material";
import Header from "../../main_layout/Header";
import styles from "./HeroSection.module.css";
import RectangularOutlinedButton from "../../common/RectangularOutlinedButton";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <Typography variant="h4" className={styles.hero__subtitle}>
          BEST PLACE TO SEE THE NORTHERN LIGHTS
        </Typography>
        <Typography variant="h1" className={styles.hero__title}>
          AURORA VILLAGE
        </Typography>
        <RectangularOutlinedButton title="Explore Offers" />
      </div>
    </div>
  );
};

export default HeroSection;
