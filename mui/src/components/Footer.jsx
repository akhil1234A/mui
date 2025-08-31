import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

const DEFAULT_FOOTER_LINKS = [
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Blog", "Help Center"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
];

const DEFAULT_SOCIAL_ICONS = [
  { Icon: Facebook, label: "Facebook", url: "#" },
  { Icon: Linkedin, label: "LinkedIn", url: "#" },
  { Icon: Instagram, label: "Instagram", url: "#" },
  { Icon: Youtube, label: "YouTube", url: "#" },
];

const SocialIcons = ({ icons = DEFAULT_SOCIAL_ICONS }) => (
  <Box display="flex" gap={2}>
    {icons.map(({ Icon, label, url }) => (
      <Link
        key={label}
        href={url}
        aria-label={label}
        underline="none"
        color="inherit"
      >
        <Icon size={20} aria-hidden="true" />
      </Link>
    ))}
  </Box>
);

const Footer = ({
  brand = "Site Name",
  footerLinks = DEFAULT_FOOTER_LINKS,
  socialIcons = DEFAULT_SOCIAL_ICONS,
}) => {
  return (
    <Box
      component="footer"
      sx={{ py: 5, mt: 5 }}
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      gap={4}
    >
      {/* Left section */}
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6" fontWeight={600}>
          {brand}
        </Typography>
        <SocialIcons icons={socialIcons} />
      </Box>

      {/* Right section (footer links) */}
      <Box display="flex" gap={6} flexWrap="wrap">
        {footerLinks.map((section) => (
          <Box
            key={section.title}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {section.title}
            </Typography>
            {section.links.map((link) => (
              <Link key={link} href="#" underline="none" color="text.secondary">
                {link}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
