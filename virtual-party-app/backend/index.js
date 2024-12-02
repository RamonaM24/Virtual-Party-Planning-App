const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

app.use(express.json()); //Middleware to parse JSON

// Mock database for demonstration purposes
const mockDatabase = [];

// Mock function to simulate finding a user by email
const findUserByEmail = async (email) => {
    return mockDatabase.find((user) => user.email === email);
};

// Mock function to simulate saving a user to the database
const saveUserToDatabase = async (email, hashedPassword) => {
    const user = { email, hashedPassword };
    mockDatabase.push(user);
    return user;
};


//Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email); //Fetch user from Database

        if (user && bcrypt.compareSync(password, user.hashedPassword)) {
            res.status(200).json({ messae: 'Login successful', token: 'abc123'});
        } else {
            res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
});

//Registration Route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10); //Hash the password
        const user = await saveUserToDatabase(email, hashedPassword); //Save the user to the Mock Database

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//Start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

//Because frontend and backend are running on different ports, we need to run Cross Origin Resource Sharing
// to allow the frontend to make requests to the backend
const cors = require('cors');
app.use(cors());
