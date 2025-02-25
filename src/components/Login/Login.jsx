import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{ p: 4, mt: 8, mb: 11, textAlign: "center", borderRadius: 2 }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Don't have an account?
            <Link to={"/register"}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
