import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (err) {
      setError(err?.response?.data?.message || 'An error occurred. Please try again later.');
    }
  };

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
            Sign In
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Do you have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
