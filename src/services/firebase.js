import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiT7O9Tg38fP1KXMt4xAcdOwDq8mShLnE",
  authDomain: "sarayu-ee254.firebaseapp.com",
  projectId: "sarayu-ee254",
  storageBucket: "sarayu-ee254.firebasestorage.app",
  messagingSenderId: "680196581103",
  appId: "1:680196581103:web:a9d56b144eb01b75115d1a",
  measurementId: "G-619710VELS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Export the auth object
export { auth, analytics };
