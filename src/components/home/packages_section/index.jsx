import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./PackagesSection.module.css";
import Grid from "@mui/material/Grid2";
import PackageCard from "../../common/PackageCard";
import packages from "../../../data/packages";
import RoundedButton from "../../common/RoundedButton";

const RenderPackages = ({ showMore }) => {
  if (showMore === true && packages.length > 3) {
    return packages.map((packageItem, index) => (
      <Grid item key={index} size={{ xs: 6, lg: 4 }}>
        <PackageCard
          imageUrl={packageItem.imageUrl}
          title={packageItem.title}
          inclusions={packageItem.inclusions}
          price={packageItem.price}
        />
      </Grid>
    ));
  } else if (showMore === false && packages.length > 3) {
    const topPackages = packages.slice(0, 3);
    return topPackages.map((packageItem, index) => (
      <Grid item key={index} size={{ xs: 6, lg: 4 }}>
        <PackageCard
          imageUrl={packageItem.imageUrl}
          title={packageItem.title}
          inclusions={packageItem.inclusions}
          price={packageItem.price}
        />
      </Grid>
    ));
  } else {
    return packages.map((packageItem, index) => (
      <Grid item key={index} size={{ xs: 6, lg: 4 }}>
        <PackageCard
          imageUrl={packageItem.imageUrl}
          title={packageItem.title}
          inclusions={packageItem.inclusions}
          price={packageItem.price}
        />
      </Grid>
    ));
  }
};

const RenderButton = ({ showMore, functionality }) => {
  if (packages.length > 3) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <RoundedButton
          title={showMore === false ? "Show more" : "Show less"}
          functionality={functionality}
        />
      </Box>
    );
  } else {
    return null;
  }
};

const PackagesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const showMoreOrLess = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.packages__section}>
      <Typography variant="h2">Packages</Typography>
      <Grid container justifyContent="space-between" spacing={2}>
        <RenderPackages showMore={showMore} />
      </Grid>
      <RenderButton showMore={showMore} functionality={showMoreOrLess} />
    </div>
  );
};

export default PackagesSection;
