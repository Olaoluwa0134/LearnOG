import { Button, Grid2, Typography } from "@mui/material";
import React from "react";

const PublicHeader = () => {
  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ paddingX: 5 }}
    >
      <Grid2>
        <Typography
          variant="h1"
          align="center"
          color="primary"
          sx={{ fontSize: "2em", fontWeight: "bold" }}
        >
          LearnOG
        </Typography>
      </Grid2>
      <Grid2 container spacing={2}>
        <Button variant="outlined" color="secondary">
          Register
        </Button>
        <Button variant="contained">Login</Button>
      </Grid2>
    </Grid2>
  );
};

export default PublicHeader;
