/**
 * 	error = object with a description of something went wrong
 *
 * 	Can't open a file
 * 	Lose connection
 * 	User types incorrect input
 * 	type error
 *
 *  throw = executes a user-defined error
 */

// try {
// 	console.lag();
// } catch (error) {
// 	console.log(error);
// }

try {
	let x = window.prompt("enter a #");
	x = Number(x);

	if (isNaN(x)) throw "That wasn't a number";
	if (x == "") throw "That was empty";

	console.log(`${x} is a number`);
} catch (error) {
	console.log(error);
} finally {
	console.log("This always executes.");
}
