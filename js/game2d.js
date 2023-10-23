var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d")); // Отображаемый canvas
const c = canvas.getContext("2d");                                                    // 2D режим


// Функция постоянной отрисовки поля и игрока
function repaint(){
    window.requestAnimationFrame(repaint);

    background.update();
    groundCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })
    deathCollisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update();
    })

    player.update();
}

function mainMenu() {
    btnNG = document.getElementById('startGame');
    btnNG.addEventListener('click', startGame);
}

function startGame() {
    hideElem(document.getElementById('menu'));

    repaint();
    showElem(document.getElementById('canvas-2d'));
    hotKeysListener();
}

// Запуск главного меню
window.onload = () => {
    mainMenu();
}






