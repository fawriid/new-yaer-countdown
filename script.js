const daysPlace = document.querySelector("#days h2");
const hoursPlace = document.querySelector("#hours h2");
const minutesPlace = document.querySelector("#minutes h2");
const secondsPlace = document.querySelector("#seconds h2");

function countDown() {
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();
  let nextYear = currentYear + 1;
  let newYear = new Date(`1 jan ${nextYear}`);
  newYear = newYear.getTime();

  let currentTime = new Date();
  currentTime = currentTime.getTime();

  let remainTime = newYear - currentTime;
  remainTime = remainTime / 1000; //seconds without decimals

  let days = Math.floor(remainTime / 3600 / 24);
  let hours = Math.floor((remainTime / 3600) % 24);
  let minutes = Math.floor((remainTime / 60) % 60);
  let seconds = Math.floor(remainTime % 60);

  daysPlace.innerHTML = decoration(days);
  hoursPlace.innerHTML = decoration(hours);
  minutesPlace.innerHTML = decoration(minutes);
  secondsPlace.innerHTML = decoration(seconds);
}
// console.log(newYear - currentTime);
setInterval(countDown, 500);

function decoration(T) {
  return T < 10 ? `0${T}` : T;
}
