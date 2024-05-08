let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.querySelector('.div2');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.querySelector('.laps');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
    startButton.disabled = false;
}

function lapTimer() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTimer);
