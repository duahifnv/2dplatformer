// Класс заднего фона
class Background {
    constructor({source, scale}) {
        this.bg = new Image();
        this.bg.src = source;
        this.scale = scale;
    }

    draw() {
        if (!this.bg) return;
        c.drawImage(this.bg, 0, 0, canvas.width * this.scale, canvas.height * this.scale);
    }

    update() {
        this.draw();
    }
}