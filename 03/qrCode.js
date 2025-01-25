const input = document.getElementById("input");
const generateBtn = document.getElementById("generateBtn");
const qrCodeContainer = document.getElementById("qrCodeContainer");
const errorMessage = document.getElementById("errorMessage");
generateBtn.addEventListener("click", () => {
  const qrCode = input.value;
  qrCodeContainer.classList.remove("h-0");
  if (qrCode) {
    generateBtn.classList.remove("mt-3");
    qrCodeContainer.classList.add(
      "h-44",
      "flex",
      "justify-center",
      "items-center"
    );
    qrCodeContainer.innerHTML = `<img class=" transition-all duration-300 mx-auto" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCode}" alt="QR Code" />`;
    input.value = "";
  } else {
    qrCodeContainer.classList.remove(
      "h-44",
      "flex",
      "justify-center",
      "items-center"
    );
    errorMessage.classList.remove("hidden");
    generateBtn.classList.add("mt-3");
    qrCodeContainer.classList.add("h-0");
    qrCodeContainer.innerHTML = "";
    errorMessage.textContent = "Please enter a valid URL or text";
  }
});

input.addEventListener("focus", () => {
  qrCodeContainer.innerHTML = "";
  errorMessage.classList.add("hidden");
  qrCodeContainer.classList.remove("h-44");
  qrCodeContainer.classList.add("h-0");
  generateBtn.classList.add("mt-3");
});
