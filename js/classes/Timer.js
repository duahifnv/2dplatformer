class Timer {
    constructor () {
        this.milliseconds = 0,
        this.seconds = 0,
        this.minutes = 0,
        this.font = "48px Bungee"
    }
    updateTime() {
        this.milliseconds++;
        if (this.milliseconds === 100) {
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
        this.textContent = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}.${this.milliseconds.toString().padStart(2, '0')}`;
        c.font = this.font;
        c.fillStyle = "white";
        c.fillText(this.textContent, canvas.width - 300, canvas.height - 20);
    }
    timerUpdate() {
        this.updateTime();
        this.drawTimer();
    }
}