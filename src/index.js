import './styles.css';
import { createMenuPage } from './menu-page/menu';

const body = document.getElementsByTagName("body")[0];
const tabContainer = document.getElementById("tab-container");
const tabs = tabContainer.querySelectorAll("button");

tabContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("tab") && !target.classList.contains("active")) {
        for (let tab of tabs) {
            if (tab !== target) {
            tab.classList.remove("active")
            } else {
                tab.classList.add("active");
            }
        }
        removeContent();
        addContent(e.target.id);   
    }
});

function removeContent() {
    const content = document.getElementById("content");
    if (content !== null) {
        body.removeChild(content);
    }
}

function addContent(activeTab) {
    if (activeTab === "menu") {
        body.appendChild(createMenuPage());
    }     
}

body.appendChild(createMenuPage());