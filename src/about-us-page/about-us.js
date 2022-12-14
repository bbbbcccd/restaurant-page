import './about-us.css';
import Map from './images/google-map.png';

// Helper function to set multiple attributes to an element at once
function setMultipleAttributes(el, attributes) {
    Object.keys(attributes).forEach(attr => {
        el.setAttribute(attr, attributes[attr]);
    });
}

// Helper function to create HTML element with tag name and text content
function createElementWithText(tag, content) {
    const el = document.createElement(tag);
    el.textContent = content;

    return el;
}

function createAboutUsPage() {
    const content = document.createElement('div');
    content.setAttribute("id", "about-us-page");

    const location = createLocation();
    content.appendChild(location);

    return content;
}

function createLocation() {
    const location = document.createElement('div');
    location.setAttribute("id", "location");

    const header = createElementWithText("h2", "Our Store Location");
    location.appendChild(header);

    const address = createElementWithText("strong", "53 Temple Street, Chinatown Central 058598");
    const para = createElementWithText("p", "Our store is located at ");
    para.appendChild(address);
    location.appendChild(para);

    const image = document.createElement('img');
    let imageAttributes = {
        'src': Map,
        'alt': 'Google Maps Image of the store',
        'height': '300px', 
    };
    setMultipleAttributes(image, imageAttributes);
    location.appendChild(image);

    return location;
}



export { createAboutUsPage };