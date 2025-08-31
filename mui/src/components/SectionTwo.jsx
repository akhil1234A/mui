import { Box } from "@mui/material";
import SectionHeading from "./SectionHeading";
import InfoBlock from "./InfoBlock";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const data = [
  {
    heading: "Subheading",
    text: "Body text for whatever you’d like to expand on the main point.",
  },
  {
    heading: "Subheading",
    text: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes.",
  },
  {
    heading: "Subheading",
    text: "Body text for whatever you’d like to add more to the main point. It provides details, explanations, and context.",
  },
];

const SectionTwo = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      gap={{ xs: 4, md: 6 }}
      py={8}
    >
      {/* Left Content */}
      <Box flex={1} pr={{ md: 4 }}>
        <SectionHeading>Section Heading</SectionHeading>

        <Box display="flex" flexDirection="column" gap={4} mt={3}>
          {data.map((item, idx) => (
            <InfoBlock key={idx} heading={item.heading} text={item.text} />
          ))}
        </Box>

        <Box display="flex" gap={2} mt={4}>
          <PrimaryButton>Button</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
        </Box>
      </Box>

      {/* Right Image */}
      <Box flex={1} mt={{ xs: 3, md: 0 }}>
        <Box
          component="img"
          src="LandingPage/Image-3.png"
          alt="Hero Image"
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 560 },
            height: { xs: 320, md: 400 },
            objectFit: "cover",
            borderRadius: "8px 0 0 8px",
            display: "block",
            mx: { xs: "auto", md: 0 },
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionTwo;
