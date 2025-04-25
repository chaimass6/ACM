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
