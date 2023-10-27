var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var newSession;
var player;
var groundCollisionBlocks;
var deathCollisionBlocks;
function startSession() {
    newSession = new Session({
        groundCollisions: lvl1_MapCollisions.groundC,
        deathCollisions: lvl1_MapCollisions.deathC,
        startPos: lvl1_MapCollisions.startPos,
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
    });
}

function levelPick() {
    // Обработчики на кнопках выбора уровня
    btn_level1 = document.getElementById('level_1');
    btn_level2 = document.getElementById('level_2');
    btn_level3 = document.getElementById('level_3');
}
// При запуске окна
window.onload = () => {
    KeysListener();
    mainMenu();
}






