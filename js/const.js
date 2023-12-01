/*
*                       КОНСТАНТЫ ПРОЕКТА
*/

// КОДЫ КЛАВИШ
const keyCodes = [
    'KeyW', 'Space',   // ПРЫЖОК
    'KeyD',            // ДВИЖЕНИЕ ВПРАВО
    'KeyA',            // ДВИЖЕНИЕ ВЛЕВО
    'KeyS',            // ПРИСЕД
    'Shift',           // УСКОРЕНИЕ
    'KeyH',            // ОТОБРАЖЕНИЕ ХИТБОКСОВ
    'KeyJ',            // ОТОБРАЖЕНИЕ БЛОКОВ СМЕРТИ
    'KeyG',            // ОТОБРАЖЕНИЕ БЛОКОВ ЗЕМЛИ
    'KeyR',            // РЕСТАРТ ПОЗИЦИИ
    'KeyY',            // РЕЖИМ ПОЛЕТА
    'Escape',          // ВОЗВРАТ НА ГЛАВНЫЙ ЭКРАН
    'KeyP'             // ИГРОВАЯ ПАУЗА
];

var keys = {};
for (let name of keyCodes) {
    keys[name] = {
        isPressed: false
    };
}

const sceneId_Names = new Map();
sceneId_Names.set(0, 'scene__main-menu');
sceneId_Names.set(1, 'scene__level-pick');
sceneId_Names.set(2, 'scene__leaderboards');
sceneId_Names.set(3, 'scene__credits');

const stateId_Names = new Map();
stateId_Names.set(0, 'scene__menu');
stateId_Names.set(1, 'scene__game');

const frameRate = 60;
const frameDelay = (1/frameRate) * 1000

const levelCount = 3;
const backgrounds = [
    "../img/backgrounds/level1_bg.png",
    "../img/backgrounds/level2_bg.png",
    "../img/backgrounds/level3_bg.png"
]

canvas.width =              1280;           // Ширина Canvas поля в пикселах
canvas.height =             700;            // Высота Canvas поля в пикселах

const defaultFontHTML = {
    name: 'Bungee',
    size: 48,
    color: 'white'
}
const defaultFont = defaultFontHTML.size.toString() + "px " + defaultFontHTML.name;

c.font = defaultFont;
c.textBaseline = "top";
c.fillStyle = defaultFontHTML.color;

const pauseMenuSize = {
    width: 400,
    height: 250,
    round: 10
}
const textOffset = {
    x: 28,
    y: 22
}
const tileMapWidth =        40;             // Ширина карты в клетках
const tileMapHeight =       30;             // Высота карты в клетках
const tileSize =            32;             // Размер одной клетки в пикселах
const groundCollisionID =   1450;           // Код блока коллизии (земля)
const deathCollisionID =    1451;           // Код блока смерти (шипы)

const textureSize =         32;             // Размер спрайта персонажа в пикселах
const textureOffset =       5;              // Отклонение спрайта персонажа от позиции хитбокса
const hitboxSize =          20;             // Размер хитбокса в пикселах
const gravityC =            .5;             // Коэфициент гравитации (прибавление скорости по Y оси)
const defaultVelocity_X =   3.5;            // Стандартная скорость по оси X
const boostVelocity_X =     2.5;            // Добавочная скорость по оси X
const boostTimeout =        200;            // Время ускорения по оси X
const defaultVelocity_Y =   10;             // Стандартная скорость по оси Y
const boostVelocity_Y =     8;            // Добавочная скорость по оси Y

const lvl1_MapCollisions = {
    groundC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0,
        0, 0, 0, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0,
        0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0,
        0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0,
        1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0,
        1450, 0, 0, 1450, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0,
        1450, 0, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 1450, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450,
        0, 0, 0, 0, 1450, 0, 1450, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 1450,
        0, 0, 0, 0, 1450, 0, 1450, 0, 0, 1450, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450,
        0, 1450, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450,
        1450, 1450, 0, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450,
        1450, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 1450, 0,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 1450, 1450, 0, 0, 0, 1450, 0,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0,
        1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0,
        0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0,
        0, 1450, 1450, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0,
        0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0
    ],
    deathC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    startPos: {
        x: tileSize * 3.5,
        y: tileSize * 17
    }
}

const lvl2_MapCollisions = {
    groundC: [1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 1450, 0, 0, 0, 1450,
        1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 1450, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 1450, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450,
        1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 1450, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0,
        1450, 0, 0, 1450, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 1450, 0, 1450, 0, 0, 0,
        1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 1450, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 1450, 1450, 1450, 0, 0, 0,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450,
        1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450,
        1450, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450,
        1450, 0, 0, 0, 0, 1450, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 1450,
        1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 1450, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 1450, 1450, 1450, 1450,
        1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 0, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 1450,
        1450, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450,
        1450, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 1450,
        1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 1450, 1450, 1450],
    deathC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0,
        0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    startPos: {
        x: tileSize * 4,
        y: tileSize * 5
    }
}

const lvl3_MapCollisions = {
    groundC: [1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        0, 0, 0, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        0, 0, 0, 1450, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        0, 0, 1450, 1450, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 1450, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450,
        1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450,
        1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 1450,
        1450, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 1450, 0, 0, 0, 1450, 0, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 0, 0, 0, 0, 0, 1450, 1450, 1450, 1450, 1450, 1450, 1450],
    deathC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 1451, 1451, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    startPos: {
        x: tileSize * 36,
        y: tileSize * 16
    }
}

const MapCollisions = [lvl1_MapCollisions, lvl2_MapCollisions, lvl3_MapCollisions];

const MaxListSize = 10;