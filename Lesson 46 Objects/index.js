/**
 * 	object = a group of properties and methods.
 * 	properties = what an object has.
 * 	methods = what an object can do.
 * 	uses " . " to access properties/methods.
 */

const car = {
	model: "Mustang",
	color: "red",
	year: 2023,

	drive: function () {
		console.log("You drive the car");
	},
	brake: function () {
		console.log("You stepped on the brakes.");
	},
};

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();
