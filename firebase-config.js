// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjeIuUKO5x9jER2yJ_9LQAHAWnC1TX1G8",
  authDomain: "react-a3c5a.firebaseapp.com",
  projectId: "react-a3c5a",
  storageBucket: "react-a3c5a.firebasestorage.app",
  messagingSenderId: "90555716647",
  appId: "1:90555716647:web:6eb923766203e4646a6a02",
  measurementId: "G-V6M10WEL5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);