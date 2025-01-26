const form = document.getElementById("form");
const inputName = document.getElementById("name");
const nameError = document.getElementById("name-error");

const inputEmail = document.getElementById("email");
const emailError = document.getElementById("email-error");

const inputPassword = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const inputNumber = document.getElementById("number");
const numberError = document.getElementById("number-error");

const inputMessage = document.getElementById("message");
const messageError = document.getElementById("message-error");

const userData = {
  name: "",
  email: "",
  password: "",
  number: "",
  message: "",
};

function validateName(name) {
  if (name.trim() === "") {
    nameError.textContent = "Name is required";
  } else if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
  } else {
    nameError.textContent = "";
    userData.name = name.trim();
  }
}

function validateEmail(email) {
  if (email.trim() === "") {
    emailError.textContent = "Email is required";
  } else if (!email.includes("@")) {
    emailError.textContent = "Email must contain @";
  } else if (!email.includes(".")) {
    emailError.textContent = "Email must contain .";
  } else if (email.includes(" ")) {
    emailError.textContent = "Email must not contain spaces";
  } else if (!email.endsWith(".com")) {
    emailError.textContent = "Email must end with .com";
  } else {
    emailError.textContent = "";
    userData.email = email.trim();
  }
}

function validatePassword(password) {
  if (password.trim() === "") {
    passwordError.textContent = "Password is required";
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
  } else {
    passwordError.textContent = "";
    userData.password = password.trim();
  }
}

function validateNumber(number) {
  if (number.trim() === "") {
    numberError.textContent = "Number is required";
  } else if (number.length < 10) {
    numberError.textContent = "Number must be 10 digits";
  } else if (isNaN(number)) {
    numberError.textContent = "Number must be a number";
  } else {
    numberError.textContent = "";
    userData.number = number.trim();
  }
}

function validateMessage(message) {
  if (message.trim() === "") {
    messageError.textContent = "Message is required";
  } else if (message.length < 4) {
    messageError.textContent = "Message must be at least 4 characters";
  } else {
    messageError.textContent = "";
    userData.message = message.trim();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateName(inputName.value);
  validateEmail(inputEmail.value);
  validatePassword(inputPassword.value);
  validateNumber(inputNumber.value);
  validateMessage(inputMessage.value);

  if (
    nameError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === "" &&
    numberError.textContent === "" &&
    messageError.textContent === ""
  ) {
    console.log(userData);
    form.reset();
  }
});
