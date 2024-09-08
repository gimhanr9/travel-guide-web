import { Typography } from "@mui/material";
import React from "react";

import styles from "./ContactSection.module.css";
import Grid from "@mui/material/Grid2";
import RectangularOutlinedButton from "../../common/RectangularOutlinedButton";
import imageMap from "../../../assets/imageMap";

const ContactSection = () => {
  return (
    <div className={styles.contact__section}>
      <Typography variant="h2" className="section-title">
        Contact Us
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item size={{ xs: 8, md: 4 }}>
          <img
            src={imageMap.Aurora_Light}
            className={styles.contact__section__image}
          />
        </Grid>
        <Grid
          item
          size={{ xs: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          sx={{ py: 2 }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat
          </Typography>
          <RectangularOutlinedButton title="Contact us for great offers" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactSection;
