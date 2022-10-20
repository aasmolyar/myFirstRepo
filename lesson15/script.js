'use strict'

const DomElement = function (selector, bg, height, width, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElem = function () {

    const firstArgument = this.selector;

    if (firstArgument[0] === '.') {
        this.elem = document.createElement('div');
        this.elem.className = this.selector.slice(0);
    }

    else if (firstArgument[0] === '#') {
        this.elem = document.createElement('p');
        this.elem.id = this.selector;
    }

    this.elem.innerHTML = "<strong>Всем привет!</strong>";
    this.elem.style.cssText = `background-color: ${this.bg};
    height: this.height;
    width: this.width;
    fontSize: this.fontSize;
  `;

    document.body.append(this.elem);
};

const domElement = new DomElement('#block', 'red', '100px', '200px', '50px');


console.log(domElement);
console.log(domElement instanceof DomElement);

domElement.createElem()