class Timer {
    constructor () {
        this.milliseconds = 0,
        this.seconds = 0,
        this.minutes = 0,
        this.font = "48px Bungee"
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
        c.font = this.font;
        c.fillStyle = "white";
        c.fillText(this.textContent, canvas.width - 300, canvas.height - 20);
    }
    timerUpdate() {
        this.updateTime();
        this.drawTimer();
    }
}