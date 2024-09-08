import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: "url(https://example.com/your-background-image.jpg)", // Use your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem 0",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Left Section - Logo */}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            JOHN DOE
          </Typography>
        </Grid>

        {/* Center Section - Newsletter and Social Icons */}
        <Grid item xs={12} sm={6} md={6} lg={5}>
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
            <Button variant="contained" sx={{ borderRadius: "0 4px 4px 0" }}>
              {/* <ArrowForwardIcon /> */}
            </Button>
          </Box>
          <Typography sx={{ mt: 2 }}>Follow us on</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            {/* <IconButton>
              <WhatsApp sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <Instagram sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <Facebook sx={{ color: "#fff" }} />
            </IconButton> */}
          </Box>
        </Grid>

        {/* Right Section - Navigation */}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
            Home
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
            About
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
            Packages
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Reviews
          </Typography>
          <Typography variant="body1">Contact us</Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mt: 3 }}>
        © 2024 John Doe. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
