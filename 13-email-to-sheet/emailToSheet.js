const URL =
  "https://script.google.com/macros/s/AKfycbxHODbsmCdWe--ovUWe2F6YgnPrQsbnIQOTyAvKW1q0fsL0-iP3nu9qvThCiMOcNxo/exec";

const form = document.querySelector("form");
const input = document.getElementById("email");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value.trim();
  if (email) {
    button.disabled = true;
    button.innerHTML = "Sending...";
    fetch(URL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          form.reset();
          button.disabled = false;
          button.innerHTML = "Notify Me";
        }
        alert("Thank you for subscribing!");
      })
      .catch((err) => console.error(err));
  }
});
