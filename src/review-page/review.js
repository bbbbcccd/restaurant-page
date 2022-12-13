import './review.css';

// Review constructor to create review objects
// Each review consists of a name and the content
function Review(name, content) {
    this.name = name;
    this.content = content;
}

const reviewOne = new Review("John", "This cozy restaurant has left the best impressions!");
const reviewTwo = new Review("Tom", "Hospitable hosts, delicious dishes, beautiful presentation");
const reviewThree = new Review("Amy", "It’s a great experience. The ambiance is very welcoming and charming."); 
const reviewFour = new Review("Jane", "The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best meal we had in a long while");
const reviewFive = new Review("Ayers", "We are so fortunate to have this place just a few minutes drive away from home.");

// reviews is an array storing review objects to be displayed on the webpage
const reviews = [reviewOne, reviewTwo, reviewThree, reviewFour, reviewFive];

function setMultipleAttributes(el, attributes) {
    Object.keys(attributes).forEach(attr => {
        el.setAttribute(attr, attributes[attr]);
    });
}

function createReviewPage() {
    const content = document.createElement("div");
    content.setAttribute('id', 'content');

    const form = createForm();
    content.appendChild(form);

    const header = createHeader();
    content.appendChild(header);
    
    const reviewSection = createReviewSection();
    content.appendChild(reviewSection);

    return content;
}

function createForm() {
    const form = document.createElement("form");
    const formAttributes = {
        'action': '?',
        'method': 'post', 
    };
    setMultipleAttributes(form, formAttributes);
    
    const input = document.createElement("input");
    const inputAttributes = {
        'type': 'text',
        'id': 'add-review',
        'name': 'add-review',
        'maxlength': '150',
        'autocomplete': 'off',
        'placeholder': 'Add a review',
    }
    setMultipleAttributes(input, inputAttributes);
    form.appendChild(input);

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "POST";
    form.appendChild(submitBtn);

    return form;
}

function createHeader() {
    const header = document.createElement("h3");
    header.setAttribute("id", "review-header");
    header.textContent = "Reviews (5)";
    
    return header;
}

function createReviewSection() {
    const reviewSection = document.createElement("div");
    reviewSection.setAttribute("id", "review-section");

    reviews.forEach(review => {
        const reviewEl = createReview(review);
        reviewSection.appendChild(reviewEl);
    });

    return reviewSection;
}

function createReview(review) {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    
    const reviewHeader = document.createElement("h4");
    reviewHeader.textContent = review.name;
    reviewDiv.appendChild(reviewHeader);

    const reviewPara = document.createElement("p");
    reviewPara.textContent = review.content;
    reviewDiv.appendChild(reviewPara);

    return reviewDiv;
}

export { createReviewPage };