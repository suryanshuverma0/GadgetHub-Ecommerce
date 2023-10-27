const login_btn = document.getElementById("login-button");
login_btn.addEventListener("click", function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const username_checked = localStorage.getItem("username");
  const password_checked = localStorage.getItem("password");

  if (username_checked === username) {
    if (password_checked === password) {
      window.location.href = "/html/home.html";
    } else {
      alert("Invalid username and password");
      location.reload();
      //window.location.href = "/html/login.html";
    }
  } else {
    alert("Invalid username and password");
    location.reload();
    //window.location.href = "/html/login.html";
  }
});

const show_hide_btn = document.getElementById("show_hide");
show_hide_btn.addEventListener("click", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
    show_hide_btn.textContent = "Hide";
  } else {
    password.type = "password";
    show_hide_btn.textContent = "Show";
  }
});
