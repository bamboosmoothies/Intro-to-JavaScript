/**
 * 	spread operator = allows an iterable such as an
 * 	array or string to expanded in places where zero
 * 	or more arguments are expected
 * 	(unpacks the element)
 * 	...
 */

// let userName = "Bro Code";
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...userName);

//Without spread operator, output = NaN
// let maximum = Math.max(...numbers);
// console.log(maximum);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krab", "Plankton"];

class1.push(...class2);

console.log(...class1);
