// Класс игрока
class Player{
    constructor({ position, groundCollisionBlocks, deathCollisionBlocks, startPos, levelID }) {
        this.position = position;
        this.boostToggle = true;
        this.boostUpX = false;
        this.boostUpY = false;
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
        this.playerTexture = '../img/characters/player.png';
        this.playerBoostTexture = '../img/characters/player_boost.png';

        this.sprite = new Sprite({
            position: {
                x: this.position.x - textureOffset,
                y: this.position.y - textureOffset
            },
            imageSrc: this.playerTexture,
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
        this.checkGroundUnder();
        this.horizontalAcceleration();
        this.checkForHorizontalCollisions();
        this.verticalAcceleration();
        this.checkForVerticalCollisions();
        this.checkForGameEnd();
    }

    horizontalAcceleration() {
        this.velocity.x = 0;
        if (keys['KeyD'].isPressed) {
            this.velocity.x = defaultVelocity_X + ((this.boostUpX) * boostVelocity_X);
            this.sprite.flipByX(true);
        }
        else if (keys['KeyA'].isPressed) {
            this.velocity.x = -(defaultVelocity_X + ((this.boostUpX) * boostVelocity_X));
            this.sprite.flipByX(false);
        }
        this.position.x += this.velocity.x;
    }

    verticalAcceleration() {
        if (this.boostUpY) {
            this.velocity.y = -boostVelocity_Y;
        }
        this.velocity.y += gravityC;
        this.position.y += this.velocity.y;
    }

    spritePositionUpdate() {
        this.sprite.position.x = this.position.x - textureOffset;
        this.sprite.position.y = this.position.y - textureOffset;
    }

    checkGroundUnder() {
        for (let i = 0; i < groundCollisionBlocks.length; i++) {
            if (this.position.y + this.height === groundCollisionBlocks[i].position.y - 0.01) {
                this.boostToggle = true;
                return true;
            }
        }
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