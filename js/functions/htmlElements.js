function hideElem(Element) {
    Element.style.display = 'none';
}

function showElem(Element, display_style) {
    Element.style.display = display_style;
}

function changeState(id_next) {
    hideElem(document.getElementById(stateId_Names.get(stateId)));
    stateId = id_next;
    showElem(document.getElementById(stateId_Names.get(stateId)), 'flex');
}
function changeScene(id_next, display_style) {
    hideElem(document.getElementById(sceneId_Names.get(sceneId)));
    sceneId = id_next;
    showElem(document.getElementById(sceneId_Names.get(sceneId)), display_style);
}

var tableState = 1;
function tableSwitch(direction) {
    var hidetableID = 'level' + tableState.toString() + '-table';
    var showtableID;
    if (direction === 'prev') {
        if (tableState === levelCount) {
            showElem(document.getElementById('nav-btn-right'), 'inline-block');
        }
        if (tableState === 2) {
            hideElem(document.getElementById('nav-btn-left'), 'inline-block');
        }
        showtableID = 'level' + (tableState - 1).toString() + '-table';
        showElem(document.getElementById(showtableID), 'block');
        tableState--;
    }
    else if(direction === 'next') {
        if (tableState === levelCount - 1) {
            hideElem(document.getElementById('nav-btn-right'), 'inline-block');
        }
        if (tableState === 1) {
            showElem(document.getElementById('nav-btn-left'), 'inline-block');
        }
        showtableID = 'level' + (tableState + 1).toString() + '-table';
        showElem(document.getElementById(showtableID), 'block');
        tableState++;
    }
    hideElem(document.getElementById(hidetableID));
}

// Сортировка по местам
function tableSort(tableNotes) {
    for (let i = 0; i < tableNotes.length; i++) {
        tableNotes[i].sort((a, b) => {
            return a.place - b.place;
        });
    }
}

// Очистка отображаемой информации в таблицах
function clearTables(tableNotes) {
    for (let i = 0; i < tableNotes.length; i++) {
        var elementID = 'level' + (i + 1) + '-table-body';
        var table = document.getElementById(elementID);
        table.replaceChildren();
    }
}
// Обновление отображаемой информации в таблицах
function dropTables(tableNotes) {
    clearTables(tableNotes);
    for (let i = 0; i < tableNotes.length; i++) {           // Проход по таблицам
        var tableNote = tableNotes[i];
        var elementID = 'level' + (i + 1) + '-table-body';
        var table = document.getElementById(elementID);  // Таблица
        for (let k = 0; k < tableNote.length; k++) {        // Проход по строкам одной таблицы
            var tableRow = tableNote[k];
            var tr = document.createElement('tr');       // Строка таблицы
            for (let j = 0; j < Object.keys(tableRow).length; j++) {    // Проход по ячейкам одной строки
                let text = document.createTextNode(Object.values(tableRow)[j]);
                let td = document.createElement('td');  // Ячейка строки
                td.appendChild(text);                       // Добавить текст в ячейку
                tr.appendChild(td);                         // Добавить ячейку в строку
            }
            table.appendChild(tr);                          // Добавить строку в таблицу
        }
    }
}

// Обновление списков
function tablesUpdate() {
    var tableNotes = [];
    for (let i = 0; i < levelCount; i++) {
        tableNotes.push([]);
    }
    // Заполнение списков
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var levelID = key.charAt(0);
        var placement = key.charAt(2);
        var obj = JSON.parse(localStorage.getItem(key));
        var node = {
            place: placement,
            username: obj.username,
            time: obj.time
        }
        tableNotes[levelID - 1].push(node);
    }
    tableSort(tableNotes);
    dropTables(tableNotes);
}

