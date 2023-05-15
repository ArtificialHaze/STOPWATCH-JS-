const timerElement = document.getElementById("timer");
const startBtnElement = document.getElementById("start");
const stopBtnElement = document.getElementById("stop");
const resetBtnElement = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

const formatTime = (time) => {
  let ms = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (60 * 1000));

  return (
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (ms > 9 ? ms : "0" + ms)
  );
};

const startTimer = () => {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerElement.textContent = formatTime(elapsedTime);
  }, 10);
  stopBtnElement.disabled = false;
  startBtnElement.disabled = true;
};

const stopTimer = () => {
  clearInterval(timeInterval);
  startBtnElement.disabled = false;
  stopBtnElement.disabled = true;
};

const resetTimer = () => {
  clearInterval(timeInterval);
  elapsedTime = 0;
  timerElement.textContent = "00:00:00";
  startBtnElement.disabled = false;
  stopBtnElement.disabled = true;
};

startBtnElement.addEventListener("click", startTimer);
stopBtnElement.addEventListener("click", stopTimer);
resetBtnElement.addEventListener("click", resetTimer);
