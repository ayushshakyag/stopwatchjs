// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let stopwatch;

// DOM elements
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Start the stopwatch
startBtn.addEventListener("click", function() {
  // Disable the start button and enable the stop button
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Start the stopwatch
  stopwatch = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
        hoursEl.innerText = padNumber(hours);
      }
      minutesEl.innerText = padNumber(minutes);
    }
    secondsEl.innerText = padNumber(seconds);
  }, 1000);
});

// Stop the stopwatch
stopBtn.addEventListener("click", function() {
  // Disable the stop button and enable the start button
  stopBtn.disabled = true;
  startBtn.disabled = false;

  // Stop the stopwatch
  clearInterval(stopwatch);
});

// Reset the stopwatch
resetBtn.addEventListener("click", function() {
  // Reset the variables and update the display
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursEl.innerText = "00";
  minutesEl.innerText = "00";
  secondsEl.innerText = "00";

  // Disable the stop button and enable the start button
  stopBtn.disabled = true;
  startBtn.disabled = false;

  // Stop the stopwatch if it's running
  clearInterval(stopwatch);
});

// Helper function to pad numbers with leading zeroes
function padNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}