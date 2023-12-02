function collision({ obj1, obj2 })
{
    return (
        obj1.position.y + obj1.height >= obj2.position.y &&
        obj1.position.y <= obj2.position.y + obj2.height &&
        obj1.position.x + obj1.width >= obj2.position.x &&
        obj1.position.x <= obj2.position.x + obj2.width
    )
}

function KeysListener(){
    // Прослушивание клавиш
    window.addEventListener('keydown', (event) => {
        if (keyCodes.includes(event.code)){
            keys[event.code].isPressed = true;
        }
        switch (event.code) {
            case 'KeyW':
            case 'Space':
                if (stateId == 1) {
                    gp_sfx_obj.jump.playMp3();
                    if (player.cheatFlags.flyMode) {
                        player.velocity.y = -defaultVelocity_Y;
                    }
                    else {
                        if (player.checkGroundUnder()) {
                            player.velocity.y = -defaultVelocity_Y;
                        }
                    }
                }
            break;
            case 'ShiftLeft':
                if (stateId == 1 && player.boostToggle) {
                    gp_sfx_obj.dash.playMp3();
                    player.boostToggle = false;
                    player.boostUpX = true;
                    if (keys['KeyW'].isPressed || keys['Space'].isPressed) {
                        player.boostUpY = true;
                    }
                    player.sprite.image.src = player.playerBoostTexture;
                    setTimeout(() => {
                        player.boostUpX = false;
                        player.boostUpY = false;
                        player.sprite.image.src = player.playerTexture;
                    }, boostTimeout);
                }
                break;
            case 'KeyR':
                player.position.x = newSession.startPos.x;
                player.position.y = newSession.startPos.y;
                newSession.stopTimer();
                break;
            case 'KeyH':
                player.drawFlags.drawPlayerHitbox = (player.drawFlags.drawPlayerHitbox === false);
                break;
            case 'KeyJ':
                player.drawFlags.drawDeathCollisionBlocks = (player.drawFlags.drawDeathCollisionBlocks === false);
                break;
            case 'KeyY':
                player.cheatFlags.flyMode = (player.cheatFlags.flyMode === false);
                break;
            case 'KeyG':
                player.drawFlags.drawGroundCollisionBlocks = (player.drawFlags.drawGroundCollisionBlocks === false);
                break;
            case 'Escape':
                if (gamePaused) gamePaused = false;
                if (sceneId != 0) {
                    ui_sfx_obj.back.playMp3();
                }
                if (inputState) {
                    inputState = false;
                }
                hideElem(document.getElementById('input_menu-wrapper'));
                if (stateId == 1) {
                    mp3_obj.main_menu.playMp3();
                    newSession.mp3.stopMp3();
                    doRender = false; // Остановка рендера игры
                    changeState(0);
                }
                else {
                    changeScene(0, 'block');
                }
                break;
            case 'KeyP':
                if (stateId == 1) {
                    ui_sfx_obj.pause.playMp3();
                    gamePaused = (gamePaused == true) ? false : true;
                    if (gamePaused) {
                        newSession.mp3.pauseMp3();
                        newSession.pauseTimer();
                        newSession.drawPauseMenu();
                        doRender = false;
                    }
                    else {
                        newSession.mp3.playMp3();
                        doRender = true;
                        newSession.pauseTimer();
                        renderGame();
                    }
                }
                break;
            case 'Enter':
                if (inputState) {
                    ui_sfx_obj.select.playMp3();
                    placeTime(newSession.endTime);
                    hideElem(document.getElementById('input_menu-wrapper'));
                    changeState(0);
                }
                break;
        }
    });

    window.addEventListener('keyup', (event) => {
        if (keyCodes.includes(event.code)) {
            keys[event.code].isPressed = false;
        }
    });
}

// Обработчики на кнопках меню
function menuButtonsListener() {
    // Старт музыки при нажатии на начальный экран
    // scene_action = document.getElementById('scene__menu');
    // scene_action.addEventListener('click', () => {
    //     mp3_obj.main_menu.playMp3();
    // });
    // Обработчики на кнопках главного экрана
    btn_NewGame = document.getElementById('level-pick_btn');
    btn_NewGame.addEventListener('click', () => {   // Выбор уровня
        ui_sfx_obj.select.playMp3();
        changeScene(1, 'block');
    });
    btn_Leaderboards = document.getElementById('leaderB_btn');
    btn_Leaderboards.addEventListener('click', () => {
        ui_sfx_obj.select.playMp3();
        tablesUpdate();
        changeScene(2, 'flex');
    });
    btn_Credits = document.getElementById('credits_btn');
    btn_Credits.addEventListener('click', () => {
        ui_sfx_obj.select.playMp3();
        changeScene(3, 'block');
    });

    // Обработчики на кнопках выбора уровня
    btn_level1 = document.getElementById('level_1');
    btn_level1.addEventListener('click', () => {
        mp3_obj.main_menu.stopMp3();
        ui_sfx_obj.start_game.playMp3();
        changeState(1);
        startSession(1);
    });
    btn_level2 = document.getElementById('level_2');
    btn_level2.addEventListener('click', () => {
        mp3_obj.main_menu.stopMp3();
        ui_sfx_obj.start_game.playMp3();
        changeState(1);
        startSession(2);
    });
    btn_level3 = document.getElementById('level_3');
    btn_level3.addEventListener('click', () => {
        mp3_obj.main_menu.stopMp3();
        ui_sfx_obj.start_game.playMp3();
        changeState(1);
        startSession(3);
    });

    // Обработчики на кнопках выбора таблиц рекордов
    btn_prev_table = document.getElementById('nav-btn-left');
    btn_prev_table.addEventListener('click', () => {
        tableSwitch('prev');
    });
    btn_next_table = document.getElementById('nav-btn-right');
    btn_next_table.addEventListener('click', () => {
        tableSwitch('next');
    });
}