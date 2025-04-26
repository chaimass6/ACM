import { auth } from './firebase-init.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Toggle Login/Signup
const toggleBtn = document.querySelector('.toggle-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function toggleForm() {
  loginForm.classList.toggle('active');
  signupForm.classList.toggle('active');

  toggleBtn.textContent = loginForm.classList.contains('active') ? "Switch to Signup" : "Switch to Login";
}

// Login Handler
window.handleLogin = function(event) {
  event.preventDefault();

  const email = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
}

// Signup Handler
window.handleSignup = function(event) {
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
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!/^\d+$/.test(age) || age <= 0) {
    alert("Enter a valid age");
    return;
  }

  if (!isNotHuman) {
    alert("Please confirm you are not a human 😜");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
}
