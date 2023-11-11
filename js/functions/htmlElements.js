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