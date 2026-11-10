//register
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm').value;

  let error = document.getElementById('error');
  error.textContent = "";

  if (name.length < 3) {
    error.textContent = "Name must be at least 3 characters.";
    return;
  }

  if (!gender) {
    error.textContent = "Please select a gender.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    error.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return;
  }

  alert("Registration successful!");
  this.reset();
});
