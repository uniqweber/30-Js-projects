const audio = document.getElementById("audio");
const range = document.getElementById("range");
const playPause = document.getElementById("play-pause");
const volumeHigh = document.getElementById("volume-high");
const volumeLow = document.getElementById("volume-low");
playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
  } else {
    audio.pause();
    playPause.classList.remove("fa-pause");
    playPause.classList.add("fa-play");
  }
});
range.addEventListener("input", () => {
  audio.currentTime = range.value;
  range.max = audio.duration;
});
audio.addEventListener("timeupdate", () => {
  range.value = audio.currentTime;
});
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  range.value = 0;
  playPause.classList.remove("fa-pause");
  playPause.classList.add("fa-play");
});
