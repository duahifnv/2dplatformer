class Mp3 {
    constructor(audio_src) {
        this.src = audio_src;
        this.mp3 = new Audio(audio_src);
        this.mp3.volume = AudioVolume;
    }
    pauseMp3() {
        this.mp3.pause();
    }
    stopMp3() {
        this.mp3.pause();
        this.mp3.currentTime = 0;
    }
    playMp3() {
        this.mp3.play();
    }
}