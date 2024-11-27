const clockConfig = {
  timeout: null,
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
    clearTimeout(config.timeout);
  } else {
    config.clockEl = document.createElement("div");
    config.clockEl.id = "clock";
    config.clockEl.classList.add("clock");
    document.body.appendChild(config.clockEl);
  }
  changeClock();
  return config;
}

function changeClock() {
  const config = clockConfig;
  const date = new Date();
  config.clockEl.innerText = date.toTimeString().substring(0, config.displayChars);
  if (config.showSeconds) {
    config.timeout = setTimeout(changeClock, 1000);
  } else {
    config.timeout = setTimeout(changeClock, (60 - date.getSeconds()) * 1000);
  }
}
