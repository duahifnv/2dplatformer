var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d"));
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 704

const tileMapWidth = 40;
const tileMapHeight = 30;
const tileSize = 32;
const groundCollisionID = 1450;

const startPos = {
    x: tileSize * 3,
    y: tileSize * 18
}
const playerSize = 30;
const gravityC = .5;
const defaultVelocity_X = 3;
const defaultVelocity_Y = 10;

const groundCollisions2D = [];
for(let i = 0; i < groundCollisions.length; i += tileMapWidth){
    groundCollisions2D.push(groundCollisions.slice(i, i + tileMapWidth));
}

const collisionBlocks = [];
groundCollisions2D.forEach((row, ypos) => {
    row.forEach((symbol, xpos) => {
        if(symbol === groundCollisionID){
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: xpos * tileSize,
                    y: ypos * tileSize
                }
            }))
        }
    })
})

const player = new Player({
    position: {
        x: startPos.x,
        y: startPos.y
    },
    collisionBlocks
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
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })
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
            player.velocity.y = -defaultVelocity_Y;
            // if (player.position.y + player.size.height == canvas.height) {
            //     player.velocity.y = -defaultVelocity_Y;
            // }
            break;
        case 'r': case 'R': case 'к': case 'К':
            player.position.x = startPos.x;
            player.position.y = startPos.y;
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




