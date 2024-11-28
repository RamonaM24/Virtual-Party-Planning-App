require("dotenv").config(); // Load environment variables from .env
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: "https://virtual-party-planning-app.firebaseio.com", // Replace if needed
});

const db = admin.firestore(); // Firestore database instance
module.exports = db;
