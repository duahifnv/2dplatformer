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
    btnNG = document.getElementById('level-pick_btn');
    btnNG.addEventListener('click', () => {
        changeScene('scene__main-menu', 'scene__level-pick');
    });
}

function startGame() {
    changeScene('scene__menu', 'scene__game');
    renderGame();
    hotKeysListener();
}

// Запуск главного меню
window.onload = () => {
    mainMenu();
}






