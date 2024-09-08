import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import imageMap from "../../assets/imageMap";
import sections from "../../data/sections";
import LinkButton from "../common/LinkButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Colors } from "../../utils/Colors";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: `url(${imageMap.Forest_Camping})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem 0",
        color: Colors.white,
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Left Section - Logo */}
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h6">JOHN DOE</Typography>
        </Grid>

        {/* Center Section - Newsletter and Social Icons */}
        <Grid item size={{ xs: 12, md: 6 }} justifyContent="center">
          <Typography variant="h5" sx={{ mb: 2 }}>
            YOUR ULTIMATE TRAVEL GUIDE!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Subscribe for newsletter"
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "4px 0 0 4px",
                width: { xs: "60%", sm: "70%" }, // Responsive width
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: "0 4px 4px 0",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <ArrowForwardIosIcon sx={{ color: Colors.black }} />
            </Button>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, md: 3 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {sections.map((section, index) => (
              <LinkButton
                key={index}
                title={section.location}
                to={section.to}
                handleClick={() => console.log("Button click")}
              />
            ))}
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 3 }}>
        © 2024 John Doe. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
