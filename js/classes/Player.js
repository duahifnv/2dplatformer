// Класс игрока
class Player {
    constructor({ position, collisionBlocks }) {
        this.position = position;
        this.size = {
            width: playerSize,
            height: playerSize
        };
        this.velocity = {
            x: 0,
            y: 1
        };
        this.collisionBlocks = collisionBlocks;
    }
    draw() {
        c.fillStyle = "white";
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
    }
    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravityC;
    }
    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            if (
                collision({
                    obj1: this,
                    obj2: collisionBlock,
                })
            ){
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y - this.size.height - 0.01; // 0.01 for anti-collision
                }
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01; // 0.01 for anti-collision
                }
            }
        }
    }
    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            if (
                collision({
                    obj1: this,
                    obj2: collisionBlock,
                })
            ){
                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01; // 0.01 for anti-collision
                }
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionBlock.position.x - this.size.width - 0.01; // 0.01 for anti-collision
                }
            }
        }
    }
}