import Button from "@mui/material/Button";

const HeroButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" sx={{ bgcolor: "text.primary", mb: 5 }} onClick={onClick}>
      {text}
    </Button>
  );
};

export default HeroButton;
