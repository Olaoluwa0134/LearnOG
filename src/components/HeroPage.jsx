import React from "react";
import Background from "./Background";
import { Button, Container, Typography, Box, Grid2 } from "@mui/material";
import PublicHeader from "./PublicHeader";

const HeroPage = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          height: "98%",
          width: "100%",
          margin: 0,
          padding: 0,
          zIndex: -1,
        }}
      >
        <Background />
      </Box>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ paddingTop: "2em", height: "0%" }}
      >
        <PublicHeader />

        <Box
          sx={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <Typography variant="h1" align="center" sx={{ fontSize: "3em" }}>
            Test Your Knowledge with Fun Quizzes!
          </Typography>
          <Typography variant="body1" align="center" mt={2}>
            Put your knowledge to test with question curatied just for you.
          </Typography>
          <Grid2 container spacing={2} mt={2}>
            <Button variant="contained" color="secondary">
              Take the Test
            </Button>
            <Button variant="contained">Login</Button>
          </Grid2>
        </Box>
        {/* <Background /> */}
      </Container>
    </>
  );
};

export default HeroPage;
