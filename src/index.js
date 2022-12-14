import './styles.css';
import { createMenuPage } from './menu-page/menu.js';
import { createReviewPage } from './review-page/review.js';
import { createAboutUsPage } from './about-us-page/about-us.js';

const body = document.getElementsByTagName("body")[0];
const tabContainer = document.getElementById("tab-container");
const tabs = tabContainer.querySelectorAll("button");
const content = document.getElementById("content");

tabContainer.addEventListener("click", (e) => {
    switchTabs(e.target);
});

function addContent(activeTab) {
    if (activeTab === "menu") {
        content.appendChild(createMenuPage());
    } else if (activeTab === "reviews") {
        content.appendChild(createReviewPage());
    } else if (activeTab === "about-us") {
        content.appendChild(createAboutUsPage());
    }  
}

function switchTabs(target) {
    if (target.classList.contains("tab") && !target.classList.contains("active")) {
        for (let tab of tabs) {
            if (tab !== target) {
            tab.classList.remove("active")
            } else {
                tab.classList.add("active");
            }
        }
        content.innerHTML = '';
        addContent(target.id);   
    }
}

addContent("menu");