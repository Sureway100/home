const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

//you can set whatever count down you want here
const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = formatTime(days);
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secondsE1.innerHTML = formatTime(seconds);

  //console.log(days, hours, minutes, seconds);
}

//function says add a zero when countdown is going lower than 10 or just one digit
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

//initial call
countdown();

//calls the countdown function at intervals of  1 second
setInterval(countdown, 1000);
