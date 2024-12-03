import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './Navbar';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <h1>Virtual Party Planning Login Page</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
