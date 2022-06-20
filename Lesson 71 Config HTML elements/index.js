/**
 *  add/change HTML elements
 *  .innerHTML (vulnerable to XSS attacks)
 *  .textContent (more secure)
 */

const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag);

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
//add to where
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
