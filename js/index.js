//REgister the sevice worker
if ("serviceWorker" in navigator) {
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
  console.debug = console.info = console.warn = console.error = log;
}
function setBackground(background) {
  $("body").style.backgroundImage = `url(${background})`;
}
function appendFiles(newFiles) {
  var files = JSON.parse(localStorage.getItem("files")) || [];
  files = files.concat(newFiles);
  localStorage.setItem("files", JSON.stringify(files));
}
function addImage(src) {
  const img = new Image();
  img.src = src;
  $("#slides").appendChild(img);
  return img;
}
function displayNextImage() {
  const current = $("#slides img.active");
  if (current) {
    const next = current.nextElementSibling || $("#slides img");
    current.classList.remove("active");
    next.classList.add("active");
    next.scrollIntoView({ behavior: "smooth" });
    setBackground(next.src);
  }
}
function removeActive() {
  const active = $("#slides img.active");
  if (active) {
    active.classList.remove("active");
  }
}

function initEvents() {
  const files = JSON.parse(localStorage.getItem("files")) || [];
  files.forEach(function (file, i) {
    const img = addImage(file);
    if (i === 0) {
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

  setInterval(displayNextImage, 10000);
}

initEvents();
startClock(true);
