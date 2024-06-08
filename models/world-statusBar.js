class WorldStatusBars {
  // statusbars = [];

  // constructor() {
  //   // this.initBars();
  // }

  /**
   * Initialises the statusBars
   */
  initBars() {
    this.statusbars.push(
      new CharacterStatusBar(),
      new CoinStatusBar(),
      new BottleStatusBar()
    );
  }
}
