import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const SectionFour = () => {
  return (
    <Box bgcolor={"grey.300"}>
      {/* mimic container lg */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          margin: 3,
          px: 3, // ✅ default horizontal padding (theme spacing = 8px * 2)
          py: 6, // ✅ vertical padding
          maxWidth: "1200px",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          
        >
          Section Heading
        </Typography>

        <Box display="flex" gap={2}  alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 2,
              height: 44,
              "&:hover": { bgcolor: "grey.900" },
            }}
          >
            Button
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "grey.300",
              color: "black",
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 2,
              height: 44,
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              "&:hover": { bgcolor: "grey.400" },
            }}
          >
            Secondary Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFour;
