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

const stateId_Names = new Map();
stateId_Names.set(0, 'scene__menu');
stateId_Names.set(1, 'scene__game');

const frameRate = 60;
const frameDelay = (1/frameRate) * 1000

const backgrounds = [
    "../img/backgrounds/vladikavkaz.png",
    "../img/backgrounds/bataisk.png"
]

canvas.width =              1280;           // Ширина Canvas поля в пикселах
canvas.height =             704;            // Высота Canvas поля в пикселах

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
const defaultVelocity_X =   3.5;              // Стандартная скорость по оси X
const defaultVelocity_Y =   10;             // Стандартная скорость по оси Y


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
    endC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        771, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        771, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        771, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    startPos: {
        x: tileSize * 3.5,
        y: tileSize * 18
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
    endC: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 842,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 842,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 842,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    startPos: {
        x: tileSize * 3,
        y: tileSize * 5
    }
}

const MapCollisions = [lvl1_MapCollisions, lvl2_MapCollisions];