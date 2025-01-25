const setPosition = document.querySelectorAll("input[name='position']");
const toastContainer = document.getElementById("toastContainer");

const successToastBtn = document.getElementById("successToastBtn");
const errorToastBtn = document.getElementById("errorToastBtn");
const invalidToastBtn = document.getElementById("invalidToastBtn");

let position = ["top-4", "left-4"];
let activeToasts = {};

setPosition.forEach((input) => {
  input.addEventListener("change", () => {
    position = input.value.split(" ");
    if (
      ["top-4", "left-4", "right-4", "bottom-4"].some((cls) =>
        toastContainer.classList.contains(cls)
      )
    ) {
      toastContainer.classList.remove("top-4", "left-4", "right-4", "bottom-4");
      toastContainer.classList.add(...position);
    }
  });
});

successToastBtn.addEventListener("click", () => {
  if (!activeToasts["success"]) {
    showToast("success", "Success Toast");
  }
});

errorToastBtn.addEventListener("click", () => {
  if (!activeToasts["error"]) {
    showToast("error", "Error Toast");
  }
});

invalidToastBtn.addEventListener("click", () => {
  if (!activeToasts["invalid"]) {
    showToast("invalid", "Invalid Toast");
  }
});

function showToast(type, message) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  if (position.includes("left-4")) {
    toast.classList.add("-translate-x-full");
  } else {
    toast.classList.add("translate-x-full");
  }

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <p>${message}</p>
  `;

  toastContainer.appendChild(toast);
  activeToasts[type] = toast;

  setTimeout(() => {
    if (position.includes("left-4")) {
      toast.classList.remove("-translate-x-full");
    } else {
      toast.classList.remove("translate-x-full");
    }
    toast.classList.add("translate-x-0");
  }, 100);

  setTimeout(() => {
    if (position.includes("left-4")) {
      toast.classList.add("-translate-x-full");
    } else {
      toast.classList.add("translate-x-full");
    }
    toast.classList.remove("translate-x-0");

    setTimeout(() => {
      toastContainer.removeChild(toast);
      delete activeToasts[type];
    }, 300);
  }, 1000);
}

toastContainer.classList.add(...position);
