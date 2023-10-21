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
        if (keyCodes.includes(event.code)){
            keys[event.code].isPressed = true;
        }
        switch (event.code) {
            case 'KeyR':
                player.position.x = startPos.x;
                player.position.y = startPos.y;
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
        }
    });

    window.addEventListener('keyup', (event) => {
        if (keyCodes.includes(event.code)) {
            keys[event.code].isPressed = false;
        }
    });
}