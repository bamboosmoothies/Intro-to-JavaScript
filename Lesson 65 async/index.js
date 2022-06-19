// async = makes a function return a promise

async function loadFile() {
	let fileLoaded = true;

	if (fileLoaded) {
		return "File loaded";
	} else {
		throw "File NOT loaded";
	}
}

loadFile()
	.then((value) => {
		console.log(value);
	})
	.catch((error) => console.log("File NOT loaded"));

// const promise = new Promise((resolve, reject) => {
// 	let fileLoaded = true;

// 	if (fileLoaded) {
// 		resolve("File loaded");
// 	} else {
// 		reject("File NOT loaded");
// 	}
// });

// promise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((error) => console.log("File NOT loaded"));
