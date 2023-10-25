function hideElem(Element) {
    Element.style.display = 'none';
}

function showElem(Element, display_style) {
    Element.style.display = display_style;
}

function changeState(id_next) {
    console.log(document.getElementById(stateId_Names.get(stateId)));
    hideElem(document.getElementById(stateId_Names.get(stateId)));
    stateId = id_next;

    showElem(document.getElementById(stateId_Names.get(stateId)), 'flex');
    console.log(document.getElementById(stateId_Names.get(stateId)));
}
function changeScene(id_next) {
    console.log(document.getElementById(sceneId_Names.get(sceneId)));
    hideElem(document.getElementById(sceneId_Names.get(sceneId)));
    sceneId = id_next;

    showElem(document.getElementById(sceneId_Names.get(sceneId)), 'block');
    console.log(document.getElementById(sceneId_Names.get(sceneId)));
}