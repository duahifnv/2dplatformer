var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d"));
const c = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 540;

const playerSize = 50;
const gravityC = .5;
const defaultVelocity_X = 3;
const defaultVelocity_Y = 10;

// Класс спрайтов
class Sprite {
    constructor({position, imageSrc}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        if (!this.image) return // Если изображения не существует
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.draw();
    }
}

// Класс игроков
class Player {
    constructor(position) {
        this.position = position;
        this.size = {
            width: playerSize,
            height: playerSize
        }
        this.velocity = {
            x: 0,
            y: 1
        }
    }
    draw() {
        c.fillStyle = "white";
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;

        // Гравитация
        this.position.y += this.velocity.y;
        if(this.position.y + this.size.height + this.velocity.y > canvas.height) {
            this.velocity.y = 0;
            this.position.y += canvas.height - (this.position.y + this.size.height);
        }
        else {
            this.velocity.y += gravityC;
        }
    }
}

const player = new Player({
    x: 500, y: canvas.height - playerSize
})

// Нажимаемые клавиши
const keys = {
    d: {
        isPressed: false
    },
    a: {
        isPressed: false
    },
    w: {
        isPressed: false
    }
}

// Задний фон
const background = new Sprite({
    position: {
        x: 0, y: 0
    },
    imageSrc: "../img/backgrounds/bg1.png"
});

// Функция постоянной отрисовки поля и игрока
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    player.update();
    player.velocity.x = 0;
    if (keys.d.isPressed) player.velocity.x = defaultVelocity_X;
    else if (keys.a.isPressed) player.velocity.x = -defaultVelocity_X;
}
animate();

// Прослушивание нажатых и отжатых клавиш
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.isPressed = true;
            break;
        case 'a':
            keys.a.isPressed = true;
            break;
        case 'w':
            keys.w.isPressed = true;
            if (player.position.y + player.size.height == canvas.height) {
                player.velocity.y = -defaultVelocity_Y;
            }
            break;
    }
});
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.isPressed = false;
            break;
        case 'a':
            keys.a.isPressed = false;
            break;
        case 'w':
            keys.w.isPressed = false;
            break;
    }
});




