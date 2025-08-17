import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const AboutSection = () => {
  return (
    <Paper variant="outlined" sx={{ p: 4, mb: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        About
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Subheading for description or instructions
      </Typography>
      <Typography component="p">
        Body text for your whole article or post. We'll put in some lorem ipsum
        to show how a filled-out page might look:
      </Typography>
      <Typography>
        Excepteur efficient emerging, minim veniam anim aute carefully curated
        Ginza conversation exquisite perfect nostrud nisi...
      </Typography>
    </Paper>
  );
};

export default AboutSection;
