import React from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { Colors } from "../../utils/Colors";
import { Button } from "@mui/material";

const LinkButton = (props) => {
  return (
    <Button
      disableRipple
      component={HashLink}
      smooth
      to={props.to}
      onClick={() => {
        props.handleClick();
      }}
      sx={{ color: Colors.white, display: "block" }}
    >
      {props.title}
    </Button>
  );
};

LinkButton.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  handleClick: PropTypes.func,
};

export default LinkButton;
