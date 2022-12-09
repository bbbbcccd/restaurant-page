import './styles.css';
import { createMenuPage } from './menu-page/menu';

const body = document.body;
const tabContainer = document.getElementById("tab-container");
const tabs = tabContainer.querySelectorAll("button");

tabContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab") && !e.target.classList.contains("active")) {
        for (let tab of tabs) {
            if (tab !== e.target) {
            tab.classList.remove("active")
            } else {
                tab.classList.add("active");
            }
        }
    }
});

body.appendChild(createMenuPage());