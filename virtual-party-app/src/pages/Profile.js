import React, { useState, useEffect } from 'react';
import { useAuth } from '../contect/authContext';

const Profile = () => {

    const { user, logout } = useAuth();
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState('');
    const[message, setMessage] = useState('');

    useEffect(() => {
        if(user) {
            setEmail(user.email); //prepopulate form with user details
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        //Make an API call to update user details
        try {
            const response = await fetch('http://localhost:5000/updateProfile', {
                method: 'PUT',
                headers: {
                    'Contect-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if(response.ok) {
                const updatedUser = await response.json();
                setMessage('Profile updated successfully');
            } else {
                setMessage('Failed to update profile');
            }
        } catch (error) {
            setMessage('An error occured');
        }
    }

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? (
                <>
                <p>Welcome, {user.email}</p>
                <form onSubmit={handleUpdateProfile}>
                    <div>
                        <label>Email: </label>
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update Profile</button>
                </form>
                <p>{message}</p>
                <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;