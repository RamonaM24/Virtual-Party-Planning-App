import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import './PartyCustomization.css';

const PartyCustomization = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const themes = ['Beach Party', 'Formal Party'];
  const games = ['Trivia', 'Charades'];
  const backgrounds = ['Beach', 'Nature'];

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const getContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Box className="card">
            <Typography variant="h6">Themes</Typography>
            <Button variant="contained" color="primary">{themes[0]}</Button>
            <Button variant="contained" color="secondary">{themes[1]}</Button>
          </Box>
        );
      case 1:
        return (
          <Box className="card">
            <Typography variant="h6">Games</Typography>
            <Button variant="contained" color="primary">{games[0]}</Button>
            <Button variant="contained" color="secondary">{games[1]}</Button>
          </Box>
        );
      case 2:
        return (
          <Box className="card">
            <Typography variant="h6">Backgrounds</Typography>
            <Button variant="contained" color="primary">{backgrounds[0]}</Button>
            <Button variant="contained" color="secondary">{backgrounds[1]}</Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
        <Typography variant="h4">Party Customization</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          {getContent()}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', width: '100%' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handlePrevious}
              startIcon={<ArrowBackIos />}
              disabled={currentStep === 0}
              sx={{ width: '48%' }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleNext}
              endIcon={<ArrowForwardIos />}
              disabled={currentStep === 2}
              sx={{ width: '48%' }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PartyCustomization;




// import React, { useState } from 'react';
// import { Button, Box, Typography } from '@mui/material';
// import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

// const PartyCustomization = () => {
//   const [activeSection, setActiveSection] = useState('themes');

//   // Function to change section
//   const handleNext = () => {
//     if (activeSection === 'themes') {
//       setActiveSection('games');
//     } else if (activeSection === 'games') {
//       setActiveSection('backgrounds');
//     }
//   };

//   const handlePrev = () => {
//     if (activeSection === 'backgrounds') {
//       setActiveSection('games');
//     } else if (activeSection === 'games') {
//       setActiveSection('themes');
//     }
//   };

//   return (
//     <Box sx={{ padding: '20px', textAlign: 'center' }}>
//       <Typography variant="h4" gutterBottom>Party Customization</Typography>

//       {/* Render sections based on the active section */}
//       {activeSection === 'themes' && (
//         <Box sx={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
//           <Typography variant="h5">Themes</Typography>
//           <Button variant="contained" color="primary">Beach Party</Button>
//           <Button variant="contained" color="secondary">Formal Party</Button>
//         </Box>
//       )}

//       {activeSection === 'games' && (
//         <Box sx={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
//           <Typography variant="h5">Games</Typography>
//           <Button variant="contained" color="primary">Trivia</Button>
//           <Button variant="contained" color="secondary">Charades</Button>
//         </Box>
//       )}

//       {activeSection === 'backgrounds' && (
//         <Box sx={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
//           <Typography variant="h5">Backgrounds</Typography>
//           <Button variant="contained" color="primary">Beach</Button>
//           <Button variant="contained" color="secondary">Nature</Button>
//         </Box>
//       )}

//       {/* Navigation buttons */}
//       <Box sx={{ marginTop: '20px' }}>
//         <Button onClick={handlePrev} variant="contained" color="primary" sx={{ marginRight: '10px' }}>
//           <ArrowBackIcon /> Previous
//         </Button>
//         <Button onClick={handleNext} variant="contained" color="primary">
//           Next <ArrowForwardIcon />
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default PartyCustomization;
