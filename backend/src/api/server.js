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
const authRoutes = require("./auth.js"); // Import the authentication routes
const db = require("../../firebase.js"); // Import the Firebase database instance

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/auth", authRoutes); // Use authentication routes

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
