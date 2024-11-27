// check if navigator is safari and check version (find if os is ios9)
const oldBrowser = navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i);

const icons = {
  // https://www.svgrepo.com/svg/486591/clear
  clear: `<svg fill="#797979" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.076736,42.6666667 42.6666667,119.076736 42.6666667,213.333333 C42.6666667,307.589931 119.076736,384 213.333333,384 C307.589931,384 384,307.589931 384,213.333333 C384,119.076736 307.589931,42.6666667 213.333333,42.6666667 Z M288.758057,107.738721 L318.927946,137.90861 L243.502,213.333 L318.927946,288.758057 L288.758057,318.927946 L213.333,243.502 L137.90861,318.927946 L107.738721,288.758057 L183.163,213.333 L107.738721,137.90861 L137.90861,107.738721 L213.333,183.163 L288.758057,107.738721 Z" transform="translate(42.667 42.667)"></path></g></svg>`,
  // https://www.svgrepo.com/svg/171102/delete
  delete: `<svg fill="#797979" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_6_"> <g id="XMLID_11_"> <path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z"></path> </g> <g id="XMLID_18_"> <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"></path> </g> <g id="XMLID_23_"> <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"></path> </g> </g> </g></svg>`,
  // https://www.svgrepo.com/svg/257662/left-arrow-next
  collapse: `<svg fill="#797979" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.801 511.801" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M271.067,255.84l237.76-237.76c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0L248.453,248.373 c-4.16,4.16-4.16,10.88,0,15.04l245.333,245.333c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L271.067,255.84z"></path> <path d="M25.733,255.84l237.76-237.76c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0L3.12,248.267 c-4.16,4.16-4.16,10.88,0,15.04L248.453,508.64c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L25.733,255.84z"></path> </g> </g> </g> </g></svg>`
};

// Register the service worker
if ("serviceWorker" in navigator) {
  console.log("Service Worker %o", "is supported");
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
  console.log("Service Worker %o", "not supported");
}

function setBackground(background) {
  $("body").style.backgroundImage = `url(${background})`;
}

function storeBigFiles(newFiles) {
  //console.info("window.indexedDB", window.indexedDB);
  // TODO: Store big files in indexedDB
  // https://imagekit.io/blog/how-to-resize-image-in-javascript/
  // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
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
  maxOpacity: 1,
  opacityIntervals: {
    5: 0.9,
    6: 0.5,
    7: 0.4,
    8: 0.2,
    9: 0,
    18: 0.3,
    20: 0.5,
    21: 0.7,
    22: 0.9
  }
};

function updateOpacity() {
  const config = slidesConfig;
  const date = new Date();
  const firstIntervalHour = Object.keys(config.opacityIntervals)[0];
  var opacity = slidesConfig.opacityIntervals[firstIntervalHour];
  const hour = date.getHours();
  Object.keys(config.opacityIntervals).forEach(function (key) {
    if (hour >= key) {
      opacity = config.opacityIntervals[key];
    }
  });
  opacity = Math.min(config.maxOpacity, Math.max(config.minOpacity, opacity));
  console.debug("opacity for hour %o = %o", hour, opacity);
  // modern browsers support CSS variables change
  document.documentElement.style.setProperty("--pageBackgroundImgOpacity", opacity);

  if (oldBrowser) {
    //console.warn("Safari detected", navigator.userAgent);
    setBodyBeforeBackgroundColor("body::before", `rgba(0, 0, 0, ${opacity})`);
  }
  return opacity;
}

// old browsers support
function setBodyBeforeBackgroundColor(selector, color) {
  const sheets = document.styleSheets;
  for (var i = 0; i < sheets.length; i++) {
    const rules = sheets[i].cssRules || sheets[i].rules;
    for (var j = 0; j < rules.length; j++) {
      if (rules[j].selectorText === selector) {
        rules[j].style.backgroundColor = color;
        return;
      }
    }
  }
}

function getNextChangeTimeout() {
  const date = new Date();
  const minutes = slidesConfig.changeImageMinutes;
  const timeoutSeconds = (minutes - (date.getMinutes() % minutes)) * 60 * 1000 - date.getSeconds() * 1000;
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
  }
  // if there is no active image we still have to update the opacity
  updateOpacity();
  setTimeout(displayNextImage, getNextChangeTimeout());
}

function removeActive() {
  const active = $("#slides img.active");
  if (active) {
    active.classList.remove("active");
  }
}

function getSavedFiles() {
  return JSON.parse(localStorage.getItem("files")) || [];
}

function initEvents() {
  //storeBigFiles([]);
  const files = getSavedFiles();
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

  $("#upload-btn").addEventListener("click", function () {
    $("#upload").click();
  });

  $("#clear").addEventListener("click", function () {
    const confirmed = confirm("Are you sure you want to clear all images?");
    if (confirmed) {
      localStorage.removeItem("files");
      $$("#slides img").forEach(function (img) {
        img.remove();
      });
    }
  });
  $("#delete").addEventListener("click", function () {
    const confirmed = confirm("Are you sure you want to remove the active image?");
    if (confirmed) {
      const active = $("#slides img.active");
      if (active) {
        const files = getSavedFiles();
        const index = files.indexOf(active.src);
        if (index > -1) {
          files.splice(index, 1);
          localStorage.setItem("files", JSON.stringify(files));
          displayNextImage();
        }
        active.remove();
      }
    }
  });

  $("#collapse").addEventListener("click", function () {
    // TODO store state in localStorage
    $("#collapse").classList.toggle("rotate-180");
    // hide oll other elements from actions toolbar
    const actions = $("#actions");
    $$(".action-btn:not(#collapse)", actions).forEach(function (button) {
      button.disabled = !button.disabled; // prevent click events
    });
    // slide to left/right the actions toolbar
    if (actions.classList.contains("collapsed")) {
      actions.classList.remove("collapsed");
      actions.classList.add("expanded");
    } else {
      actions.classList.remove("expanded");
      actions.classList.add("collapsed");
    }
  });

  const clock = startClock();
  clock.clockEl.addEventListener("click", function () {
    startClock(!clock.showSeconds);
  });

  updateOpacity();
  setTimeout(displayNextImage, getNextChangeTimeout());
}

function updateIcons() {
  $$(".icon").forEach(function (icon) {
    const svg = icons[icon.id];
    if (svg) {
      icon.innerHTML = svg;
    }
  });
}

if (oldBrowser) {
  console.warn("Old browser detected", navigator.userAgent);
  $("body").classList.add("old-browser");
}

console.debug("index.js loaded");
updateIcons();
initEvents();
