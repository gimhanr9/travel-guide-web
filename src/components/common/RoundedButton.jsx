import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Colors } from "../../utils/Colors";

const RoundedButton = ({ title, functionality }) => {
  return (
    <Button
      variant="outlined"
      sx={{ background: Colors.light_orange, color: Colors.white }}
      onClick={() => {
        functionality();
      }}
    >
      {title}
    </Button>
  );
};

RoundedButton.propTypes = {
  title: PropTypes.string,
};

export default RoundedButton;
