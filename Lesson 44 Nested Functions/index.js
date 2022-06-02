/**
 * 	nested functions = Functions inside other functions.
 * 	Outer function have access to inner function.
 * 	Inner function are "hidden" from outside the outer functions.
 * 	used in closures (future video topic)
 */

let userName = "Bro";
let userInbox = 0;

login();

////hidden
// displayUserInbox();
// displayUserInbox();

function login() {
	displayUserName();
	displayUserInbox();

	function displayUserName() {
		console.log(`Welcome ${userName}`);
	}

	function displayUserInbox() {
		console.log(`You have ${userInbox} new messages`);
	}
}
