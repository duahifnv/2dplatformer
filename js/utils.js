function collision({ obj1, obj2 }) 
{
    return (
        obj1.position.y + obj1.size.height >= obj2.position.y && 
        obj1.position.y <= obj2.position.y + obj2.height &&
        obj1.position.x + obj1.size.width >= obj2.position.x &&
        obj1.position.x <= obj2.position.x + obj2.width
    )
}