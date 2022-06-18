/**
 * 	promise = object that encapsulatesthe result of an asynchronous operation.
 * 	let asynchronous methods return rvalues like synchronous methods
 * 	"I promise to return something in the future"
 *
 * 	the STATE is 'pending' then: 'fulfilled or 'rejected'
 * 	the RESULT is what can be returend
 * 	2 parts producing & consuming
 *
 */
const promise = new Promise((resolve, reject) => {
	let fileLoaded = false;

	if (fileLoaded) {
		resolve("File loaded");
	} else {
		reject("File NOT loaded");
	}
});

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => console.log("File NOT loaded"));
