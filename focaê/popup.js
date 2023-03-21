let isPaused = false;

function togglePause() {
  isPaused = !isPaused;
  let toggleButton = document.getElementById("toggle-button");
  toggleButton.innerText = isPaused ? "Retomar" : "Pausar";
}

document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", togglePause);
});
