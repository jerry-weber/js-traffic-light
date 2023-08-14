// Manual Mode Functions
function stopbutton() {
  document.getElementById("stopButton").style.backgroundColor = "#cf1124";
  document.getElementById("stopLight").style.backgroundColor = "#cf1124";
  document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
  document.getElementById("readyLight").style.backgroundColor = "#4b5069";
  document.getElementById("goButton").style.backgroundColor = "#1f1d41";
  document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function readybutton() {
  document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
  document.getElementById("stopLight").style.backgroundColor = "#4b5069";
  document.getElementById("readyButton").style.backgroundColor = "#f7c948";
  document.getElementById("readyLight").style.backgroundColor = "#f7c948";
  document.getElementById("goButton").style.backgroundColor = "#1f1d41";
  document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function golight() {
  document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
  document.getElementById("stopLight").style.backgroundColor = "#4b5069";
  document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
  document.getElementById("readyLight").style.backgroundColor = "#4b5069";
  document.getElementById("goButton").style.backgroundColor = "#199473";
  document.getElementById("goLight").style.backgroundColor = "#199473";
}

// Automatic Mode Functions
const lightStates = ["stop", "ready", "go"];

let currentLightIndex = 0;
let automaticMode = true;

function switchLights() {
  if (automaticMode) {
    currentLightIndex = (currentLightIndex + 1) % lightStates.length;
    updateLights();
  }
}

function updateLights() {
  const lights = document.querySelectorAll(".container-body");
  lights.forEach((light, index) => {
    // Remove the previous class names (stop, ready, go)
    light.classList.remove("stop", "ready", "go");

    // Determine the current light state and add the corresponding class name
    if (index === currentLightIndex) {
      light.classList.add(lightStates[index]);
    }
  });
}

setInterval(switchLights, 2000); // Change light every 2 seconds

function toggleAutomaticMode() {
  automaticMode = !automaticMode;
  if (automaticMode) {
    switchLights(); // Start the automatic flow
  } else {
    updateLights(); // Update to the current manual state
  }
}

function stopButton() {
  currentLightIndex = 0;
  updateLights();
}

function readyButton() {
  currentLightIndex = 1;
  updateLights();
}

function goButton() {
  currentLightIndex = 2;
  updateLights();
}
