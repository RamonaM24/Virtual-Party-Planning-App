const express = require("express");
const admin = require("firebase-admin");

// Create a router for the sign-up route
const router = express.Router();

// Sign-Up Route
router.post("/", async (req, res) => {
  const { email, password, displayName, name, surname, dateOfBirth, company } = req.body;

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
      name,
      surname,
      dateOfBirth,
      company,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).send({ message: "User created successfully!", uid: userRecord.uid });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
