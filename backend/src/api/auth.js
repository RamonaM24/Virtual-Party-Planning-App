//Handles authentication routes like sign-up

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

module.exports = router;
