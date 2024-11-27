// for local use only (when testing)
// console.debug = console.info = console.warn = console.error = console.log = log;

window.onerror = function (message, source, lineno, colno, error) {
  console.warn(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${JSON.stringify(error)}`
  );
  return false; // Returning false will suppress the default browser error message
};

function createLogsEl() {
  const el = document.createElement("div");
  el.id = "logs";
  document.body.appendChild(el);
  return el;
}

function log() {
  const messages = Array.from(arguments);
  if (typeof messages[0] === "string") {
    while (messages[0].includes("%o")) {
      messages[0] = messages[0].replace("%o", `<span>'${messages[1]}'</span>`);
      messages.splice(1, 1);
    }
  }
  const msg = messages.join(" ");
  const el = $("#logs") || createLogsEl();
  el.innerHTML += msg + "<br>";
}

function $(selector, parent) {
  return (parent || document).querySelector(selector);
}

function $$(selector, parent) {
  return Array.from((parent || document).querySelectorAll(selector));
}
