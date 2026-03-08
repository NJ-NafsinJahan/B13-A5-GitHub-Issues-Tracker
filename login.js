function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let adminUser = "admin";
  let adminPass = "admin123";

  // console.log("hello");
  if (username === adminUser && password === adminPass) {
    window.location.href = "main.html";
  } else {
    alert("Invalid Username or Password");
  }
}
