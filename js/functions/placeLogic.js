function placeLogic(endTime) {
    // Если список заполнен полностью - сравнение полученного времени с худшим
    if ((localStorage.length === MaxListSize) && (endTime > getTime(localStorage.length))) {
        return;
    }
    // Запрос имени игрока
    else {
        let username = prompt('Введите имя: ');
        let prevTime = readUsername(username); // Предыдущее время
        if (prevTime) {    // Игрок уже есть в списке
            if (endTime < prevTime) {
                removeTime(username);
                placeTime(username, endTime);
            }
            else {
                return;
            }
        }
        else {
            placeTime(username, endTime);
        }
    }
}