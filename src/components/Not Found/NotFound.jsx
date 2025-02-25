import React from "react";
import { Grid, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" sx={{ position: "absolute", top: "40%", left: "42%" }} color="error">
        Not Found page
      </Typography>
    </Grid>
  );
};

export default NotFound;
