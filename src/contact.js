function contactFunction() {
  const contentDiv = document.getElementById("content");
  const innerContentDiv = document.getElementById("text-content");

  const motto = document.createElement("p");
  motto.innerHTML = "Contact us";
  
  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  item1.innerHTML = "Phone: 555-555-555";
  list.appendChild(item1);

  const item2 = document.createElement("li");
  item2.innerHTML = "Email: sales@royalkefta.com";
  list.appendChild(item2);

  innerContentDiv.appendChild(motto); 
  innerContentDiv.appendChild(list);
  
  contentDiv.appendChild(innerContentDiv);
}

export { contactFunction };