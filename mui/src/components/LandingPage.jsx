import { landingConfig } from "../config/landingConfig"
import Box from '@mui/material/Box'
import HeroHeading from "./HeroHeading"
import HeroSubHeading from "./HeroSubHeading";
import HeroButton from "./HeroButton";
import HeroImage from "./HeroImage";

const LandingPage = ({ config = landingConfig }) => {
  const { title, subtitle, cta, image } = config;
  return (
    <Box>
      <HeroHeading>{title}</HeroHeading>
      <HeroSubHeading>{subtitle}</HeroSubHeading>
      {cta && <HeroButton text={cta.text} onClick={cta.onClick} />}
      {image && <HeroImage src={image.src} alt={image.alt}/>}
    </Box>
  )
}

export default LandingPage
