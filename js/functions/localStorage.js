// Получить время по месту
function getTime(placement) {
    if (placement > localStorage.length) {
        return -1
    }
    let timeObj = JSON.parse(localStorage.getItem(placement.toString()));
    return timeObj.time;
}

// Получить имя по месту
function getUsername(placement) {
    if (placement > localStorage.length) {
        return -1
    }
    let nameObj = JSON.parse(localStorage.getItem(placement.toString()));
    return nameObj.username;
}

// Добавить время в справдливое место
function placeTime(username, time){
    var isPlaced = false;
    let itemObj = {
        username: username,
        time: time
    }
    if (localStorage.length == 0) {    // Если список пуст и сравнивать не с чем
        localStorage.setItem('1', JSON.stringify(itemObj));
    }
    else {
        // Находим подходящее место для результата
        for (let i = 0; i < localStorage.length; i++) {
            if (time < getTime(i + 1)) {
                updateList(i + 1);
                localStorage.setItem((i + 1).toString(), JSON.stringify(itemObj));
                isPlaced = true;
                break;
            }
        }
        // Если список не полон, добавляем элемент в конец
        if ((!isPlaced) && (localStorage.length < MaxListSize)) {
            localStorage.setItem((localStorage.length + 1).toString(), JSON.stringify(itemObj));
        }
    }
}

// Добавить время в нужное место
function setTime(placement, username, time) {
    let itemObj = {
        username: username,
        time: time
    }
    localStorage.setItem(placement.toString(), JSON.stringify(itemObj));
}

// Алгоритм сдвига всех элементов на 1 позицию вниз
function updateList(startPos) {
    let itemTop = {
        username: getUsername(startPos),
        time: getTime(startPos)
    }
    let itemBot = {};
    for (let i = startPos + 1; i < localStorage.length + 1; i++) {
        itemBot = {
            username: getUsername(i),
            time: getTime(i)
        }
        setTime(i, itemTop.username, itemTop.time);
        itemTop = itemBot;
    }
    if (localStorage.length < MaxListSize) {
        setTime(localStorage.length + 1, itemTop.username, itemTop.time);
    }
}

// Убрать время пользователя
function removeTime(username){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        if (username === item.username) {
            localStorage.removeItem(key);   // Удаляем обьект из списка
        }
    }
}

// Проверка наличия пользователя в списках и вывод его рез-та
function readUsername(username) {
    // Перебор ключей и проверка наличия имени пользователя в одном из них
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        if (username === item.username) {
            return item.time;    // Время в мс
        }
    }
    return 0;   // 0, если пользователь не найден
}