const login_btn = document.getElementById("login-button");
login_btn.addEventListener("click", function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const existingUser = JSON.parse(localStorage.getItem("register")) || [];

  function checkUsername(user){
    return user.username === username;
  }
  const user = existingUser.find((checkUsername));

  if (user.password === password) {
    window.location.href = "/html/home.html";
  } else {
    window.location.href = "/html/index.html";
  }
});
