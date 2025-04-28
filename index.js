// Toggle between Login and Signup form
function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const formTitle = document.getElementById('formTitle');
  const toggleText = document.getElementById('toggleText');

  if (loginForm.classList.contains('active')) {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    formTitle.innerText = "Sign Up";
    toggleText.innerHTML = `Already have an account? <span onclick="toggleForm()">Login</span>`;
  } else {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    formTitle.innerText = "Login";
    toggleText.innerHTML = `Don't have an account? <span onclick="toggleForm()">Sign Up</span>`;
  }
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

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem('user', JSON.stringify(user));  
  alert(`Signup successful for ${name}. Now you can login!`);

  toggleForm();  // Switch to Login form after signup
  return false;
}

// Handle login
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user')); 

  if (!storedUser) {
    alert("No user found. Please signup first!");
    return false;
  }

  if ((username === storedUser.name || username === storedUser.email) && password === storedUser.password) {
    alert(`Logged in successfully as ${storedUser.name}!`);
    // Set a flag that user is logged in
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = "main.html"; // Redirect to main page
  } else {
    alert("Invalid username/email or password. Please try again!");
  }

  return false;
}
