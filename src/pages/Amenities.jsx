import { Box, Typography, Container, Grid, Paper } from "@mui/material";

const amenities = [
  "Air Conditioning",
  "Premium Bedding",
  "High-Speed WiFi",
  "Daily Housekeeping",
  "In-House Catering",
  "Laundry Services",
  "Conference Facilities",
  "Banquet Setup",
  "24/7 Reception",
  "Ample Parking",
];

const Amenities = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Amenities
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {amenities.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Paper sx={{ p: 3, textAlign: "center" }}>
                {item}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Amenities;