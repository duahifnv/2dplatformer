// Класс игрока
class Player{
    constructor({ position, groundCollisionBlocks, deathCollisionBlocks, startPos, levelID }) {
        this.position = position;
        this.startPos = startPos;
        this.levelID = levelID;
        this.width = hitboxSize;
        this.height = hitboxSize;
        this.velocity = {
            x: 0,
            y: 1
        };
        this.groundCollisionBlocks = groundCollisionBlocks;
        this.deathCollisionBlocks = deathCollisionBlocks;
        var playerTexture = '../img/characters/player.png';

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

        this.drawFlags = {
            drawPlayerHitbox: false,
            drawGroundCollisionBlocks: false,
            drawDeathCollisionBlocks: false,
        }
        this.cheatFlags = {
            flyMode: false
        }
    }

    update() {
        this.sprite.draw();
        this.spritePositionUpdate();

        for (const property in this.drawFlags) {
            if (this.drawFlags[property] === true) {
                eval('this.' + property + '()');
            }
        }

        this.checkForDeathCollision();
        this.horizontalAcceleration();
        this.checkForHorizontalCollisions();
        this.verticalAcceleration();
        this.checkForVerticalCollisions();
        this.checkForGameEnd();
    }

    horizontalAcceleration(){
        this.velocity.x = 0;
        if (keys['KeyD'].isPressed) {
            this.velocity.x = defaultVelocity_X;
            this.sprite.flipByX(true);
        }
        else if (keys['KeyA'].isPressed) {
            this.velocity.x = -defaultVelocity_X;
            this.sprite.flipByX(false);
        }
        this.position.x += this.velocity.x;
    }

    verticalAcceleration() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravityC;
    }

    spritePositionUpdate() {
        this.sprite.position.x = this.position.x - textureOffset;
        this.sprite.position.y = this.position.y - textureOffset;
    }

    checkForDeathCollision() {
        for (let i = 0; i < this.deathCollisionBlocks.length; i++){
            const deathCollisionBlock = this.deathCollisionBlocks[i];
            if (
                collision({
                    obj1: this,
                    obj2: deathCollisionBlock
                }) || (this.position.y > canvas.height)
            ){
                this.position.x = this.startPos.x;
                this.position.y = this.startPos.y;
            }
        }
    }

    checkForGameEnd() {
        if ((this.position.x > canvas.width) || (this.position.x + this.width < 0)) {
            this.endTime = newSession.stopTimer();
            doRender = false;
            placeLogic(this.endTime, this.levelID);
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