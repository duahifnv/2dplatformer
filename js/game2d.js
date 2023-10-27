var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var newSession;
var player;
var groundCollisionBlocks;
var deathCollisionBlocks;
function startSession(levelID) {
    levelCollisions = MapCollisions[levelID - 1];
    newSession = new Session({
        groundCollisions: levelCollisions.groundC,
        deathCollisions: levelCollisions.deathC,
        startPos: levelCollisions.startPos,
        level_background: backgrounds[levelID - 1]
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
        levelPick();
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    // btn_Leaderboards.addEventListener('click', () => {  // Топ игроков
    // });
}

function levelPick() {
    // Обработчики на кнопках выбора уровня
    btn_level1 = document.getElementById('level_1');
    btn_level1.addEventListener('click', () => {
        doRender = true;
        startSession(1);
        changeState(1);
    });
    btn_level2 = document.getElementById('level_2');
    btn_level2.addEventListener('click', () => {
        doRender = true;
        startSession(2);
        changeState(1);
    });
    btn_level3 = document.getElementById('level_3');
    btn_level3.addEventListener('click', () => {
        doRender = true;
        startSession(1);
        changeState(1);
    });
}

// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






