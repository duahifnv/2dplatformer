 // Отображаемый canvas
                                                 // 2D режим

var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

const newSession = new Session({
    groundCollisions: groundCollisions,
    deathCollisions: deathCollisions,
    startPos: startPos,
    level_background: backgrounds.Vladikavkaz
});

const player = newSession.player;
// Функция постоянной отрисовки поля и игрока
function renderGame(){
    // background.update();
    // groundCollisionBlocks.forEach((collisionBlock) => {
    //     collisionBlock.update();
    // })
    // deathCollisionBlocks.forEach((collisionBlock) => {
    //     collisionBlock.update();
    // })

    // player.update();
    newSession.groundMapUpdate();
    newSession.deathMapUpdate();
    newSession.playerUpdate();
    if (!doRender) return;
    window.requestAnimationFrame(renderGame);
}

function startSession(){
    // newSession.background.update();
    newSession.groundMapFill();
    newSession.deathMapFill();
    newSession.backgroundUpdate();
    // newSession.groundMapUpdate();
    // newSession.deathMapUpdate();
    // newSession.player.update();
    renderGame();
}

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
        startSession();
        // renderGame();
    });
}

// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






