import React from "react";
import { IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "../../main_layout/Header";
import styles from "./HeroSection.module.css";
import RectangularOutlinedButton from "../../common/RectangularOutlinedButton";

function HeroSection() {
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
      <div className={styles.hero__social}>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default HeroSection;
