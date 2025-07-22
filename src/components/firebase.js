// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // If you need Firestore, import it as well
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx72sAMerd7kUQkZ5QZAshPLDxNO9on34",
  authDomain: "netflixclone-37a75.firebaseapp.com",
  projectId: "netflixclone-37a75",
  storageBucket: "netflixclone-37a75.firebasestorage.app",
  messagingSenderId: "891083534685",
  appId: "1:891083534685:web:bda4280277a05842a2b8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app); // If you need Firestore, import and initialize it as well
export default app;



