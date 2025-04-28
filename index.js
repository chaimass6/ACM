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

  // Save user credentials to localStorage
  const user = {
    name,
    email,
    password
  };

  localStorage.setItem('user', JSON.stringify(user));  // Convert object to JSON string
  alert(`Signup successful for ${name}. Now you can login!`);

  // Automatically switch to login form after signup
  toggleForm();
  
  return false;
}
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

  if (!storedUser) {
    alert("No user found. Please signup first!");
    return false;
  }

  if ((username === storedUser.name || username === storedUser.email) && password === storedUser.password) {
    alert(`Logged in successfully as ${storedUser.name}!`);
    // Redirect to main.html
    window.location.href = "main.html";
  } else {
    alert("Invalid username/email or password. Please try again!");
  }

  return false;
}
