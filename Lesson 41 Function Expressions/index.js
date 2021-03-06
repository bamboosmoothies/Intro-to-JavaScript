/**
 * 	function expresion = function without a name (anonymous function)
 * 	avoid polluting the global scope with names
 * 	Write it, then forget about it
 */

////instead of
// function sayHello(){
// 	console.log("Hello");
// }
// sayHello();

////do
// const greeting = function(){
// 	console.log("Hello");
// }
// greeting();

let count = 0;

document.getElementById("increaseButton").onclick = function () {
	count += 1;
	document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseButton").onclick = function () {
	count -= 1;
	document.getElementById("myLabel").innerHTML = count;
};

// function increaseCount() {
// 	count += 1;
// 	document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
// 	count -= 1;
// 	document.getElementById("myLabel").innerHTML = count;
// }
