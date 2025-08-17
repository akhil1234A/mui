import Box from "@mui/material/Box";

const HeroImage = () => {
  return (
    <Box
      sx={{
        bgcolor: "red",
        borderRadius: 2,
        overflow: "hidden",
        height: { xs: 400, lg: "100%" },
      }}
    >
      <img
        src="Image.png"
        alt="Person with read beanie"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default HeroImage;
