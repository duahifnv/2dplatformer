class LocalManage {
    constructor(endtime, levelID){
        this.time = endtime;
        this.levelID = levelID;
        this.prefix = levelID.toString() + '-';
        this.username = '';
        this.listSize;
    }
    updateSize() {
        this.listSize = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.charAt(0) === this.levelID.toString()) {
                this.listSize++;
            }
        }
    }
    // Алгоритм сдвига всех элементов на 1 позицию вниз
    updateList(startPos) {
        let itemTop = {
            username: this.getUsername(startPos),
            time: this.getTime(startPos)
        }
        let itemBot = {};
        for (let i = startPos + 1; i < this.listSize + 1; i++) {
            itemBot = {
                username: this.getUsername(i),
                time: this.getTime(i)
            }
            this.setTime(i, itemTop.username, itemTop.time);
            itemTop = itemBot;
        }
        if (this.listSize < MaxListSize) {
            this.setTime(this.listSize + 1, itemTop.username, itemTop.time);
        }
    }

    // Получить время по месту
    getTime(placement) {
        if (placement > localStorage.length) {
            return -1;
        }
        let timeObj = JSON.parse(localStorage.getItem(this.prefix + placement.toString()));
        return timeObj.time;
    }

    // Получить имя по месту
    getUsername(placement) {
        if (placement > this.listSize) {
            return -1
        }
        let nameObj = JSON.parse(localStorage.getItem(this.prefix + placement.toString()));
        return nameObj.username;
    }

    // Добавить время в справдливое место
    placeTime() {
        var isPlaced = false;
        let itemObj = {
            username: this.username,
            time: this.time
        }
        if (this.listSize == 0) {    // Если список пуст и сравнивать не с чем
            localStorage.setItem(this.prefix + '1', JSON.stringify(itemObj));
        }
        else {
            // Находим подходящее место для результата
            for (let i = 0; i < this.listSize; i++) {
                if (this.time < this.getTime(i + 1)) {
                    this.updateList(i + 1);
                    localStorage.setItem(this.prefix + (i + 1).toString(), JSON.stringify(itemObj));
                    isPlaced = true;
                    break;
                }
            }
            // Если список не полон, добавляем элемент в конец
            if ((!isPlaced) && (this.listSize < MaxListSize)) {
                localStorage.setItem(this.prefix + (this.listSize + 1).toString(), JSON.stringify(itemObj));
            }
        }
    }

    // Добавить время в нужное место
    setTime(placement, username, time) {
        let itemObj = {
            username: username,
            time: time
        }
        localStorage.setItem(this.prefix + placement.toString(), JSON.stringify(itemObj));
    }

    // Убрать время пользователя
    removeTime() {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);      // string
            let item = JSON.parse(localStorage.getItem(key));
            if (this.username === item.username && key.charAt(0) === this.levelID.toString()) {
                localStorage.removeItem(key);   // Удаляем обьект из списка
                return key.charAt(2);
            }
        }
    }

    // Проверка наличия пользователя в списках и вывод его рез-та
    readUsername() {
        // Перебор ключей и проверка наличия имени пользователя в одном из них
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(key));
            if (this.username === item.username && key.charAt(0) === this.levelID.toString()) {
                return item.time;    // Время в мс
            }
        }
        return 0;   // 0, если пользователь не найден
    }
}