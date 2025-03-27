import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
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
  const [centerIndex, setCenterIndex] = useState(1); // Start with the second card centered
  const cardWidth = 250; // Fixed width for scroll position calculations

  // Handle clicking on a card
  const handleCardClick = (index) => {
    setCenterIndex(index);
    const scrollPosition = index * cardWidth;
    scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  // Update centerIndex based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      const scrollLeft = scrollContainer.scrollLeft;
      const newCenterIndex = Math.round(scrollLeft / cardWidth);
      setCenterIndex(newCenterIndex);
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" disableGutters>
      <PublicHeader />
      <Box sx={{ position: "relative", height: "100vh" }}>
        <Box
          sx={{
            width: "60%",
            margin: "0 auto",
            height: "50%",
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
              overflowX: "auto",
              gap: 2,
              padding: 2,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {cards.map((card, index) => {
              const isCenter = index === centerIndex;
              const isVisible = Math.abs(index - centerIndex) <= 2;

              return (
                <Card
                  key={index}
                  onClick={() => handleCardClick(index)}
                  sx={{
                    minWidth: isCenter ? 250 : 200,
                    flexShrink: 0,
                    transform: isCenter ? "scale(1.1)" : "scale(0.9)",
                    opacity: isCenter ? 1 : 0.7,
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
  );
};

export default CategoryPage;
b.