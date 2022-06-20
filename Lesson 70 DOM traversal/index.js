/**
 * 	.firstElementChild
 * 	.lastElementChild
 * 	.parentElement
 * 	.nextElementSilbing
 * 	.previousElementSibling
 * 	.children[]
 * 	Array.from(.children)
 */

let element = document.querySelector("#vegetables");
let child = element.parentElement;
child.style.backgroundColor = "lightgreen";
