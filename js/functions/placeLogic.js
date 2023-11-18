function placeLogic(endTime, levelID) {
    playerT = new LocalManage(endTime, levelID);
    playerT.updateSize();
    // Если список заполнен полностью - сравнение полученного времени с худшим
    if ((playerT.listSize === MaxListSize) && (endTime > playerT.getTime(playerT.listSize))) {
        newSession.drawInputMenu(endTime, true);    // Информация о результате (не просим ввести имя)
    }
    // Запрос имени игрока
    else {
        inputState = true;
        newSession.drawInputMenu(endTime, false);      // Информация о результате с вводом имени
    }
}

function placeTime(endTime) {
    let username = document.getElementById('nickname-input');
    if ((username == '') || (username == null)) return;
    playerT.username = username.value;
    let prevTime = playerT.readUsername(); // Предыдущее время
    if (prevTime) {    // Игрок уже есть в списке
        if (endTime < prevTime) {
            playerT.removeTime();
            playerT.updateSize();
            playerT.placeTime();
        }
        else {
            return;
        }
    }
    else {
        playerT.placeTime();
    }
}