import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

const Locations = () => {
  const data = [
    {
      city: "Pune",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      desc: "30+ Rooms | Corporate Friendly | Conference Facilities",
    },
    {
      city: "Jaipur",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      desc: "30+ Rooms | Wedding & Event Friendly | Banquet Setup",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Locations
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {data.map((item) => (
            <Grid item xs={12} md={6} key={item.city}>
              <Card>
                <CardMedia component="img" height="250" image={item.img} />
                <CardContent>
                  <Typography variant="h5">
                    Arthva Ventures – {item.city}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.desc}
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

export default Locations;