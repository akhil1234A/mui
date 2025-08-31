import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

const Navbar = ({
  brand = "Site Name",
  links = DEFAULT_NAV_LINKS,
  cta = "Sign Up",
  ctaHref = "/signup",
}) => {
  return (
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={6}
    >
      <Typography variant="h6" fontWeight={600}>
        {brand}
      </Typography>

      <Box display="flex" alignItems="center" gap={3}>
        {links?.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            underline="none"
            color="text.primary"
            sx={{ fontWeight: 500, "&:hover": { color: "primary.main" } }}
          >
            {label}
          </Link>
        ))}

        {cta && (
          <Button
            href={ctaHref}
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "grey.900" },
            }}
          >
            {cta}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
