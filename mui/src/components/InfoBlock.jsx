import { Box, Typography } from "@mui/material";

const InfoBlock = ({ heading, text }) => (
  <Box>
    <Typography variant="subtitle1" fontWeight={500} mb={0.5}>
      {heading}
    </Typography>
    <Typography variant="body2" lineHeight={1.5} color="text.secondary">
      {text}
    </Typography>
  </Box>
);

export default InfoBlock;
