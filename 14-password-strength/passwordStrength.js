const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const strengthMsg = document.getElementById("strengthMsg");
const matchMsg = document.getElementById("matchMsg");

let setPassword = "";
let matchPassword = "";

password.addEventListener("input", () => {
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /[0-9]/;
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const minLength = 8;

  const passwordValue = password.value;
  strengthMsg.textContent = "";

  if (passwordValue.length === 0) {
    strengthMsg.classList.add("hidden");
    setPassword = "";
  } else if (passwordValue.length < minLength) {
    strengthMsg.textContent = "Password must be at least 8 characters";
    strengthMsg.classList.remove("hidden", "text-green-600");
    strengthMsg.classList.add("text-red-500");
    setPassword = "";
  } else if (!upperCase.test(passwordValue)) {
    strengthMsg.textContent =
      "Password must contain at least one uppercase letter";
    strengthMsg.classList.remove("hidden");
    strengthMsg.classList.add("text-red-500");
    setPassword = "";
  } else if (!lowerCase.test(passwordValue)) {
    strengthMsg.textContent =
      "Password must contain at least one lowercase letter";
    strengthMsg.classList.remove("hidden");
    strengthMsg.classList.add("text-red-500");
    setPassword = "";
  } else if (!number.test(passwordValue)) {
    strengthMsg.textContent = "Password must contain at least one number";
    strengthMsg.classList.remove("hidden");
    strengthMsg.classList.add("text-red-500");
    setPassword = "";
  } else if (!specialChar.test(passwordValue)) {
    strengthMsg.textContent =
      "Password must contain at least one special character";
    strengthMsg.classList.remove("hidden");
    strengthMsg.classList.add("text-red-500");
    setPassword = "";
  } else {
    strengthMsg.textContent = "Password is strong";
    strengthMsg.classList.add("text-green-600");
    setPassword = passwordValue;
  }
});

confirmPassword.addEventListener("input", () => {
  matchMsg.textContent = "";
  const confirmLength = confirmPassword.value.length;
  if (confirmLength === 0) {
    matchMsg.classList.add("hidden");
    matchMsg.classList.remove("text-red-500", "text-green-600");
  } else if (setPassword !== "") {
    matchMsg.classList.remove("hidden");
    if (password.value !== confirmPassword.value) {
      matchMsg.classList.add("text-red-500");
      matchMsg.textContent = "Password does not match";
    } else {
      matchMsg.classList.add("text-green-600");
      matchMsg.textContent = "Password matches";
      matchPassword = confirmPassword.value;
    }
  } else {
    matchMsg.classList.remove("hidden", "text-green-600");
    matchMsg.classList.add("text-red-500");
    matchMsg.textContent = "Please set your password first!";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (setPassword && matchPassword) {
    strengthMsg.classList.add("hidden");
    strengthMsg.classList.remove("text-red-500");
    matchMsg.classList.add("hidden");
    matchMsg.classList.remove("text-red-500");
    console.log("Form submitted", setPassword, matchPassword);
    form.reset();
    setPassword = "";
    matchPassword = "";
  } else {
    strengthMsg.classList.remove("hidden");
    strengthMsg.classList.add("text-red-500");
    strengthMsg.textContent = "Please set your password first!";
    matchMsg.classList.remove("hidden");
    matchMsg.classList.add("text-red-500");
    matchMsg.textContent = "Password does not match";
    console.log("Form not submitted");
  }
});
