var doRender;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var levelCollisions;
var newSession;                     // Сессионный объект
var player;
var groundCollisionBlocks;
var deathCollisionBlocks;

// Функция начала игровой сессии
function startSession(levelID) {
    levelCollisions = MapCollisions[levelID - 1];
    newSession = new Session({
        groundCollisions: levelCollisions.groundC,
        deathCollisions: levelCollisions.deathC,
        startPos: levelCollisions.startPos,
        level_background: backgrounds[levelID - 1],
    });
    player = newSession.player;
    groundCollisionBlocks = player.groundCollisionBlocks;
    deathCollisionBlocks = player.deathCollisionBlocks;

    newSession.groundMapFill();
    newSession.deathMapFill();
    doRender = true;
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
    newSession.updateTimer();
}

// Главное меню
function menuButtonsListener() {
    // Обработчики на кнопках главного экрана
    btn_NewGame = document.getElementById('level-pick_btn');
    btn_NewGame.addEventListener('click', () => {   // Выбор уровня
        changeScene(1);
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    // btn_Leaderboards.addEventListener('click', () => {  // Топ игроков
    // });
    // Обработчики на кнопках выбора уровня
    btn_level1 = document.getElementById('level_1');
    btn_level1.addEventListener('click', () => {
        changeState(1);
        startSession(1);
    });
    btn_level2 = document.getElementById('level_2');
    btn_level2.addEventListener('click', () => {
        changeState(1);
        startSession(2);
    });
    btn_level3 = document.getElementById('level_3');
    btn_level3.addEventListener('click', () => {
        changeState(1);
        startSession(1);
    });
}

// При запуске окна
window.onload = () => {
    KeysListener();
    menuButtonsListener();
}






