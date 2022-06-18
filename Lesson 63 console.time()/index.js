/**
 *  console.time() = starts a timer you can use to
 *  track how long an operation takes
 *  Give each timer a unique name.
 */

//Start
console.time("Response time");
// alert("CLICK ON THE OK BUTTON!");
setTimeout(() => {
	console.log("HELLO!");
}, 3000);
//End
console.timeEnd("Response time");
