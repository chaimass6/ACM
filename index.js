const toggleBtn = document.querySelector('.toggle-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function toggleForm() {
  loginForm.classList.toggle('active');
  signupForm.classList.toggle('active');

  toggleBtn.textContent = loginForm.classList.contains('active') ? "Switch to Signup" : "Switch to Login";
}

// Handle login
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  alert(`Logged in as ${username}`);
  return false;
}

// Handle signup
function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const age = document.getElementById('signupAge').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const isNotHuman = document.getElementById('robotCheck').checked;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (!/^\d+$/.test(age) || age <= 0) {
    alert("Please enter a valid numeric age");
    return false;
  }

  if (!isNotHuman) {
    alert("Please confirm you are not a human 😜");
    return false;
  }

  alert(`Signup successful for ${name}`);
  return false;
}

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/ firebasejs/10.7.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyA0vHWGHBinIfggQboGsSWOuZrbL85vgRM",
    authDomain: "chat-ed6df.firebaseapp.com",
    projectId: "chat-ed6df",
    storageBucket: "chat-ed6df.firebasestorage.app",
    messagingSenderId: "491395756494",
    appId: "1:491395756494:web:4b878f70732692bfd5fb9f",
    measurementId: "G-XYCM2P8R28"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
