var doRender = true;
var stateId = 0;                    // 0 - Меню / 1 - Игра
var sceneId = 0;                    // Рендер меню на запуске

var newSession;

var player;

function startSession() {
    newSession = new Session({
        groundCollisions: groundCollisions,
        deathCollisions: deathCollisions,
        startPos: startPos,
        level_background: backgrounds.Vladikavkaz
    });
    player = newSession.player;
    newSession.groundMapFill();
    newSession.deathMapFill();
    newSession.backgroundUpdate();
    // Функция постоянной отрисовки поля и игрока
    renderGame();
    function renderGame() {
        newSession.groundMapUpdate();
        newSession.deathMapUpdate();
        newSession.playerUpdate();
        if (!doRender) return;
        window.requestAnimationFrame(renderGame);
    }
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






