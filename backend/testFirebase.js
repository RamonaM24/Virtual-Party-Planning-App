const db = require("./firebase");

async function testFirestore() {
  try {
    const testDoc = db.collection("test").doc("testDoc");
    await testDoc.set({ message: "Hello, Firebase!" });
    console.log("Test document written!");

    const snapshot = await testDoc.get();
    console.log("Document data:", snapshot.data());
  } catch (error) {
    console.error("Error connecting to Firestore:", error);
  }
}

testFirestore();
