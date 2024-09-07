import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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

const PackageCard = (props) => {
  return (
    <Card sx={{ maxWidth: 330, minHeight: 320 }}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: "subtitle2" }}
        sx={{ textAlign: "center" }}
      />
      <Divider />
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item>
            <List dense>
              {props.inclusions?.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ m: 0, p: 0 }}>
                  <ListItemIcon>
                    <MdCheckCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">${props.price} / adult</Typography>
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
