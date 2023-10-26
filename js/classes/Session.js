class Session {
    constructor ({groundCollisions, deathCollisions, startPos, level_background}) {
        this.groundMap = groundCollisions,
        this.deathMap = deathCollisions,
        this.startPos = startPos
        // Объект класса Player (персонаж)
        this.player = new Player({
            position: {
                x: startPos.x,
                y: startPos.y
            },
            groundCollisions,
            deathCollisions
        })
        // Обьект класса Background (задний фон)
        this.background_name = level_background
        this.background = new Background({
            source: backgrounds.this.background_name,
            scale: 1
        });
    }

}