import React, { useState } from "react";
import { Box, Fab, IconButton } from "@mui/material";
import {
  WhatsApp,
  Instagram,
  Twitter,
  Facebook,
  ContactMail,
} from "@mui/icons-material";
import { Colors } from "../../utils/Colors";

const ContactFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <Fab
        color="primary"
        onClick={handleToggle}
        sx={{
          backgroundColor: Colors.light_orange,
          "&:hover": { backgroundColor: "#115293" },
        }}
      >
        <ContactMail />
      </Fab>

      {/* Expandable Icons Container */}
      {isOpen && (
        <div className="contact-fab">
          <IconButton aria-label="whatsapp" sx={{ color: Colors.whatsapp }}>
            <WhatsApp />
          </IconButton>
          <IconButton aria-label="instagram" sx={{ color: Colors.instagram }}>
            <Instagram />
          </IconButton>
          <IconButton aria-label="twitter" sx={{ color: Colors.twitter }}>
            <Twitter />
          </IconButton>
          <IconButton aria-label="facebook" sx={{ color: Colors.facebook }}>
            <Facebook />
          </IconButton>
        </div>
      )}
    </Box>
  );
};

export default ContactFloatingButton;
