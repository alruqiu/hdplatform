// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZnfeQt-N8heU2dtKvpM8impS7dlt-rA0",
  authDomain: "hijab-ul-dua-94626.firebaseapp.com",
  projectId: "hijab-ul-dua-94626",
  storageBucket: "hijab-ul-dua-94626.firebasestorage.app",
  messagingSenderId: "266063493797",
  appId: "1:266063493797:web:8ee8f7893b3c2a21eeab4c",
  measurementId: "G-96R84TENJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);