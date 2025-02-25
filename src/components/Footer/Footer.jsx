import { Container, Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#9e9e9e",
        color: "white",
        py: 2,
        textAlign: "center",
        width: "100%",
        bottom: "0px",
        left: "0px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
          <Typography color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Typography>
          <Typography href="/terms" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Typography>
          <Typography href="/contact" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
