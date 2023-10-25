var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("scene__game")); // Отображаемый canvas
const c = canvas.getContext("2d");                                                    // 2D режим


var stateId = 0;             // 0 - Меню / 1 - Игра
var sceneId = 0;             // Рендер меню на запуске
// Функция постоянной отрисовки поля и игрока
function renderGame(){
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

// Главное меню
function mainMenu() {
    // Обработчики на кнопках главного экрана
    btn_NewGame = document.getElementById('level-pick_btn');
    btn_NewGame.addEventListener('click', () => {
        levelPick();
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    btn_Leaderboards.addEventListener('click', () => {
        startGame();
    });
}

// Выбор уровня
function levelPick() {
    changeScene(1);
}
// Игра
function startGame() {
    changeState(1);
    renderGame();
}

// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






