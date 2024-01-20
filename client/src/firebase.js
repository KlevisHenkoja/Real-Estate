// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-6e108.firebaseapp.com",
  projectId: "mern-realestate-6e108",
  storageBucket: "mern-realestate-6e108.appspot.com",
  messagingSenderId: "132574284469",
  appId: "1:132574284469:web:4f57bc9eaefb7e11d58cfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);