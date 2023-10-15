// Класс спрайтов
class Sprite {
    constructor({ position, imageSrc, size}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;

        this.size = size;
    }
    draw() {
        if (!this.image) return; // Если изображения не существует
        c.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height);
        
    }

    update() {
        this.draw();
    }
}