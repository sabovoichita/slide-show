var clockConfig = {
  clockEl: null,
  showSeconds: false,
  displayChars: 5
};

function startClock(showSeconds) {
  if (showSeconds) {
    clockConfig.showSeconds = true;
    clockConfig.displayChars = 8;
  }
  clockConfig.clockEl = document.createElement("div");
  clockConfig.clockEl.id = "clock";
  document.body.appendChild(clockConfig.clockEl);
  changeClock();
}
function changeClock() {
  const date = new Date();
  clockConfig.clockEl.innerText = date.toTimeString().substring(0, clockConfig.displayChars);
  if (clockConfig.showSeconds) {
    setTimeout(changeClock, 1000);
  } else {
    setTimeout(changeClock, (60 - date.getSeconds()) * 1000);
  }
}
