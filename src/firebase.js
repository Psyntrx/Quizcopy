// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7vx7FLnA-A8ZIkaFeOBKCZzDaCTHP5L8",
  authDomain: "quiz-app-prototype-883c4.firebaseapp.com",
  projectId: "quiz-app-prototype-883c4",
  storageBucket: "quiz-app-prototype-883c4.firebasestorage.app",
  messagingSenderId: "816558834501",
  appId: "1:816558834501:web:7a13fed18c0a427bf2b42c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
