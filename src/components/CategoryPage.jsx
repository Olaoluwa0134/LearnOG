import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import PublicHeader from "./PublicHeader";
import scienceImage from "../assets/science.jpg";
import mathImage from "../assets/mathematics.jpeg";
import generalImage from "../assets/general.jpeg";
import entertainmentImage from "../assets/entertainment.jpeg";
import politicsImage from "../assets/politics.jpeg";
import { Link } from "react-router";
import { InsertEmoticon } from "@mui/icons-material";

const cards = [
  {
    title: "General Knowledge",
    description: "Test your general knowledge",
    image: generalImage,
    path: "general-knowledge",
  },
  {
    title: "Science",
    description: "Test your science knowledge",
    image: scienceImage,
    path: "science",
  },
  {
    title: "Mathematics",
    description: "Test your math knowledge",
    image: mathImage,
    path: "mathematics",
  },
  {
    title: "Entertainment",
    description: "Test your entertainment knowledge",
    image: entertainmentImage,
    path: "entertainment",
  },
  {
    title: "Politics",
    description: "Test your politics knowledge",
    image: politicsImage,
    path: "politics",
  },
];

const CategoryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Handle card click to highlight the selected card
  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };


  const handleCategorySubmit = (index) => {
    const path = cards[index].path;
    window.location.href = `/quiz/${path}`;
  };

  return (
    <Container maxWidth="lg" disableGutters>
      <PublicHeader />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "80%", padding: 4 }}>
          <Grid container spacing={6} justifyContent="center">
            {cards.map((card, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Grid
                  key={index}
                  sx={{
                    textAlign: "center",
                    width: "250px",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
                    transform: isSelected ? "scale(1.05)" : "scale(1)",
                    opacity: isSelected || selectedIndex === null ? 1 : 0.5,

                    cursor: "pointer",
                    "&:hover": {
                      transform: isSelected ? "scale(1.05)" : "scale(1.12)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    onClick={() => handleCardClick(index)}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={card.image}
                      alt={card.title}
                    />
                  </Box>
                  <Typography variant="h6" color="text.secondary">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ padding: 4, maxWidth: "400px", margin: "0 auto" }}>
        <Button
          variant="outlined"
          fullWidth
          disabled={selectedIndex === null}
          component={Link}
          to={`/quiz/${cards[selectedIndex]?.path}`}
          state={{
            selectedItem: cards[selectedIndex],
          }}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryPage;
