let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let audio = true;

/**
 * Mit "onload" wird die Funktion "init" aufgerufen, sobald die Seite vollständig geladen ist.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  addMobileListener();
}

/**
 * Tastatur für das Spiel bereitstellen.
 */
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.THROW = true;
  }
});

/**
 * Tastatur für das Spiel bereitstellen.
 */
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.THROW = false;
  }
});

// ###################################################################

/**
 * Setzt den Zustand der linken Taste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der linken Taste (true für gedrückt, false für losgelassen).
 */
function setKeybordLeft(e, bool) {
  e.preventDefault();
  keyboard.LEFT = bool;
}

/**
 * Setzt den Zustand der rechten Taste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der rechten Taste (true für gedrückt, false für losgelassen).
 */
function setKeybordRight(e, bool) {
  e.preventDefault();
  keyboard.RIGHT = bool;
}

/**
 * Setzt den Zustand der Sprungtaste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der Sprungtaste (true für gedrückt, false für losgelassen).
 */
function setKeybordJump(e, bool) {
  e.preventDefault();
  keyboard.SPACE = bool;
}

/**
 * Setzt den Zustand der Wurftaste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der Wurftaste (true für gedrückt, false für losgelassen).
 */
function setKeybordThrow(e, bool) {
  e.preventDefault();
  keyboard.THROW = bool;
}

/**
 * Setzt den Zustand der Befehlstaste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der Befehlstaste (true für gedrückt, false für losgelassen).
 */
function setKeybordCommand(e, bool) {
  e.preventDefault();
  keyboard.COMMAND = bool;
}

/**
 * Setzt den Zustand der Neustarttaste der Tastatur.
 * @param {Event} e - Das Ereignisobjekt.
 * @param {boolean} bool - Der Zustand der Neustarttaste (true für gedrückt, false für losgelassen).
 */
function setKeybordRestart(e, bool) {
  e.preventDefault();
  keyboard.RESTART = bool;
}

// ###################################################################

/**
 * Fügt Eventlistener für den `btnLeft`-Button hinzu, um die Eigenschaft `LEFT` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnLeft() {
  document
    .getElementById("btnLeft")
    .addEventListener("touchstart", (e) => setKeybordLeft(e, true));
  document
    .getElementById("btnLeft")
    .addEventListener("touchend", (e) => setKeybordLeft(e, false));
}

/**
 * Fügt Eventlistener für den `btnRight`-Button hinzu, um die Eigenschaft `RIGHT` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnRight() {
  document
    .getElementById("btnRight")
    .addEventListener("touchstart", (e) => setKeybordRight(e, true));
  document
    .getElementById("btnRight")
    .addEventListener("touchend", (e) => setKeybordRight(e, false));
}

/**
 * Fügt Eventlistener für den `btnJump`-Button hinzu, um die Eigenschaft `SPACE` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnJump() {
  document
    .getElementById("btnJump")
    .addEventListener("touchstart", (e) => setKeybordJump(e, true));
  document
    .getElementById("btnJump")
    .addEventListener("touchend", (e) => setKeybordJump(e, false));
}

/**
 * Fügt Eventlistener für den `btnThrow`-Button hinzu, um die Eigenschaft `THROW` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnThrow() {
  document
    .getElementById("btnThrow")
    .addEventListener("touchstart", (e) => setKeybordThrow(e, true));
  document
    .getElementById("btnThrow")
    .addEventListener("touchend", (e) => setKeybordThrow(e, false));
}

/**
 * Fügt Eventlistener für den `commandButton`-Button hinzu, um die Eigenschaft `COMMAND` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnCommand() {
  document
    .getElementById("commandButton")
    .addEventListener("touchstart", (e) => setKeybordCommand(e, true));
  document
    .getElementById("commandButton")
    .addEventListener("touchend", (e) => setKeybordCommand(e, false));
}

/**
 * Fügt Eventlistener für den `backToMenu`-Button hinzu, um die Eigenschaft `RESTART` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnRestart() {
  document
    .getElementById("backToMenu")
    .addEventListener("touchstart", (e) => setKeybordRestart(e, true));
  document
    .getElementById("backToMenu")
    .addEventListener("touchend", (e) => setKeybordRestart(e, false));
}

// ###################################################################

/**
 * Prepare the events for keyboard input and touch input.
 */
function addMobileListener() {
  addMobileListenersToBtnLeft();
  addMobileListenersToBtnRight();
  addMobileListenersToBtnJump();
  addMobileListenersToBtnThrow();
  addMobileListenersToBtnCommand();
  addMobileListenersToBtnRestart();
  setAudioOnOff();
  showHideCommands();
}

/**
 * Die Anzeige der Benutzer Interaktionen.
 */
function showHideCommands() {
  addMenuEventlistener();
  addBackButtonListener();
  addRestartEventlistener();
}

/**
 * Fügt den Eventlistenern für den Neustart-Button hinzu.
 * Diese Funktion stellt sicher, dass der Neustart-Button sowohl mit der Maustaste "click"- als auch mit dem Finger auf "touchstart"-Ereignisse reagiert.
 */
