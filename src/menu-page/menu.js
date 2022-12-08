import './menu.css';
import Burger from './images/burger.jpg';

// menu is an array of item objects which stores the name of the item and the source of its image
let menu = [];


function Item(name, src) {
    this.name = name;
    this.src = src;
}

function addItemToMenu(item) {
    menu.push(item);
}

const burgerOne = new Item("burgerOne", Burger);
const burgerTwo = new Item("burgerTwo", Burger);
const burgerThree = new Item("burgeThree", Burger);
const burgerFour = new Item("burgerFour", Burger);
const burgerFive = new Item("burgerFive", Burger);
const burgerSix = new Item("burgerSix", Burger);

menu = [burgerOne, burgerTwo, burgerThree, burgerFour, burgerFive, burgerSix];

// Creates and returns DOM content of Menu Page
function createMenuPage() {
    let content = document.createElement('div');
    content.setAttribute('id', 'content');

    for (const item of menu) {
        content.appendChild(createItemElement(item));
    }

    return content;
}

function createItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.setAttribute('class', 'card');
    itemElement.setAttribute('id', item.name);

    const icon = new Image();
    icon.src = item.src;
    icon.setAttribute('height', '225px');
    icon.setAttribute('alt', `Image of ${ item.name }`);
    itemElement.appendChild(icon);

    const para = document.createElement("p");
    para.textContent = item.name;
    itemElement.appendChild(para);

    return itemElement;
}

export { createMenuPage };