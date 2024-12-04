// Handles authentication routes like sign-up and login

const express = require("express");
const admin = require("firebase-admin");

// Create a router for authentication routes
const router = express.Router();

// Sign-Up Route
router.post("/signup", async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    // Create a new user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    // Optional: Store additional user details in Firestore
    await admin.firestore().collection("users").doc(userRecord.uid).set({
      email,
      displayName,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).send({ message: "User created successfully!", uid: userRecord.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Log In Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Simulate authentication since Firebase Admin SDK doesn't handle sign-in
    // Instead, you can use Firebase Client SDK for actual authentication
    const user = await admin.auth().getUserByEmail(email);

    // Optional: Fetch additional user data from Firestore if needed
    const userDoc = await admin.firestore().collection("users").doc(user.uid).get();
    const userData = userDoc.exists ? userDoc.data() : {};

    res.status(200).send({
      message: "Login successful!",
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      additionalInfo: userData,
    });
  } catch (error) {
    res.status(400).send({ error: "Invalid email or password." });
  }
});

module.exports = router;