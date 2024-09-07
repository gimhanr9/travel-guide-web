import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { Colors } from "../../utils/Colors";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Box minHeight="100vh" height="100%">
        <Box>{props.children}</Box>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
