// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW--3VDF_tcPCSw939faWTzbBwa9UX-zk",
  authDomain: "portfolio-blog-eb2a7.firebaseapp.com",
  projectId: "portfolio-blog-eb2a7",
  storageBucket: "portfolio-blog-eb2a7.firebasestorage.app",
  messagingSenderId: "100299733810",
  appId: "1:100299733810:web:3216fbf6ae5ab389e1f52b",
  measurementId: "G-1J2LK6H6CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);