const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const formTitle = document.getElementById('formTitle');
const toggleText = document.getElementById('toggleText');

function toggleForm() {
  loginForm.classList.toggle('active');
  signupForm.classList.toggle('active');

  if (loginForm.classList.contains('active')) {
    formTitle.textContent = "Login";
    toggleText.innerHTML = `Don't have an account? <span onclick="toggleForm()">Sign up</span>`;
  } else {
    formTitle.textContent = "Sign up";
    toggleText.innerHTML = `Already have an account? <span onclick="toggleForm()">Login</span>`;
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  alert(`Logged in as ${username}`);
  return false;
}

function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const age = document.getElementById('signupAge').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const isRobotChecked = document.getElementById('robotCheck').checked;

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

  if (!isRobotChecked) {
    alert("Please confirm you are not a robot 🤖");
    return false;
  }

  alert(`Signup successful for ${name}`);
  return false;
}
