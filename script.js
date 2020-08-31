'use strict';

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    }
    div() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
        let whatText = prompt('Enter, what to write ?');
        elem.textContent = whatText;
    }

}
const newElem = new Options(300, 350, 'blue', 50, 'center');
newElem.div();
