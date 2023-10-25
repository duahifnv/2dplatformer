/*
*                       КОНСТАНТЫ ПРОЕКТА
*/

// КОДЫ КЛАВИШ
const keyCodes = [
    'KeyW',            // ПРЫЖОК
    'KeyD',            // ДВИЖЕНИЕ ВПРАВО
    'KeyA',            // ДВИЖЕНИЕ ВЛЕВО
    'KeyS',            // ПРИСЕД
    'KeyH',            // ОТОБРАЖЕНИЕ ХИТБОКСОВ
    'KeyJ',            // ОТОБРАЖЕНИЕ БЛОКОВ СМЕРТИ
    'KeyG',            // ОТОБРАЖЕНИЕ БЛОКОВ ЗЕМЛИ
    'KeyR',            // РЕСТАРТ ПОЗИЦИИ
    'KeyY',            // РЕЖИМ ПОЛЕТА
];

var keys = {};
for (let name of keyCodes) {
    keys[name] = {
        isPressed: false
    };
}

const backgrounds = {
    'Vladikavkaz': "../img/backgrounds/vladikavkaz.png",
    'Bataisk': "../img/backgrounds/bataisk.png"
};
canvas.width =              1280;           // Ширина Canvas поля в пикселах
canvas.height =             704;            // Высота Canvas поля в пикселах

const tileMapWidth =        40;             // Ширина карты в клетках
const tileMapHeight =       30;             // Высота карты в клетках
const tileSize =            32;             // Размер одной клетки в пикселах
const groundCollisionID =   1450;           // Код блока коллизии (земля)
const deathCollisionID =    1451;           // Код блока смерти (шипы)

                                            // Стартовая точка появления игрока
const startPos = {
    x: tileSize * 3.5,
    y: tileSize * 18
}

const textureSize =         32;             // Размер спрайта персонажа в пикселах
const textureOffset =       5;              // Отклонение спрайта персонажа от позиции хитбокса
const hitboxSize =          20;             // Размер хитбокса в пикселах
const gravityC =            .5;             // Коэфициент гравитации (прибавление скорости по Y оси)
const defaultVelocity_X =   3;              // Стандартная скорость по оси X
const defaultVelocity_Y =   10;             // Стандартная скорость по оси Y

                                            // Двухмерный массив информации о наличии в клетке блока коллизии
const groundCollisions2D = [];
for(let i = 0; i < groundCollisions.length; i += tileMapWidth){
    groundCollisions2D.push(groundCollisions.slice(i, i + tileMapWidth));
}

                                       // Массив объектов класса CollisionBlock
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

                                        // Двухмерный массив информации о наличии в клетке блока смерти
const deathCollisions2D = [];
for(let i = 0; i < deathCollisions.length; i += tileMapWidth){
    deathCollisions2D.push(deathCollisions.slice(i, i + tileMapWidth));
}

                                        // Массив объектов класса CollisionBlock
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

                                        // Объект класса Player (персонаж)
const player = new Player({
    position: {
        x: startPos.x,
        y: startPos.y
    },
    groundCollisionBlocks,
    deathCollisionBlocks
})

                                        // Обьект класса Background (задний фон)
const background = new Background({
    source: backgrounds.Vladikavkaz,
    scale: 1
});
