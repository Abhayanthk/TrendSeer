// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGWQAAMo7GMyioWqEnPNNZW8_kZhVSxbg",
  authDomain: "trendseer-7f540.firebaseapp.com",
  projectId: "trendseer-7f540",
  storageBucket: "trendseer-7f540.firebasestorage.app",
  messagingSenderId: "318427196217",
  appId: "1:318427196217:web:e58943240704aa328bd6e8",
  measurementId: "G-0TSR7BMKHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;