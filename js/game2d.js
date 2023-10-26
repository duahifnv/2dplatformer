var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var newSession;
var player;
var groundCollisionBlocks;
var deathCollisionBlocks;
function startSession() {
    newSession = new Session({
        groundCollisions: groundCollisions,
        deathCollisions: deathCollisions,
        startPos: startPos,
        level_background: backgrounds.Vladikavkaz
    });
    player = newSession.player;
    groundCollisionBlocks = player.groundCollisionBlocks;
    deathCollisionBlocks = player.deathCollisionBlocks;
    newSession.groundMapFill();
    newSession.deathMapFill();
    renderGame();
}

// Функция постоянной отрисовки поля и игрока
function renderGame() {
    if (!doRender) return;
    window.requestAnimationFrame(renderGame);
    newSession.backgroundUpdate();
    newSession.groundMapUpdate();
    newSession.deathMapUpdate();
    newSession.playerUpdate();
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
        doRender = true;
        startSession();
        changeState(1);
        // renderGame();
    });
}

// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






