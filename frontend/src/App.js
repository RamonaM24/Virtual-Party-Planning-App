import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';  // Home component for the homepage
import Login from './pages/Login';  // Login page
import Register from './pages/Register';  // Register page
import Profile from './pages/Profile';  // Profile page
import Navbar from './Components/Navbar';  // Navbar component
import EventsCreationForm from './Components/EventsCreationForm';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-event" element={<EventsCreationForm />} /> {/* Corrected path */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
