// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_YOUR_API_KEY,
  authDomain: process.env.REACT_APP_YOUR_FIREBASE_AUTH_DOMAIN,
  // databaseURL: "[YOUR_FIREBASE_DATABASE_URL]",
  projectId: process.env.REACT_APP_YOUR_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_YOUR_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_YOUR_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_YOUR_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
