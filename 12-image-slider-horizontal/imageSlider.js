const slider = document.getElementById("slider");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

const slides = slider.children.length - 1;
let currentSlide = 0;
let autoSlideTime = 3000;

function moveSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = currentSlide < slides ? ++currentSlide : 0;
  moveSlider(currentSlide);
}

function prevSlide() {
  currentSlide = currentSlide > 0 ? --currentSlide : slides - 1;
  moveSlider(currentSlide);
}

let autoSlide = setInterval(nextSlide, autoSlideTime);

rightButton.addEventListener("click", () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(nextSlide, autoSlideTime);
});
leftButton.addEventListener("click", () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, autoSlideTime);
});
