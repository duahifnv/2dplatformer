function placeLogic(endTime, levelID) {
    playerT = new LocalManage(endTime, levelID);
    // Если список заполнен полностью - сравнение полученного времени с худшим
    if ((localStorage.length === MaxListSize) && (endTime > playerT.getTime(localStorage.length))) {
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