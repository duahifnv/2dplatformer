// Класс игрока
class Player {
    constructor({ position, groundCollisionBlocks, deathCollisionBlocks }) {
        this.position = position;
        this.width = hitboxSize;
        this.height = hitboxSize;
        this.velocity = {
            x: 0,
            y: 1
        };
        this.groundCollisionBlocks = groundCollisionBlocks;
        this.deathCollisionBlocks = deathCollisionBlocks;
        const playerTexture = '../img/characters/player.png';

        this.sprite = new Sprite({
            position: {
                x: this.position.x - textureOffset,
                y: this.position.y - textureOffset
            },
            imageSrc: playerTexture,
            size: {
                width: textureSize,
                height: textureSize
            }
        });
    }

    update() {
        this.sprite.draw();
        this.spritePositionUpdate();

        this.drawPlayerHitbox();
        //this.drawGroundCollisionBlocks();
        //this.drawDeathCollisionBlocks();
        this.checkForDeathCollision();
        this.horizontalAcceleration();
        this.checkForHorizontalCollisions();
        this.verticalAcceleration();
        this.checkForVerticalCollisions();
        console.log(this.velocity.x);
    }

    horizontalAcceleration(){
        this.velocity.x = 0;
        if (keys.d.isPressed) {
            this.velocity.x = defaultVelocity_X;
            this.sprite.flipByX(true);
        }
        else if (keys.a.isPressed) {
            this.velocity.x = -defaultVelocity_X;
            this.sprite.flipByX(false);
        }
        this.position.x += this.velocity.x;
    }

    verticalAcceleration() {
        if (keys.w.isPressed) {
            for(let i = 0; i < groundCollisionBlocks.length; i++){
                // Проверка на наличие "земли под ногами"
                if (this.position.y + this.height === groundCollisionBlocks[i].position.y - 0.01){
                    this.velocity.y = -defaultVelocity_Y;
                }
            }
        }
        
        this.position.y += this.velocity.y;
        this.velocity.y += gravityC;
    }

    spritePositionUpdate() {
        this.sprite.position.x = this.position.x - textureOffset;
        this.sprite.position.y = this.position.y - textureOffset;
    }

    checkForDeathCollision() {
        for(let i = 0; i < this.deathCollisionBlocks.length; i++){
            const deathCollisionBlock = this.deathCollisionBlocks[i];
            if (
                collision({
                    obj1: this, 
                    obj2: deathCollisionBlock
                })
            ){
                this.position.x = startPos.x;
                this.position.y = startPos.y;
            }
        }
    }

    drawGroundCollisionBlocks(){
        for(let i = 0; i < this.groundCollisionBlocks.length; i++){
            c.fillStyle = 'rgba(255, 0, 0, 0.5)';
            c.fillRect(
                this.groundCollisionBlocks[i].position.x,
                this.groundCollisionBlocks[i].position.y,
                this.groundCollisionBlocks[i].width,
                this.groundCollisionBlocks[i].height
            );
        }
    }

    drawDeathCollisionBlocks(){
        for (let i = 0; i < this.deathCollisionBlocks.length; i++) {
            c.fillStyle = 'rgba(255, 0, 255, 0.5)';
            c.fillRect(
                this.deathCollisionBlocks[i].position.x,
                this.deathCollisionBlocks[i].position.y,
                this.deathCollisionBlocks[i].width,
                this.deathCollisionBlocks[i].height
            )
        }
    }
    
    drawPlayerHitbox(){
        c.fillStyle = 'rgba(0, 255, 0, 0.5)';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    

    checkForVerticalCollisions() {
        for (let i = 0; i < this.groundCollisionBlocks.length; i++) {
            const collisionBlock = this.groundCollisionBlocks[i];
            if (
                collision({
                    obj1: this,
                    obj2: collisionBlock,
                })
            ){
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y - this.height - 0.01; // 0.01 for anti-collision
                }
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01; // 0.01 for anti-collision
                }
            }
        }
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.groundCollisionBlocks.length; i++) {
            const collisionBlock = this.groundCollisionBlocks[i];
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
                    this.position.x = collisionBlock.position.x - this.width - 0.01; // 0.01 for anti-collision
                }
            }
        }
    }
}