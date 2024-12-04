// Ensure dotenv is loaded
require("dotenv").config();

const admin = require("firebase-admin");

// Create the service account object using environment variables
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Replace escaped newlines
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
};

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

// Firestore database instance
const db = admin.firestore();

module.exports = db;
