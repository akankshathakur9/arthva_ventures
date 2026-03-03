import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage:
            "linear-gradient(rgba(15,27,42,0.75), rgba(15,27,42,0.75)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
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

          <Typography variant="h6" sx={{ mb: 4, maxWidth: 600 }}>
            Premium 3-Star Luxury Stays for Corporate Teams,
            Business Delegations & Grand Events in Pune and Jaipur.
          </Typography>

          <Button
            component={Link}
            to="/properties"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mr: 2 }}
          >
            Explore Properties
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            color="inherit"
            size="large"
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* ================= ABOUT PREVIEW ================= */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome to Arthva Ventures
          </Typography>

          <Typography sx={{ mt: 3, maxWidth: 800 }}>
            Arthva Ventures offers fully serviced 3-star luxury accommodations
            tailored for bulk corporate bookings and event hospitality.
            With 30+ rooms per property in Pune and Jaipur, we are designed
            to support businesses, teams, and large gatherings with comfort,
            reliability, and personalized care.
          </Typography>

          <Button
            component={Link}
            to="/about"
            sx={{ mt: 4 }}
            variant="contained"
            color="primary"
          >
            Learn More
          </Button>
        </Container>
      </Box>

      {/* ================= LOCATIONS ================= */}
      <Box sx={{ py: 10, backgroundColor: "#F5F1E8" }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Our Locations
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    Arthva Ventures – Pune
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    30+ Premium Rooms | Conference Facilities |
                    Corporate-Friendly Infrastructure
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    Arthva Ventures – Jaipur
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    30+ Luxury Rooms | Wedding & Event Hosting |
                    Banquet & Lawn Setup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= CORPORATE HIGHLIGHT ================= */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Designed for Corporate Excellence
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              "Bulk Room Reservations (30+ Rooms)",
              "Long-Term Corporate Stays",
              "Conference & Meeting Setup",
              "Customized Meal Plans",
              "Dedicated Hospitality Support",
              "24/7 Service & Housekeeping",
            ].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Paper sx={{ p: 3, textAlign: "center" }}>
                  {item}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= EVENTS SECTION ================= */}
      <Box sx={{ py: 10, backgroundColor: "#0F1B2A", color: "white" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Perfect Venue for Events & Celebrations
          </Typography>

          <Typography sx={{ mt: 3, maxWidth: 800 }}>
            From corporate offsites and annual meetings to weddings and
            grand celebrations, Arthva Ventures provides complete
            hospitality management ensuring a seamless and memorable
            experience.
          </Typography>

          <Button
            component={Link}
            to="/events"
            variant="contained"
            color="secondary"
            sx={{ mt: 4 }}
          >
            Explore Events
          </Button>
        </Container>
      </Box>

      {/* ================= FINAL CTA ================= */}
      <Box sx={{ py: 8 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Planning a Corporate Stay or Event?
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Connect with Arthva Ventures in Pune or Jaipur today.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Get In Touch
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Home;