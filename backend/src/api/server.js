// Entry point for the backend

// const express = require("express");
// const admin = require("firebase-admin");
// const authRoutes = require("./auth.js"); // Import the auth routes

// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://virtual-party-planning-app.firebaseio.com",
// });

// const app = express();
// app.use(express.json()); // Parse JSON requests

// // Use the authentication routes
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Entry point for the backend
const express = require("express");
const path = require("path"); // Required to work with file paths
const authRoutes = require("./auth.js"); // Import the authentication routes
const signupRoutes = require("./signup.js"); // Import the signup routes
const signinRoutes = require("./signin.js"); // Sign-in routes
const db = require("../../firebase.js"); // Import the Firebase database instance

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/auth", authRoutes); // Use authentication routes
app.use("/api/signup", signupRoutes); // Use signup routes
app.use("/api/signin", signinRoutes); // Sign-in routes

// Serve React frontend
app.use(express.static(path.join(__dirname, "../build"))); // Serve static files from the build folder

// Handle unmatched routes (Serve React frontend)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Set the port
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
