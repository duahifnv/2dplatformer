function collision({ obj1, obj2 }) 
{
    return (
        obj1.position.y + obj1.height >= obj2.position.y && 
        obj1.position.y <= obj2.position.y + obj2.height &&
        obj1.position.x + obj1.width >= obj2.position.x &&
        obj1.position.x <= obj2.position.x + obj2.width
    )
}

function hotKeysListener(){
    // Прослушивание нажатых и отжатых клавиш
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'd': case 'D': case 'в': case 'В':
                keys.d.isPressed = true;
                break;
            case 'a': case 'A': case 'ф': case 'Ф':
                keys.a.isPressed = true;
                break;
            case 'w': case 'W': case 'ц': case 'Ц': case 'space':
                keys.w.isPressed = true;
                break;
            case 'r': case 'R': case 'к': case 'К':
                player.position.x = startPos.x;
                player.position.y = startPos.y;
                break;
        }
    });

    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'd': case 'D': case 'в': case 'В':
                keys.d.isPressed = false;
                break;
            case 'a': case 'A': case 'ф': case 'Ф':
                keys.a.isPressed = false;
                break;
            case 'w': case 'W': case 'ц': case 'Ц':
                keys.w.isPressed = false;
                break;
        }
    });
}