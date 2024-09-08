import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { MdCheckCircle } from "react-icons/md";
import PropTypes from "prop-types";
import RectangularOutlinedButton from "./RectangularOutlinedButton";
import imageMap from "../../assets/imageMap";
import { Colors } from "../../utils/Colors";

const PackageCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        minHeight: 320,
        backgroundImage: `url(${imageMap[props.imageUrl]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: "subtitle2", color: Colors.white }}
        sx={{
          textAlign: "center",
        }}
      />
      <Divider />
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item>
            <List dense>
              {props.inclusions?.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ m: 0, p: 0 }}>
                  <ListItemIcon>
                    <MdCheckCircle color="yellow" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      variant: "body1",
                      color: Colors.white,
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ color: Colors.white }}>
              ${props.price} / adult
            </Typography>
          </Grid>
          <Grid item>
            <RectangularOutlinedButton title="More Details" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PackageCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  inclusions: PropTypes.array,
};

export default PackageCard;
