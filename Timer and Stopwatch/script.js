// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

function startTimer() {
    if (!timerRunning) {
        const userInput = document.getElementById('timer-input').value;
        if (!userInput || isNaN(userInput)) {
            alert("Please enter a valid time (in seconds).");
            return;
        }
        
        timerSeconds = parseInt(userInput);
        updateTimerDisplay();
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
    } else {
        timerSeconds--;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer-display').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-timer').addEventListener('click', startTimer);

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
}

function updateStopwatch() {
    stopwatchSeconds++;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const minutes = Math.floor(stopwatchSeconds / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatch-display').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('pause-stopwatch').addEventListener('click', pauseStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
