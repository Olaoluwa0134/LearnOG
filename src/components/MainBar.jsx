import { Typography, Box, useTheme, Button, Stack } from "@mui/material";
import React, { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Leaderboard", path: "/leaderboard" },
  { name: "Profile", path: "/profile" },
];

const MainBar = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    window.location.href = navItems[index].path;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        minWidth: "200px",
        maxWidth: "400px",
        backgroundColor: "#CFE4FF",
        padding: 2,
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
      >
        LearnOG
      </Typography>
      <Stack direction="column" spacing={2} sx={{ marginTop: 5 }}>
        {navItems.map((item, index) => (
          <Button
            key={item.name}
            variant="text"
            sx={{
              margin: 1,
              color:
                selectedIndex === index
                  ? theme.palette.common.white
                  : theme.palette.common.black,
              backgroundColor:
                selectedIndex === index ? theme.palette.primary.main : "",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              },
            }}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default MainBar;
