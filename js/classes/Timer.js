class Timer {
    constructor ({ position }) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.milliseconds = 0,
        this.seconds = 0,
        this.minutes = 0,
        this.font = "48px Bungee",
        this.isPaused = false,
        this.image = new Image(),
        this.image.src = '../img/buttons/silver_button.png',
        this.texture = {
            width: 300,
            height: 100
        }
    }
    updateTime() {
        this.milliseconds += frameDelay;
        if (this.milliseconds > 999) {
            this.seconds++;
            this.milliseconds = 0;
        }
        if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        }
    }
    clearTime() {
        this.milliseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
    }
    drawTimer() {
        this.textContent = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}.${(this.milliseconds/10).toFixed(0).toString()}`;
        c.drawImage(this.image, this.position.x, this.position.y, this.texture.width, this.texture.height);
        c.font = this.font;
        c.textBaseline = "top";
        c.fillStyle = "white";
        c.fillText(this.textContent, this.position.x + textOffset.x, this.position.y + textOffset.y);
    }
    timerUpdate() {
        if (!this.isPaused) {
            this.updateTime();
        }
        this.drawTimer();
    }
}