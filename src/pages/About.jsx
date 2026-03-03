import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Page Title */}
        <Typography variant="h3" gutterBottom>
          About Arthva Ventures
        </Typography>

        {/* Introduction */}
        <Typography sx={{ mt: 3 }}>
          Arthva Ventures is a premium hospitality provider offering
          fully serviced 3-star luxury accommodations in Pune and Jaipur.
          We specialize in corporate stays, bulk bookings, and event
          hospitality — delivering comfort that feels like home.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Unlike conventional hotels, our focus is not on individual
          room bookings. We are designed to support corporate teams,
          business delegations, wedding guests, and large-scale events
          with personalized attention and seamless service.
        </Typography>

        {/* Mission Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>

          <Paper sx={{ p: 4, mt: 2 }}>
            <Typography>
              Our mission is simple — to make every guest feel at home.
              We prioritize comfort, cleanliness, care, and customer
              satisfaction above everything else. Every stay is managed
              with professionalism and warmth.
            </Typography>
          </Paper>
        </Box>

        {/* Vision Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Vision
          </Typography>

          <Paper sx={{ p: 4, mt: 2 }}>
            <Typography>
              To become a trusted corporate hospitality partner across
              India by consistently delivering high-quality stays and
              event experiences with reliability and excellence.
            </Typography>
          </Paper>
        </Box>

        {/* Why Choose Us */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Arthva Ventures?
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                30+ Rooms Per Property
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                Dedicated Corporate Support
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                Event & Wedding Accommodation
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                Home-Like Comfort with Professional Service
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;