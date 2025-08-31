import { Button } from "@mui/material";

const PrimaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      bgcolor: "black",
      px: 2.5,
      py: 1,
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 2,
      height: 44,
      "&:hover": { bgcolor: "grey.900" },
    }}
    {...props}
  >
    {children}
  </Button>
);

export default PrimaryButton;
