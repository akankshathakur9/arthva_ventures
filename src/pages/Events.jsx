import { Box, Typography, Container, List, ListItem } from "@mui/material";

const Events = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Events & Celebrations
        </Typography>

        <Typography sx={{ mt: 3 }}>
          Our Jaipur and Pune properties are ideal for weddings,
          corporate offsites, annual meetings, and social gatherings.
        </Typography>

        <List sx={{ mt: 3 }}>
          <ListItem>• Wedding Guest Accommodation</ListItem>
          <ListItem>• Corporate Offsites</ListItem>
          <ListItem>• Annual Business Meetings</ListItem>
          <ListItem>• Banquet & Lawn Setup</ListItem>
          <ListItem>• Catering & Hospitality Management</ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Events;