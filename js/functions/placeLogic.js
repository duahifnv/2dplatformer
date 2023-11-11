function placeLogic(endTime, levelID) {
    playerT = new LocalManage(endTime, levelID);
    playerT.updateSize();
    // Если список заполнен полностью - сравнение полученного времени с худшим
    if ((playerT.listSize === MaxListSize) && (endTime > playerT.getTime(playerT.listSize))) {
        return;
    }
    // Запрос имени игрока
    else {
        let username = prompt('Введите имя: ');
        playerT.username = username;
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
}