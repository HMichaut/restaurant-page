import './style.css';

const contentDiv = document.getElementById("content");
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

const innerContentDiv = document.createElement("div");
innerContentDiv.className = "text-content";

const title = document.createElement("h1");
title.innerHTML = "Royal Kefta";

const motto = document.createElement("p");
motto.innerHTML = "Cheap and 'edible'";

const footer = document.createElement("footer");
footer.className = "footer";

const copyright = document.createElement("p");
copyright.innerHTML = "Copyright Royal Kefta incorporated. All rights reserved.";
footer.appendChild(copyright);

innerContentDiv.appendChild(title);
innerContentDiv.appendChild(motto);
innerContentDiv.appendChild(footer);

contentDiv.appendChild(headerContainer);
contentDiv.appendChild(innerContentDiv);
contentDiv.appendChild(footer);

console.log(headerContainer);