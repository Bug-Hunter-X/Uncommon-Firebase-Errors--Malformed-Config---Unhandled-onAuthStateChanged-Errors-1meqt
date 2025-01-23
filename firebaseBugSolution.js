// Improved Firebase initialization with explicit error handling
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig).catch(error => {
  console.error("Error initializing Firebase:", error);
  // Handle initialization failure appropriately
});

// Improved onAuthStateChanged handling with error management
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
}, error => {
    console.error('onAuthStateChanged error:', error); //handle error explicitly
});