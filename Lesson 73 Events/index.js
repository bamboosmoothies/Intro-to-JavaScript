// on click
// const element = document.getElementById("myButton");
// element.onclick = doSomething;

//website loaded
// const element = document.body;
// element.onload = doSomething;

//on change
// element.onchange = doSomething;

// const element = document.getElementById("myText");

const element = document.getElementById("myDiv");
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

// function doSomething() {
// 	alert("you did something");
// }

function doSomething() {
	element.style.backgroundColor = "red";
}

function doSomethingElse() {
	element.style.backgroundColor = "lightgreen";
}

/**
 *  Interactiveness/ events
 */
