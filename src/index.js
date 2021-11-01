import './style.css';
import { homeFunction } from './home.js';
import { menuFunction } from './menu.js';

const contentDiv = document.getElementById("content");
const innerContentDiv = document.createElement("div");
innerContentDiv.id = "text-content";

const headerContainer = document.createElement("header");
headerContainer.className = "navbar";

const homeButton = document.createElement("button");
homeButton.innerHTML = "Home";
homeButton.className = "navbar-button";

const menuButton = document.createElement("button");
menuButton.innerHTML = "Menu";
menuButton.className = "navbar-button";

const contactButton = document.createElement("button");
contactButton.innerHTML = "Contact";
contactButton.className = "navbar-button";

headerContainer.appendChild(homeButton);
headerContainer.appendChild(menuButton);
headerContainer.appendChild(contactButton);

const footer = document.createElement("footer");
footer.className = "footer";

const copyright = document.createElement("p");
copyright.innerHTML = "Copyright Royal Kefta incorporated. All rights reserved.";
footer.appendChild(copyright);
contentDiv.appendChild(headerContainer);
contentDiv.appendChild(innerContentDiv);
contentDiv.appendChild(footer);

function resetPage() {
  const newInnerContentDiv = document.createElement("div");
  newInnerContentDiv.id = "text-content";
  const oldInnerContentDiv = document.getElementById("text-content");
  oldInnerContentDiv.parentNode.replaceChild(newInnerContentDiv, oldInnerContentDiv);
};

homeButton.addEventListener("click", () => {
  resetPage();
  homeFunction();
});

menuButton.addEventListener("click", () => {
  resetPage();
  menuFunction();
});


homeFunction();