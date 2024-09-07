import React from "react";
import styles from "./HeroSection.module.css";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "../../main_layout/Header";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <h2 className={styles.hero__subtitle}>
          BEST PLACE TO SEE THE NORTHERN LIGHTS
        </h2>
        <h1 className={styles.hero__title}>AURORA VILLAGE</h1>
        <button className={styles.hero__button}>Explore offers</button>
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
