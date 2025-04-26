const timerDisplay = document.getElementById("pomodoro-time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let totalSeconds = 1500;
let intervalId = null;
let isRunning = false;

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return minutes + ":" + seconds;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  startBtn.textContent = "stop";

  intervalId = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      resetTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
  startBtn.textContent = "start";
}

function resetTimer() {
  clearInterval(intervalId);
  totalSeconds = 1500;
  updateDisplay();
  isRunning = false;
  startBtn.textContent = "start";
}

startBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

updateDisplay()