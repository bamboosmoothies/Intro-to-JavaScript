// 2D array = An array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

//change element
groceryList[2][2] = "steak";

//Display all element of a 2D array
for (let list of groceryList) {
	for (let food of list) {
		console.log(food);
	}
}
