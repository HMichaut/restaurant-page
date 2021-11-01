function homeFunction() {
  const contentDiv = document.getElementById("content");
  const innerContentDiv = document.getElementById("text-content");
  
  const title = document.createElement("h1");
  title.innerHTML = "Royal Kefta";
  
  const motto = document.createElement("p");
  motto.innerHTML = "Cheap and 'edible'";
  
  innerContentDiv.appendChild(title);
  innerContentDiv.appendChild(motto);
  
  contentDiv.appendChild(innerContentDiv);
}

export { homeFunction };