import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Colors } from "../../utils/Colors";

const RectangularOutlinedButton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={{ color: Colors.white, border: `1px solid ${Colors.white}` }}
    >
      {props.title}
    </Button>
  );
};

RectangularOutlinedButton.propTypes = {
  title: PropTypes.string,
};
export default RectangularOutlinedButton;
