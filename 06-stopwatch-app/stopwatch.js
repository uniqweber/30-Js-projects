const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const time = document.getElementById("time");

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    start.classList.remove("fa-pause");
    start.classList.add("fa-play");
    interval = null;
  } else {
    interval = setInterval(startTimer, 1000);
    start.classList.remove("fa-play");
    start.classList.add("fa-pause");
  }
});

function startTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  time.textContent = `${hours.toString().padStart(2, "0")} : ${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

stop.addEventListener("click", () => {
  clearInterval(interval);
  start.classList.remove("fa-pause");
  start.classList.add("fa-play");
  interval = null;
});

reset.addEventListener("click", () => {
  start.classList.remove("fa-pause");
  start.classList.add("fa-play");
  clearInterval(interval);
  time.textContent = "00 : 00 : 00";
  hours = 0;
  minutes = 0;
  seconds = 0;
  interval = null;
});
