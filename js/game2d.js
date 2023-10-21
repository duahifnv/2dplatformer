var canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas-2d")); // Отображаемый canvas
const c = canvas.getContext("2d");                                                    // 2D режим

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

window.onload = () => {
    hotKeysListener();
    animate();
}






