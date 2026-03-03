import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage:
          "linear-gradient(rgba(15,27,42,0.7), rgba(15,27,42,0.7)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom>
          Hospitality That Feels Like Home
        </Typography>

        <Typography variant="h6" sx={{ mb: 3 }}>
          Premium Corporate Stays & Event Hospitality in Pune & Jaipur.
        </Typography>

        <Button variant="contained" color="secondary" size="large">
          Explore Properties
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;