function addRestartEventlistener() {
  let backToMenu = document.getElementById("backToMenu"); // Back to Menu
  backToMenu.addEventListener("click", () => resetGame(backToMenu));
  backToMenu.addEventListener("touchstart", () => resetGame(backToMenu));
}

/**
 * Setzt das Spiel zurück und zeigt den Startbildschirm an.
 * Diese Funktion wird aufgerufen, wenn der Neustart-Button gedrückt wird.
 * Sie versteckt das Spielfeld und zeigt den Startbildschirm an, während sie auch den Neustart-Button verbirgt.
 * Schließlich wird die `init`-Funktion aufgerufen, um das Spiel neu zu initialisieren.
 */
function resetGame() {
  document.getElementById("startScreen").classList.remove("dNone");
  document.getElementById("canvas").classList.add("dNone");
  backToMenu.classList.add("dNone");
  init();
}

// ------------------------------------------------------------
//             Anzeige der Benutzer Interaktionen.
// ------------------------------------------------------------

/**
 * Das Hinzufügen des Buttens um das Benutzer Interaktionensmenü zu verlassen.
 */
function addBackButtonListener() {
  let backButton = document.getElementById("backButton");
  backButton.addEventListener("click", () => hideCommands());
  backButton.addEventListener("touchstart", () => hideCommands());
}

/**
 * Set the events for user interactions to show them.
 */
function addMenuEventlistener() {
  let commandButton = document.getElementById("commandButton");
  let commandContainer = document.getElementById("optionBox");

  commandButton.addEventListener("click", () =>
    setCommandsContainer(commandContainer)
  );
  commandButton.addEventListener("touchstart", () =>
    setCommandsContainer(commandContainer)
  );
}

/**
 * Zeige das user interaction an.
 * @param {HTML Element} commandContainer
 */
function setCommandsContainer(commandContainer) {
  if (commandContainer.classList.contains("dNone")) showCommands();
  else hideCommands();
}

/**
 * TODOOOOOO
 */
function showCommands() {
  if (world.checkGameStartet()) {
    document.getElementById("optionBox").classList.remove("dNone");
    document.getElementById("canvas").classList.add("dNone");
  } else {
    document.getElementById("optionBox").classList.remove("dNone");
    document.getElementById("startScreen").classList.add("dNone");
  }
}

/**
 * TODOOOOOO
 */
function hideCommands() {
  if (world.checkGameStartet()) {
    document.getElementById("optionBox").classList.add("dNone");
    document.getElementById("canvas").classList.remove("dNone");
  } else {
    document.getElementById("optionBox").classList.add("dNone");
    document.getElementById("startScreen").classList.remove("dNone");
  }
  console.log("hideCommands wurde aufgerufen");
  console.log('checkGameStartet gibt zurück:', world.checkGameStartet());
}

// ------------------------------------------------------------
// ------------------------------------------------------------

function setAudioOnOff() {
  let audioBtn = document.getElementById("audioBtn");
  audioBtn.addEventListener("touchstart", (e) => setAudioOn(e));
  audioBtn.addEventListener("click", (e) => setAudioOn(e));
}

function setAudioOn(e) {
  e.preventDefault();
  if (audio && world.checkGameStartet()) muteSound();
  else if (!audio && world.checkGameStartet()) activateSound();
}

function setAudioActiveEnemies(enemy, volume) {
  if (enemy.AUDIO_DEATH) enemy.AUDIO_DEATH.volume = volume;
}

function setAudioActivePickables(tile, volume) {
  if (tile.AUDIO_PICK) tile.AUDIO_PICK.volume = volume;
}

function activateSound() {
  let audioBtn = document.getElementById("audioBtn");
  audio = true;
  writeToSessionStorage();
  audioBtn.style = 'background-image:url("./img/speakerOn.png");';
  world.character.WALKING_SOUND.volume = 0.5;
  world.level.enemies.forEach((enemy) => setAudioActiveEnemies(enemy, 0.5));
  world.bottles.forEach((bottle) => setAudioActivePickables(bottle, 0.5));
  world.coins.forEach((coin) => setAudioActivePickables(coin, 0.5));
}

function muteSound() {
  let audioBtn = document.getElementById("audioBtn");
  audio = false;
  writeToSessionStorage();
  audioBtn.style = 'background-image:url("./img/speakerOff.png");';
  world.character.WALKING_SOUND.volume = 0;
  world.coins.forEach((coin) => setAudioActivePickables(coin, 0));
  world.bottles.forEach((bottle) => setAudioActivePickables(bottle, 0));
  world.level.enemies.forEach((enemy) => setAudioActiveEnemies(enemy, 0));
}
writeToSessionStorage();
function writeToSessionStorage() {
  sessionStorage.setItem("audio", JSON.stringify(audio));
}

function loadAudioONOff() {
  if (audio) {
    activateSound();
  } else muteSound();
}

function loadFromStorage() {
  if (sessionStorage.audio) audio = JSON.parse(sessionStorage.audio);
  loadAudioONOff();
}

// ###################################################################
