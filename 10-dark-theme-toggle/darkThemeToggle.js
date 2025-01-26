const htmlElement = document.documentElement;
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    htmlElement.classList.contains("dark") ? "dark" : "light"
  );

});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.classList.add(savedTheme);
} else {
  htmlElement.classList.add("dark");
}
