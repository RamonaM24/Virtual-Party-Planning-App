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

// Get User Profile Route
router.get("/users/:uid", async (req, res) => {
    const { uid } = req.params;
  
    try {
      // Fetch user details from Firebase Authentication
      const userRecord = await admin.auth().getUser(uid);
  
      // Fetch additional user details from Firestore
      const userDoc = await admin.firestore().collection("users").doc(uid).get();
  
      if (!userDoc.exists) {
        throw new Error("User details not found in the database.");
      }
  
      const userData = userDoc.data();
  
      res.status(200).send({
        message: "User profile fetched successfully!",
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        additionalInfo: userData,
      });
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

// Update User Route
router.patch("/users/:uid", async (req, res) => {
    const { uid } = req.params;
    const { displayName, email, ...additionalFields } = req.body;
  
    try {
      // Update Authentication Data
      const updateAuthData = {};
      if (displayName) updateAuthData.displayName = displayName;
      if (email) updateAuthData.email = email;
  
      if (Object.keys(updateAuthData).length > 0) {
        await admin.auth().updateUser(uid, updateAuthData);
      }
  
      // Update Firestore Data
      const userDocRef = admin.firestore().collection("users").doc(uid);
      if (Object.keys(additionalFields).length > 0) {
        await userDocRef.update(additionalFields);
      }
  
      res.status(200).send({
        message: "User profile updated successfully!",
        updatedFields: { displayName, email, ...additionalFields },
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

module.exports = router;
