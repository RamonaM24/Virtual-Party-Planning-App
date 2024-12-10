import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home'; // Home component for the homepage
import Login from './pages/Login'; // Login page
import Register from './pages/Register'; // Register page
import Profile from './pages/Profile'; // Profile page
import Navbar from './Components/Navbar'; // Navbar component
import EventsCreationForm from './Components/EventsCreationForm';
import Invitation from './pages/Invitation';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-event" element={<EventsCreationForm />} />
          <Route path="/invitation" element={<Invitation />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
