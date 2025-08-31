import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import Footer from "../components/Footer";

const Landing= () => {
  return (
    <Box minHeight={"100vh"} bgcolor={"grey.200"}>
      <Container maxWidth="lg">
        <Navbar />
        <LandingPage />
        <SectionOne />
        <SectionTwo />
        {/* <SectionThree /> */}
        <Footer siteName={"siteName"} />
      </Container>
      {/* <SectionFour /> */}
    </Box>
  );
}

export default Landing
