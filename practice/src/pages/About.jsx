import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import HeroImage from "../components/HeroImage";

const About = () => {
  const siteName = "Site Name";

  return (
    <Box minHeight="100vh" bgcolor="grey.50">
      <Box bgcolor="#fff" borderBottom={1} borderColor="divider">
        <Container maxWidth="lg">
          <Header siteName={siteName} />
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }}
          gap={6}
        >
          <Box>
            <AboutSection />
            <ContactForm />
          </Box>
          <HeroImage />
        </Box>
      </Container>
      <Footer siteName={siteName} />
    </Box>
  );
};

export default About;
