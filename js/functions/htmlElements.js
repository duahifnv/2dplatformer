function hideElem(Element) {
    Element.style.display = 'none';
}

function showElem(Element) {
    Element.style.display = 'block';
}

function changeScene(prev_scene_id, next_scene_id) {
    hideElem(document.getElementById(prev_scene_id));
    showElem(document.getElementById(next_scene_id));
}