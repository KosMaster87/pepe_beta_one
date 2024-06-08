/**
 * Setzt die Eigenschaft `LEFT` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordLeft(e, bool) {
  console.log(e);
  console.log(bool);
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.LEFT = bool; // Setzt die Eigenschaft `LEFT` auf den angegebenen Wert.
}

/**
 * Setzt die Eigenschaft `RIGHT` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordRight(e, bool) {
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.RIGHT = bool; // Setzt die Eigenschaft `RIGHT` auf den angegebenen Wert.
}

/**
 * Setzt die Eigenschaft `SPACE` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordJump(e, bool) {
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.SPACE = bool; // Setzt die Eigenschaft `SPACE` auf den angegebenen Wert.
}

/**
 * Setzt die Eigenschaft `THROW` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordThrow(e, bool) {
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.THROW = bool; // Setzt die Eigenschaft `THROW` auf den angegebenen Wert.
}

/**
 * Setzt die Eigenschaft `COMMAND` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordCommand(e, bool) {
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.COMMAND = bool; // Setzt die Eigenschaft `COMMAND` auf den angegebenen Wert.
}

/**
 * Setzt die Eigenschaft `RESTART` der Tastatur auf den angegebenen Wert.
 * @param {Event} e - Das Ereignisobjekt des Events.
 * @param {boolean} bool - Der Wert, auf den die Eigenschaft gesetzt werden soll.
 */
function setKeybordRestart(e, bool) {
  e.preventDefault(); // Verhindert das Standardverhalten des Events.
  keyboard.RESTART = bool; // Setzt die Eigenschaft `RESTART` auf den angegebenen Wert.
}

// ###################################################################

/**
 * Fügt Eventlistener für den `btnLeft`-Button hinzu, um die Eigenschaft `LEFT` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnLeft() {
  document
    .getElementById("btnLeft")
    .addEventListener("touchstart", (e) => setKeybordLeft(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("btnLeft")
    .addEventListener("touchend", (e) => setKeybordLeft(e, false)); // Beim Loslassen des Buttons.
}

/**
 * Fügt Eventlistener für den `btnRight`-Button hinzu, um die Eigenschaft `RIGHT` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnRight() {
  document
    .getElementById("btnRight")
    .addEventListener("touchstart", (e) => setKeybordRight(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("btnRight")
    .addEventListener("touchend", (e) => setKeybordRight(e, false)); // Beim Loslassen des Buttons.
}

/**
 * Fügt Eventlistener für den `btnJump`-Button hinzu, um die Eigenschaft `SPACE` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnJump() {
  document
    .getElementById("btnJump")
    .addEventListener("touchstart", (e) => setKeybordJump(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("btnJump")
    .addEventListener("touchend", (e) => setKeybordJump(e, false)); // Beim Loslassen des Buttons.
}

/**
 * Fügt Eventlistener für den `btnThrow`-Button hinzu, um die Eigenschaft `THROW` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnThrow() {
  document
    .getElementById("btnThrow")
    .addEventListener("touchstart", (e) => setKeybordThrow(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("btnThrow")
    .addEventListener("touchend", (e) => setKeybordThrow(e, false)); // Beim Loslassen des Buttons.
}

/**
 * Fügt Eventlistener für den `commandButton`-Button hinzu, um die Eigenschaft `COMMAND` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnCommand() {
  document
    .getElementById("commandButton")
    .addEventListener("touchstart", (e) => setKeybordCommand(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("commandButton")
    .addEventListener("touchend", (e) => setKeybordCommand(e, false)); // Beim Loslassen des Buttons.
}

/**
 * Fügt Eventlistener für den `backToMenu`-Button hinzu, um die Eigenschaft `RESTART` der Tastatur beim Drücken und Loslassen zu setzen.
 */
function addMobileListenersToBtnRestart() {
  document
    .getElementById("backToMenu")
    .addEventListener("touchstart", (e) => setKeybordRestart(e, true)); // Beim Drücken des Buttons.
  document
    .getElementById("backToMenu")
    .addEventListener("touchend", (e) => setKeybordRestart(e, false)); // Beim Loslassen des Buttons.
}
