import { Box, Typography, Container } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Contact Arthva Ventures
        </Typography>

        <Typography sx={{ mt: 3 }}>
          📍 Pune Location: [Full Address Here]
        </Typography>

        <Typography>
          📍 Jaipur Location: [Full Address Here]
        </Typography>

        <Typography sx={{ mt: 3 }}>
          📞 Phone: +91 XXXXX XXXXX
        </Typography>

        <Typography>
          📧 Email: info@arthvaventures.com
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Operating 24/7 – Corporate & Event Hospitality
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;