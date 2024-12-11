import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';

const PartyCustomization = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#000', minHeight: '100vh' }}>
      <Typography variant="h4" color="white" mb={4}>
        Choose Your Virtual Party Resources
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Theme Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" mb={2}>Themes</Typography>
            <Button variant="contained" color="primary">Beach Party</Button>
            <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>Formal Party</Button>
          </Box>
        </Grid>

        {/* Game Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" mb={2}>Games</Typography>
            <Button variant="contained" color="primary">Trivia</Button>
            <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>Charades</Button>
          </Box>
        </Grid>

        {/* Background Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" mb={2}>Backgrounds</Typography>
            <Button variant="contained" color="primary">Beach</Button>
            <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>Nature</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartyCustomization;