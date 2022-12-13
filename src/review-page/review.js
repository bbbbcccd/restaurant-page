import './review.css';

function setMultipleAttributes(el, attributes) {
    Object.keys(attributes).forEach(attr => {
        el.setAttribute(attr, attributes[attr]);
    });
}

function createReviewPage() {
    const content = document.createElement("div");
    content.setAttribute('id', 'content');

    content.appendChild(createForm());
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

export { createReviewPage };