var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d"));
const c = canvas.getContext("2d");

// canvas.width = 1535;
// canvas.height = 600;
canvas.width = 1280;
canvas.height = 704

const playerSize = 40;
const gravityC = .5;
const defaultVelocity_X = 3;
const defaultVelocity_Y = 10;

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

    update () {
        this.draw();
    }
}

// Класс спрайтов
class Sprite {
    constructor({position, imageSrc}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }

    draw() {
        if (!this.image) return; // Если изображения не существует
        c.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
        this.draw();
    }
}

// Класс игрока
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
        c.fillStyle = "black";
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

// Задний фон
const background = new Background({
    source: "../img/backgrounds/celeste1.png",
    scale: 1
});
window.onload = () => {
    animate();
}


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



// Прослушивание нажатых и отжатых клавиш
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd': case 'D': case 'в': case 'В':
            keys.d.isPressed = true;
            break;
        case 'a': case 'A': case 'ф': case 'Ф':
            keys.a.isPressed = true;
            break;
        case 'w': case 'W': case 'ц': case 'Ц':
            keys.w.isPressed = true;
            if (player.position.y + player.size.height == canvas.height) {
                player.velocity.y = -defaultVelocity_Y;
            }
            break;
    }
});
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd': case 'D': case 'в': case 'В':
            keys.d.isPressed = false;
            break;
        case 'a': case 'A': case 'ф': case 'Ф':
            keys.a.isPressed = false;
            break;
        case 'w': case 'W': case 'ц': case 'Ц':
            keys.w.isPressed = false;
            break;
    }
});




