class DrawableObject {
  img;
  imgCache = {};
  currentImage = 0;
  
  x = 0;
  y = 300;
  height = 150;
  width = 100;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /**
   * Load image for any movable character.
   * @param {The path of the image to be loaded} path
   */
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElemnetById("image") <img id="image" src="..">
    this.img.src = path; // Hier dann die source für das Bild vom dem Pfad ableiten.
  }

  /**
   * Import from world.class.js
   * Hier werden die zu Zeichnenden Bilder auf die Canvas gezeichnet.
   * @param {each movable object} ctx
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Den Rahmen um die Objekte zeichnen um die Kollision zu visualisieren.
   * Import from world.class.js
   * "InstanceOf" bedeutet, dass nur die in der if Bediengung markierten Objekte die Umrandung bekommen.
   * Und das nur für die drawable-object.class.js, da hier auch mit "this" bezeichnet ist.
   * @param {*} ctx
   */
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof MiniChicken
    ) {
      /**
       * "ctx = context" ist ein Objekt, das Methoden und Eigenschaften für das Zeichnen auf der Canvas bietet.
       * Die Methoden und Eigenschaften sind in der HTML5 Canvas API definiert.
       */
      ctx.beginPath(); // Ein neuer Pfad beginnt, der von vorherigen Zeichenpfaden unabhängig ist.

      // ctx.lineWidth = "2";
      // ctx.strokeStyle = "red";
      // ctx.rect(this.x, this.y, this.width, this.height);

      ctx.stroke(); // Rahmen Zeichnen.
    }
  }

  /**
   * Wird bei den Charakteren und bewegten Objekten durch super() gestartet."
   * @param {Array image summary} array
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image(); // Image erstellen. Dann,
      img.src = path; // die source zuweisen.
      this.imgCache[path] = img;
      // Das Image mit seinem zugewiesenem source in das Array pushen.
      // Der [path] ist der Schlüssel im Array des jeweiligen Bildes.
    });
  }
}
