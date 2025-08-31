import Typography from "@mui/material/Typography";

const HeroSubHeading = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      maxWidth={"sm"}
      mb={3}
    >
      {children}
    </Typography>
  );
};

export default HeroSubHeading;
