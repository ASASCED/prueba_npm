module.exports = {
    /**
     * Style your text with two properties
     * @param {*} color - Color letters
     * @param {*} backgroundColor - Background color
     * @example
     * stTxt("WHITE", "ORANGE");
     */
    stTxt
};

let auto = 0;

function stTxt(color, backgroundColor) {
    document.onmouseup = function () {
        let element = document.createElement("span");
        element.setAttribute('id', `stElement${auto}`);
        window.getSelection().getRangeAt(0).surroundContents(element);
        let selectedElement = document.getElementById(`stElement${auto}`);
        selectedElement.style.color = color;
        selectedElement.style.backgroundColor = backgroundColor;
        auto++;
    };
}
