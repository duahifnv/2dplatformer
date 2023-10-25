var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("scene__game")); // Отображаемый canvas
const c = canvas.getContext("2d");                                                    // 2D режим


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

// Обработчики на кнопках главного экрана
function mainMenu() {
    btn_NewGame = document.getElementById('level-pick_btn');
    btn_NewGame.addEventListener('click', () => {
        changeScene('scene__main-menu', 'scene__level-pick');
        levelPick();
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    btn_Leaderboards.addEventListener('click', () => {
        startGame();
    });
}

function levelPick() {}
function startGame() {
    changeScene('scene__menu', 'scene__game');
    renderGame();
    hotKeysListener();
}

// Запуск главного меню
window.onload = () => {
    mainMenu();
}






