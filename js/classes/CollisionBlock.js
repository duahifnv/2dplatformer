class CollisionBlock {
    constructor({position}) {
        this.position = position;
        this.width = tileSize;
        this.height = tileSize;
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
    }
}