import { Box, Container, IconButton, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


const Layout = ({ children, toggleTheme, mode }) => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h6">My App</Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Box>

      <Container sx={{ py: 4 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
