import './App.css'; // Make sure this is at the top of your App.js file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import for React Router
import EventsCreationForm from './Components/EventsCreationForm';  // Corrected import for EventsCreationForm



const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Virtual Party Planning</h1>
        <Routes>
          <Route path="/EventsCreationForm" element={<EventsCreationForm />} /> {/* Correct JSX syntax */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
