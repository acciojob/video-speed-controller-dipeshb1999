// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleButton = player.querySelector('.toggle');
const volumeSlider = player.querySelector('input[name="volume"]');
const playbackRateSlider = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll('[data-skip]');

// Functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggleButton.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//
