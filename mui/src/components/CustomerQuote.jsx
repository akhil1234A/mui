import React from "react";
import { Box, Typography, Avatar, Card } from "@mui/material";

const CustomerQuote = ({ quote, name, description, avatar }) => {
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 2,
        border: "1px solid #E6E6E6",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 400,
      }}
    >
      {/* Quote */}
      <Typography variant="h6" fontWeight={500} sx={{ lineHeight: 1.5 }}>
        “{quote}”
      </Typography>

      {/* Avatar + Info */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={avatar || "https://placehold.co/45x45"}
          sx={{ width: 45, height: 45 }}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="body1" fontWeight={500}>
            {name}
          </Typography>
          <Typography variant="body2" fontWeight={500} color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomerQuote;
