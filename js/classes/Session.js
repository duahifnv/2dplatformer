class Session {
    constructor({ groundCollisions, deathCollisions, startPos, level_background}) {
        this.groundMap = groundCollisions,
        this.deathMap = deathCollisions,
        this.startPos = startPos,
        // Обьект класса Background (задний фон)
        this.background_name = level_background,
        this.background = new Background({
            source: level_background,
            scale: 1
        }),
        this.timer = new Timer({
            position: {
                x: canvas.width - 310,
                y: 10
            }
        }),
        // Объект класса Player (персонаж)
        this.player = new Player({
            position: {
                x: this.startPos.x,
                y: this.startPos.y
            },
            groundCollisionBlocks: this.groundMapFill(),
            deathCollisionBlocks: this.deathMapFill(),
            startPos: {
                x: this.startPos.x,
                y: this.startPos.y
            }
        })
    }

    stopTimer() {
        this.endTime = this.timer.getTime();
        this.timer.clearTime();
        return this.endTime;
    }
    pauseTimer() {
        this.timer.isPaused = (this.timer.isPaused == true) ? false : true;
    }
    mapUpdate() {
        this.background.update();
        this.timer.timerUpdate();
        this.groundCollisionBlocks.forEach((collisionBlock) => {
            collisionBlock.update();
        })
        this.deathCollisionBlocks.forEach((collisionBlock) => {
            collisionBlock.update();
        })
        this.player.update();
    }
    drawPauseMenu() {
        c.roundRect(canvas.width / 2 - (pauseMenuSize.width / 2),
         canvas.height / 2 - (pauseMenuSize.height / 2),
          pauseMenuSize.width, pauseMenuSize.height, pauseMenuSize.round);
        c.fillStyle = "rgba(0, 0, 0, 0.8)";
        c.fill();
        c.font = defaultFont;
        c.textBaseline = "middle";
        c.fillStyle = defaultFontHTML.color;
        c.fillText('PAUSED', canvas.width / 2 - (pauseMenuSize.width / 4), canvas.height / 2);
    }
    groundMapFill() {
        // Двухмерный массив информации о наличии в клетке блока коллизии
        this.groundCollisions2D = [];
        // Массив объектов класса CollisionBlock
        this.groundCollisionBlocks = [];
        for (let i = 0; i < this.groundMap.length; i += tileMapWidth) {
            this.groundCollisions2D.push(this.groundMap.slice(i, i + tileMapWidth));
        }
        this.groundCollisions2D.forEach((row, ypos) => {
            row.forEach((symbol, xpos) => {
                if (symbol === groundCollisionID) {
                    this.groundCollisionBlocks.push(new CollisionBlock({
                        position: {
                            x: xpos * tileSize,
                            y: ypos * tileSize
                        },
                        width: tileSize,
                        height: tileSize
                    }))
                }
            })
        })
        return this.groundCollisionBlocks;
    }
    deathMapFill() {
        // Двухмерный массив информации о наличии в клетке блока смерти
        this.deathCollisions2D = [];
        // Массив объектов класса CollisionBlock
        this.deathCollisionBlocks = [];
        for (let i = 0; i < this.deathMap.length; i += tileMapWidth) {
            this.deathCollisions2D.push(this.deathMap.slice(i, i + tileMapWidth));
        }

        this.deathCollisions2D.forEach((row, ypos) => {
            row.forEach((symbol, xpos) => {
                if (symbol === deathCollisionID) {
                    this.deathCollisionBlocks.push(new CollisionBlock({
                        position: {
                            x: xpos * tileSize,
                            y: ypos * tileSize
                        },
                        width: tileSize,
                        height: tileSize
                    }))
                }
            })
        })
        return this.deathCollisionBlocks;
    }
}