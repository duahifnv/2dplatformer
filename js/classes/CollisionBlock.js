class CollisionBlock {
    constructor({position, width, height}) {
        this.position = position;
        this.width = width;
        this.height = height;
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
    }
}