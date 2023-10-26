var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("scene__game")); // Отображаемый canvas
const c = canvas.getContext("2d");                                                    // 2D режим

var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

// Функция постоянной отрисовки поля и игрока
function renderGame(){
    if (!doRender) return;
    window.requestAnimationFrame(renderGame);
    background.update();
    groundCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })
    deathCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })

    player.update();
}

// function startSession(level_name){
//     // Объект класса Player (персонаж)
//     const player = new Player({
//         position: {
//             x: startPos.x,
//             y: startPos.y
//         },
//         groundCollisionBlocks,
//         deathCollisionBlocks
//     })
//     // Обьект класса Background (задний фон)
//     const background = new Background({
//         source: backgrounds.Vladikavkaz,
//         scale: 1
//     });
// }
// Главное меню
function mainMenu() {
    // Обработчики на кнопках главного экрана
    btn_NewGame = document.getElementById('level-pick_btn');
    btn_NewGame.addEventListener('click', () => {   // Выбор уровня
        changeScene(1);
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    btn_Leaderboards.addEventListener('click', () => {  // Начать игру
        changeState(1);
        doRender = true;
        renderGame();
    });
}

// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






