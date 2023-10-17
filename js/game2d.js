var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d"));
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 704

const tileMapWidth = 40;
const tileMapHeight = 30;
const tileSize = 32;
const groundCollisionID = 1450;
const deathCollisionID = 1451;

const startPos = {
    x: tileSize * 3,
    y: tileSize * 18
}
const textureSize = 32;
const textureOffset = 5;
const hitboxSize = 20;
const gravityC = .5;
const defaultVelocity_X = 3;
const defaultVelocity_Y = 10;

//Блоки соприкасания
const groundCollisions2D = [];
for(let i = 0; i < groundCollisions.length; i += tileMapWidth){
    groundCollisions2D.push(groundCollisions.slice(i, i + tileMapWidth));
}

const groundCollisionBlocks = [];
groundCollisions2D.forEach((row, ypos) => {
    row.forEach((symbol, xpos) => {
        if(symbol === groundCollisionID){
            groundCollisionBlocks.push(new CollisionBlock({
                position: {
                    x: xpos * tileSize,
                    y: ypos * tileSize
                },
                width: tileSize,
                height: tileSize
            }))
        }
    })
})

//Блоки смерти
const deathCollisions2D = [];
for(let i = 0; i < deathCollisions.length; i += tileMapWidth){
    deathCollisions2D.push(deathCollisions.slice(i, i + tileMapWidth));
}

const deathCollisionBlocks = [];
deathCollisions2D.forEach((row, ypos) => {
    row.forEach((symbol, xpos) => {
        if (symbol === deathCollisionID){
            deathCollisionBlocks.push(new CollisionBlock({
                position: {
                    x: xpos * tileSize,
                    y: ypos * tileSize
                },
                width: tileSize,
                height: tileSize
            }))
        }
    })
})

// Объект игрока
const player = new Player({
    position: {
        x: startPos.x,
        y: startPos.y
    },
    groundCollisionBlocks,
    deathCollisionBlocks
})
// Задний фон
const background = new Background({
    source: "../img/backgrounds/tilemap1.png",
    scale: 1
});



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
};

// Функция постоянной отрисовки поля и игрока
function animate(){
    window.requestAnimationFrame(animate);

    background.update();
    groundCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })
    deathCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })

    player.update();
}

hotKeysListener();

window.onload = () => {
    animate();
}






