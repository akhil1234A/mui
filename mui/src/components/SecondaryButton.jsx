import { Button } from "@mui/material";

const SecondaryButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      bgcolor: "grey.300",
      color: "black",
      px: 2.5,
      py: 1,
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 2,
      height: 44,
      boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
      "&:hover": { bgcolor: "grey.400" },
    }}
    {...props}
  >
    {children}
  </Button>
);

export default SecondaryButton;
