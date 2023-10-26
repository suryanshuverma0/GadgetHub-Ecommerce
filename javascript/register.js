const register_btn = document.getElementById("register-btn");

register_btn.addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  const existingUser = JSON.parse(localStorage.getItem('register')) || [];
  existingUser.push({username, password, email});
  localStorage.setItem('register', JSON.stringify(existingUser));
});
