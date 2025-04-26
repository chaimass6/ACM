// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA0vHWGHBinIfggQboGsSWOuZrbL85vgRM",
  authDomain: "chat-ed6df.firebaseapp.com",
  projectId: "chat-ed6df",
  storageBucket: "chat-ed6df.appspot.com",
  messagingSenderId: "491395756494",
  appId: "1:491395756494:web:4b878f70732692bfd5fb9f",
  measurementId: "G-XYCM2P8R28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
