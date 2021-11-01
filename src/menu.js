function menuFunction() {
  const contentDiv = document.getElementById("content");
  const innerContentDiv = document.getElementById("text-content");
  
  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  item1.innerHTML = "Beef Kefta: 8€";
  list.appendChild(item1);

  const item2 = document.createElement("li");
  item2.innerHTML = "Moroccan Kefta: 9€";
  list.appendChild(item2);

  const item3 = document.createElement("li");
  item3.innerHTML = "Lebanese Kefta: 11€";
  list.appendChild(item3);

  const item4 = document.createElement("li");
  item4.innerHTML = "Oven Baked Kefta: 11€";
  list.appendChild(item4);

  const item5 = document.createElement("li");
  item5.innerHTML = "Mint Kefta: 12€";
  list.appendChild(item5);

  const item6 = document.createElement("li");
  item6.innerHTML = "Chocolate Kefta: 12€";
  list.appendChild(item6);

  const item7 = document.createElement("li");
  item7.innerHTML = "Iced Kefta: 13€";
  list.appendChild(item7);

  const item8 = document.createElement("li");
  item8.innerHTML = "Molecular Kefta: 25€";
  list.appendChild(item8);
  
  innerContentDiv.appendChild(list);
  
  contentDiv.appendChild(innerContentDiv);
}

export { menuFunction };