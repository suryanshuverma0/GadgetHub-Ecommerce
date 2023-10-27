const register_btn = document.getElementById("register-btn");

register_btn.addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const re_password = document.getElementById("re-password").value;

  if (!username || username === "") {
    alert("Please enter a username");
  } else {
    const username_checked = localStorage.getItem("username");
    const password_checked = localStorage.getItem("password");
    if (username === username_checked) {
      alert("Username already exist");
    } else {
      if (password.length < 8) {
        alert("Password must be at least 8 characters");
      } else {
        if (password.trim() === re_password.trim()) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          alert("Your account has been registered successfully");
          window.location.href = "/html/login.html";
        } else {
          alert("Password did not match");
        }
      }
    }
  }
});

const show_hide = document.getElementById("show_hide");
show_hide.addEventListener("click", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
    show_hide.textContent = "Hide";
  } else {
    password.type = "password";
    show_hide.textContent = "Show";
  }
});

const show_hide_ree = document.getElementById("show_hide-ree");
show_hide_ree.addEventListener("click", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("re-password");

  if (password.type === "password") {
    password.type = "text";
    show_hide.textContent = "Hide";
  } else {
    password.type = "password";
    show_hide.textContent = "Show";
  }
});
