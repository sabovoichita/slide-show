window.onerror = function (message, source, lineno, colno, error) {
  console.warn(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${JSON.stringify(error)}`
  );
  return false; // Returning false will suppress the default browser error message
};

function log() {
  var msg = Array.from(arguments).join(" ");
  $("#logs").innerHTML += msg + "<br>";
}

function $(selector, parent) {
  return (parent || document).querySelector(selector);
}

function $$(selector, parent) {
  return [...(parent || document).querySelectorAll(selector)];
}
