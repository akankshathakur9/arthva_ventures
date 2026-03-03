import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Properties = () => {
  const properties = [
    {
      city: "Pune",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      desc: "30+ Premium Rooms | Corporate Friendly | Conference Facilities | Long-Term Stay Solutions",
    },
    {
      city: "Jaipur",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      desc: "30+ Luxury Rooms | Wedding & Event Friendly | Banquet & Lawn Setup",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Our Properties
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {properties.map((property) => (
            <Grid item xs={12} md={6} key={property.city}>
              <Card>
                <CardMedia component="img" height="250" image={property.img} />
                <CardContent>
                  <Typography variant="h5">
                    Arthva Ventures – {property.city}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {property.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Properties;