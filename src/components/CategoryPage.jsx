import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import PublicHeader from "./PublicHeader";
import scienceImage from "../assets/science.jpg";

const cards = [
  {
    title: "General Knowledge",
    description: "Description for Card 1",
    image: "https://via.placeholder.com/200",
  },
  {
    title: "Science",
    description: "Description for Card 2",
    image: scienceImage,
  },
  {
    title: "Mathematics",
    description: "Description for Card 3",
    image: "https://via.placeholder.com/200",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    image: "https://via.placeholder.com/200",
  },
  {
    title: "Card 5",
    description: "Description for Card 5",
    image: "https://via.placeholder.com/200",
  },
];

const CategoryPage = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1); // Start with the second card as center (index 1)

  const handleCardClick = (index) => {
    setCenterIndex(index);
    const cardWidth = 250; // Adjust based on card width + gap
    const scrollPosition = (index - 1) * cardWidth; // Center the selected card
    scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  return (
    <>
      <Container maxWidth="lg" disableGutters paddingTop="32px">
        <PublicHeader />
        <Box sx={{ position: "relative", height: "100vh" }}>
          <Box
            sx={{
              width: "100vw",
              height: "60%",
              top: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                overflowX: "hidden",
                gap: 2,
                padding: 2,
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
                scrollSnapType: "x mandatory", // Snap to card positions
              }}
            >
              {cards.map((card, index) => {
                const isCenter = index === centerIndex;
                const isVisible = Math.abs(index - centerIndex) <= 1;

                return (
                  <Card
                    key={index}
                    onClick={() => handleCardClick(index)}
                    height="30vh"
                    sx={{
                      minWidth: isCenter ? 250 : 200,
                      flexShrink: 0,
                      transform: isCenter ? "scale(1.1)" : "scale(0.9)",
                      opacity: isCenter ? 1 : 0.7,
                      border: "0 solid transparent",
                      filter: isCenter ? "none" : "blur(2px)",
                      transition:
                        "transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease",
                      scrollSnapAlign: "center",
                      visibility: isVisible ? "visible" : "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="90"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent>
                      <Typography variant="h6">{card.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CategoryPage;
