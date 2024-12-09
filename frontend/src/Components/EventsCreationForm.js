import React, { useState } from 'react';
import '../App.css'; // Import the updated CSS file
import { TextField, Button, Box, Container } from '@mui/material';

const EventsCreationForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventDescription) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // You can handle the form submission here (e.g., API request)
    console.log('Event created:', { eventName, eventDate, eventDescription });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        className="event-creation-form" // Apply the class to the form container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          marginTop: 15,
        }}
      >
        <h2>Create Event</h2>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Event Name"
            variant="outlined"
            fullWidth
            required
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Event Date"
            type="date"
            variant="outlined"
            fullWidth
            required
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Event Description"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            margin="normal"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Event
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EventsCreationForm;
