import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  Language as LanguageIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

const LanguageDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    handleClose();
  };
  return (
    <div>
      <IconButton
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        disableRipple
        sx={{ display: "flex", alignItems: "center" }}
      >
        <LanguageIcon sx={{ fontSize: 18 }} />
        <span className="selected-language">
          {
            props.languages?.find((lang) => lang.code === selectedLanguage)
              ?.label
          }
        </span>
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {props.languages?.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

LanguageDropdown.propTypes = {
  languages: PropTypes.array,
};

export default LanguageDropdown;
