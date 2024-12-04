const express = require("express");
const admin = require("firebase-admin");

// Create a router for sign-in routes
const router = express.Router();

// Login Route
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email from Firebase Authentication
    const userRecord = await admin.auth().getUserByEmail(email);

    // Fetch user data from Firestore (if additional data is stored)
    const userDoc = await admin.firestore().collection("users").doc(userRecord.uid).get();
    const userData = userDoc.data();

    if (!userData) {
      return res.status(404).json({ message: "User not found in database." });
    }

    // Verify password (this assumes passwords are stored in Firestore; improve security in production)
    if (userData.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Return user details if login is successful
    res.status(200).json({
      message: "Login successful!",
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      additionalInfo: userData,
    });
  } catch (error) {
    res.status(400).json({ message: "Login failed", error: error.message });
  }
});

module.exports = router;
