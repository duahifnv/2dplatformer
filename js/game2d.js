var doRender;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var gamePaused = false;
var inputState = false;
var levelCollisions;
var newSession;                     // Сессионный объект
var player;
var groundCollisionBlocks;
var deathCollisionBlocks;

// Функция начала игровой сессии
function startSession(levelID) {
    levelCollisions = MapCollisions[levelID - 1];
    newSession = new Session({
        levelID: levelID,
    });
    player = newSession.player;
    groundCollisionBlocks = player.groundCollisionBlocks;
    deathCollisionBlocks = player.deathCollisionBlocks;

    newSession.groundMapFill();
    newSession.deathMapFill();

    newSession.mp3.playMp3();
    doRender = true;
    renderGame();
}

// Функция постоянной отрисовки поля и игрока
function renderGame() {
    if (!doRender) {
        return;
    }
    window.requestAnimationFrame(renderGame);
    newSession.mapUpdate();
}

// При запуске окна
window.onload = () => {
    KeysListener();
    menuButtonsListener();
    tablesUpdate();
}






