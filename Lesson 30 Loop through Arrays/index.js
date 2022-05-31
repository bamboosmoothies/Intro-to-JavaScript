//  array = think of it as a variable that can store mutiple value

let fruits = ["apple", "orange", "banana"];
console.log(fruits[2]);

fruits[0] = "coconut";

console.log(fruits);

fruits.push("lemons");  // add an element
fruits.pop();           // removes last element
fruits.unshift("mango") // add element to beginning
fruits.shift();         // remove element to beginning

console.log(fruits);

let length = fruits.length;
let index = fruits.indexOf("orange");

console.log(length)
console.log(index);