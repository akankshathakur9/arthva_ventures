import { Box, Typography, Container, List, ListItem } from "@mui/material";

const Corporate = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Corporate Hospitality Solutions
        </Typography>

        <Typography sx={{ mt: 3 }}>
          Arthva Ventures specializes in large-scale corporate stays,
          long-term accommodations, and business event hosting in Pune and Jaipur.
        </Typography>

        <List sx={{ mt: 3 }}>
          <ListItem>• Bulk Room Reservations (30+ Rooms)</ListItem>
          <ListItem>• Long-Term Corporate Stays</ListItem>
          <ListItem>• Custom Meal Plans</ListItem>
          <ListItem>• Conference & Meeting Setup</ListItem>
          <ListItem>• Dedicated Hospitality Support</ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Corporate;