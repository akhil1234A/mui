import { sectionOneConfig } from "../config/sectionConfig";
import InfoCard from "./InfoCard";
import { Box } from "@mui/material";
import SectionHeading from "./SectionHeading";

const SectionOne = ({ config = sectionOneConfig }) => {
  const { heading, cards } = config;
  return (
    <Box component="section" py={8}>
      <Box py={4}>
        <SectionHeading>{heading}</SectionHeading>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={4}
      >
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default SectionOne;
