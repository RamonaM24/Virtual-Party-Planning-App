import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http:/localhost:5000/login', {
                email,
                password,
            });

            console.log('Login sucessful: ', response.data);
            //Handle login success
        } catch (error) {
            if (error.response) {
                setError(error.respomse.data.message); //Display error from backend
            } else {
                setError('An error occured. Please try again later')
            }
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;