class CollisionManager {
  constructor(world) {
    this.world = world;
  }

  checkAllCollisions() {
    this.checkCollisionEnemies();
    this.checkCollisionBottles();
    this.checkCollisionCoins();
    this.checkCollisionTo();
  }

  checkCollisionEnemies() {
    this.world.level.enemies.forEach((enemy) =>
      this.checkEnemiesCollisions(enemy)
    );
  }

  checkEnemiesCollisions(enemy) {
    if (
      this.world.character.isColliding(enemy) &&
      (enemy instanceof Chicken || enemy instanceof MiniChicken)
    )
      this.checkCollisionChicken(enemy);
    if (this.world.character.isColliding(enemy) && enemy instanceof Endboss)
      this.checkCollisionEndboss(enemy);
  }

  checkCollisionChicken(enemy) {
    if (
      this.world.isCharacterColidingAbove(enemy) &&
      this.world.character.isAboveGround() &&
      !enemy.isDead
    )
      this.world.setEnemyDead(enemy);
    else if (!enemy.isDead && !this.world.character.isDead())
      this.world.hitCharacter();
  }

  checkCollisionEndboss(enemy) {
    if (!enemy.isDead() && !this.world.character.isDead())
      this.world.hitCharacter();
    else if (!enemy.isDead() && this.world.character.isDead())
      this.world.setGameOverScreen(this.world.IMAGE_LOSE);
  }

  checkCollisionBottles() {
    this.world.bottles.forEach((bottle) => this.collisionBottles(bottle));
  }

  collisionBottles(bottle) {
    const activeBottle = bottle;
    const bottled = this.world.bottles.indexOf(activeBottle);
    if (
      this.world.character.isColliding(activeBottle) &&
      this.world.isSpaceInBar()
    )
      this.world.addToStatusBar(bottled, bottle);
  }

  checkCollisionCoins() {
    this.world.coins.forEach((coin) => this.collisionCoins(coin));
  }

  collisionCoins(coin) {
    const activeCoin = coin;
    let coined = this.world.coins.indexOf(activeCoin);
    if (this.world.character.isColliding(activeCoin))
      this.world.addToCoinBar(coined, coin);
  }

  checkCollisionTo() {
    this.world.throwableObjects.forEach((tO) =>
      this.world.level.enemies.forEach((enmy) =>
        this.checkAllToCollisions(enmy, tO)
      )
    );
  }

  checkAllToCollisions(enmy, tO) {
    if (
      tO.isColliding(enmy) &&
      (enmy instanceof Chicken || enmy instanceof MiniChicken) &&
      !enmy.isDead
    )
      this.world.checkToCollidingChicken(tO, enmy);
    if (tO.isColliding(enmy) && enmy instanceof Endboss)
      this.world.checkToCollidingEndboss(tO, enmy);
  }
}

export default CollisionManager;
