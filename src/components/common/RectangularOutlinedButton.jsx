import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const RectangularOutlinedButton = (props) => {
  return <Button variant="outlined">{props.title}</Button>;
};

RectangularOutlinedButton.propTypes = {
  title: PropTypes.string,
};
export default RectangularOutlinedButton;
