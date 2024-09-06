import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { Colors } from "../../utils/Colors";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Box minHeight="100vh" height="100%" background={Colors.background}>
        <Box pl={8} pt={2} pr={7} pb={9}>
          {props.children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
