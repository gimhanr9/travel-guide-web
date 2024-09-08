import { Typography } from "@mui/material";
import React from "react";
import styles from "./AboutSection.module.css";
import Grid from "@mui/material/Grid2";
import RectangularOutlinedButton from "../../common/RectangularOutlinedButton";
import imageMap from "../../../assets/imageMap";

const AboutSection = () => {
  return (
    <div className={styles.about__section}>
      <Typography variant="h2" className="section-title">
        About Us
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item size={{ xs: 10, md: 4 }}>
          <img
            src={imageMap.Aurora_Village}
            className={styles.about__section__image}
            alt="About section - Aurora Village"
          />
        </Grid>
        <Grid
          item
          size={{ xs: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ py: 2 }}
        >
          <Typography variant="h5">
            Unlocking the Extraordinary: <br />
            Aurora Village Within Reach, Beyond Belief
          </Typography>

          <Typography variant="h4" className="section-title">
            Your Ultimate Travel Guide!
          </Typography>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat{" "}
          </Typography>
          <RectangularOutlinedButton title="Explore offers" />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
