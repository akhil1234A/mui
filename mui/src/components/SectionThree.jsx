import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CustomerQuote from './CustomerQuote';

const data = [
  {
    heading: "A terrific piece of praise",
    card_image: "LandingPage/Avatar.png",
    name: "Name",
    description: "Description",
  },
  {
    heading: "A fantastic bit of feedback",
    card_image: "LandingPage/Avatar-1.png",
    name: "Name",
    description: "Description",
  },
  {
    heading: "A genuinely glowing review",
    card_image: "LandingPage/Avatar-2.png",
    name: "Name",
    description: "Description",
  },
];

const SectionThree = () => {
  return (
    <Box pb={16}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3 }}
        fontWeight={600}
        gutterBottom
      >
        Section Heading
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={2}
      >
        {data.map((card, idx) => (
          <CustomerQuote
            key={idx}
            quote={card.heading}
            name={card.name}
            description={card.description}
            avatar={card.card_image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SectionThree
