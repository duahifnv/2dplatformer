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
        const playerTexture = '../img/characters/player.png';
        this.sprite = new Sprite({
            position: this.position, 
            imageSrc: playerTexture,
            size: this.size
        });
    }

    update() {
        //this.drawPlayerHitbox();
        //this.drawCollisionBlocks();
        this.sprite.draw();
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
    }

    drawCollisionBlocks(){
        for(let i = 0; i < this.collisionBlocks.length; i++){
            c.fillStyle = 'rgba(255, 0, 0, 0.5)';
            c.fillRect(
                this.collisionBlocks[i].position.x,
                this.collisionBlocks[i].position.y,
                this.collisionBlocks[i].width,
                this.collisionBlocks[i].height
            );
        }
    }

    drawPlayerHitbox(){
        c.fillStyle = 'rgba(0, 255, 0, 0.5)';
        c.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
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