import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = ({ siteName }) => {
  return (
    <Box
      component="footer"
      bgcolor="white"
      borderTop={1}
      borderColor="divider"
      py={6}
      mt={8}
    >
      <Box maxWidth="lg" mx="auto" px={2}>
        <Grid container spacing={6} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>{siteName}</Typography>
            <Box display="flex" gap={2} mt={1}>
                {[Facebook, Linkedin, Youtube, Instagram].map((Icon,idx)=>(
                    <Icon key={idx} size={20} style={{cursor:"pointer"}}/>
                ))}
            </Box>
          </Grid>
          {[1,2,3].map((topic)=>(
            <Grid key={topic} item xs={12} md={3}>
            <Typography fontWeight="medium" gutterBottom>
              Topic
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5} mt={1}>
              <Link href="#" color="text.secondary" underline="none">
                Page
              </Link>
              <Link href="#" color="text.secondary" underline="none">
                Page
              </Link>
              <Link href="#" color="text.secondary" underline="none">
                Page
              </Link>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
