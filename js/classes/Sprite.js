// Класс спрайтов
class Sprite {
    constructor({ position, imageSrc, size}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;

        this.width = size.width;
        this.height = size.height;
        this.flippedByX = false;
    }
    draw() {
        if (!this.image) return; // Если изображения не существует
        if (this.flippedByX) {
            c.save();
            c.translate(this.width, 0);
            c.scale(-1, 1);
            c.drawImage(this.image, -this.position.x, this.position.y, this.width, this.height);
            c.restore();
        }
        else {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }

    flipByX(mode) {
        this.flippedByX = mode ? false : true;
    }
}