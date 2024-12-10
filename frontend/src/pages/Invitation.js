import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';

const Invitation = () => {
    const [guestName, setGuestName] = useState('');
    const [email, setEmail] = useState('');
    const [eventDetails, setEventDetails] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSendInvitation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/invitations', {
                guestName,
                email,
                eventDetails,
             });
             setResponseMessage(response.data.message);

        } catch (error) {
            setResponseMessage('Failed to send the invigtation. Please try again.');
        }
    };

    const paperStyle = { padding: 20, width: 400, margin: '100px auto' };
    const btnStyle = { marginTop: '16px' };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h5" align="center" gutterBottom>
                Send an Invitation
                </Typography>
                <form onSubmit={handleSendInvitation}>
                    <TextField
                    label="Guest Name"
                    fullWidth
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Event Details"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={btnStyle}
                >
                    Send Invitation
                </Button>
            </form>
            {responseMessage && (
                <Typography
                    variant="body2"
                    color="success.main"
                    align="center"
                    style={{ marginTop: '16px' }}
                >
                    {responseMessage}
                </Typography>
                )}
            </Paper>
        </Grid>
    );
};

export default Invitation;