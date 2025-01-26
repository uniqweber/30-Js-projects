const showPassword = document.getElementById("show-password");
const password = document.getElementById("password");

showPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showPassword.classList.remove("fa-eye");
    showPassword.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    showPassword.classList.remove("fa-eye-slash");
    showPassword.classList.add("fa-eye");
  }
});
