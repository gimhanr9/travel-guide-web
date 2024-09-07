import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AuroraVillage from "../../../assets/images/Aurora_Village.webp";
import styles from "./AboutSection.module.css";
import Grid from "@mui/material/Grid2";
import RectangularOutlinedButton from "../../common/RectangularOutlinedButton";

const AboutSection = () => {
  return (
    <div className={styles.about__section}>
      <Typography variant="h2">About Us</Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item size={{ xs: 8, md: 4 }}>
          <img src={AuroraVillage} className={styles.about__section__image} />
        </Grid>
        <Grid
          item
          size={{ xs: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
          sx={{ py: 2 }}
        >
          <Typography variant="h5">
            Unlocking the Extraordinary: <br />
            Aurora Village Within Reach, Beyond Belief
          </Typography>

          <Typography variant="h4">Your Ultimate Travel Guide!</Typography>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat{" "}
          </Typography>
          <RectangularOutlinedButton title="Explore Offers" />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
