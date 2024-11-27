const clockConfig = {
  clockEl: null,
  showSeconds: false,
  displayChars: 8
};

function startClock(showSeconds) {
  const config = clockConfig;
  if (showSeconds !== undefined) {
    config.showSeconds = !!showSeconds;
  }
  config.displayChars = config.showSeconds ? 8 : 5;
  if (config.clockEl) {
    clearTimeout(config.t);
  } else {
    config.clockEl = document.createElement("div");
    config.clockEl.id = "clock";
    document.body.appendChild(config.clockEl);
  }
  changeClock();
}
function changeClock() {
  const config = clockConfig;
  const date = new Date();
  config.clockEl.innerText = date.toTimeString().substring(0, config.displayChars);
  if (config.showSeconds) {
    config.t = setTimeout(changeClock, 1000);
  } else {
    config.t = setTimeout(changeClock, (60 - date.getSeconds()) * 1000);
  }
}

console.warn("clock.js loaded");
