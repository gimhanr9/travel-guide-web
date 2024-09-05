import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Colors } from "../../utils/Colors";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Box minHeight="100vh" height="100%" background={Colors.background}>
        <Box className="main-content">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              mt={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >

              {props.children}
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;