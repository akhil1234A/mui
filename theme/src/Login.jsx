// LoginPage.tsx
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", boxShadow: 6 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center" mb={2}>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" fontWeight="bold">
              Sign in
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
              required
            />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Typography variant="body2" color="text.secondary" align="center">
              Forgot password?
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
