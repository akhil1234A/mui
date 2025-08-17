import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const ContactForm = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact me
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="First name" placeholder="Jane" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Las name" placeholder="Smitherton" />
          </Grid>
        </Grid>
        <Box mb={2}>
          <TextField
            fullWidth
            type="email"
            label="Email addres"
            placeholder="akhilanwarm@gmail.com"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Your message"
            placeholder="Enter your question or message"
            multiline
            rows={6}
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: "black", "&:hover": { bgcolor: "grey.800"}}}>
            Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
