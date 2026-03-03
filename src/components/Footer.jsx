import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: "#0F1B2A", color: "#fff" }}>
      <Container>
        <Typography>
          Arthva Ventures – Pune & Jaipur
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          We specialize in bulk bookings, corporate stays,
          and event hospitality. Individual bookings are not available.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;