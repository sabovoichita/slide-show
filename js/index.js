//REgister the sevice worker
if ("serviceWorker" in navigator) {
  // for local use only (when testing)
  //   console.debug = console.info = console.warn = console.error = console.log = log;
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/js/service-worker.js")
      .then(function (registration) {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch(function (error) {
        console.error("Service Worker registration failed:", error);
      });
  });
} else {
  //   console.debug = console.info = console.warn = console.error = log;
}
function setBackground(background) {
  $("body").style.backgroundImage = `url(${background})`;
}

function storeBigFiles(newFiles) {
  //console.info("window.indexedDB", window.indexedDB);
  // TODO: Store big files in indexedDB
}

function appendFiles(newFiles) {
  //storeBigFiles(newFiles);
  var files = JSON.parse(localStorage.getItem("files")) || [];
  files = files.concat(newFiles);
  try {
    localStorage.setItem("files", JSON.stringify(files));
  } catch (e) {
    console.warn("Error appending files to local storage: %o", e);
  }
}
function addImage(src) {
  const img = new Image();
  img.src = src;
  $("#slides").appendChild(img);
  return img;
}

const slidesConfig = {
  changeImageMinutes: 60,
  minOpacity: 0,
  maxOpacity: 0.8,
  opacityIntervals: {
    6: 0.8,
    7: 0.7,
    8: 0.2,
    9: 0,
    18: 0.3,
    20: 0.5,
    21: 0.7,
    22: 0.8
  }
};

function updateOpacity() {
  const config = slidesConfig;
  const date = new Date();
  const firstIntervalHour = Object.keys(config.opacityIntervals)[0];
  let opacity = slidesConfig.opacityIntervals[firstIntervalHour];
  const hour = date.getHours();
  for (let key in config.opacityIntervals) {
    if (hour >= key) {
      opacity = config.opacityIntervals[key];
    }
  }
  opacity = Math.min(config.maxOpacity, Math.max(config.minOpacity, opacity));
  console.debug("opacity for hour %o = %o.", hour, opacity);
  document.documentElement.style.setProperty("--pageBackgroundImgOpacity", opacity);
  return opacity;
}
function getNextChangeTimeout() {
  const date = new Date();
  const minutes = slidesConfig.changeImageMinutes;
  let timeoutSeconds = (minutes - (date.getMinutes() % minutes)) * 60 * 1000 - date.getSeconds() * 1000;
  date.setMilliseconds(date.getMilliseconds() + timeoutSeconds);
  console.debug("timeoutSeconds %o next: %o.", timeoutSeconds, date.toTimeString().substring(0, 8));
  return timeoutSeconds;
}

function displayNextImage() {
  const current = $("#slides img.active");
  if (current) {
    const next = current.nextElementSibling || $("#slides img");
    current.classList.remove("active");
    next.classList.add("active");
    next.scrollIntoView({ behavior: "smooth" });
    setBackground(next.src);
    updateOpacity();
    setTimeout(displayNextImage, getNextChangeTimeout());
  }
}
function removeActive() {
  const active = $("#slides img.active");
  if (active) {
    active.classList.remove("active");
  }
}

function initEvents() {
  //storeBigFiles([]);
  const files = JSON.parse(localStorage.getItem("files")) || [];
  files.forEach(function (file, i) {
    const img = addImage(file);
    if (i < 1) {
      img.classList.add("active");
      setBackground(file);
    }
  });
  $("input").addEventListener("change", function (event) {
    const files = Array.from(event.target.files);
    files.forEach(function (file, i) {
      if (!file.type.startsWith("image/")) {
        return;
      }
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function (event) {
          const img = addImage(event.target.result);
          if (i === 0) {
            removeActive();
            img.classList.add("active");
            setBackground(event.target.result);
          }
          appendFiles(event.target.result);
        },
        false
      );
      reader.readAsDataURL(file); // Read the file as a data URL
    });
  });
  $("#slides").addEventListener("click", function (event) {
    if (event.target.closest("img")) {
      setBackground(event.target.src, true);
      removeActive();
      event.target.classList.add("active");
    }
  });

  $("#clear").addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all images?")) {
      localStorage.removeItem("files");
      $$("#slides img").forEach(img => img.remove());
    }
  });
  updateOpacity();
  setTimeout(displayNextImage, getNextChangeTimeout());
}

initEvents();
startClock();
