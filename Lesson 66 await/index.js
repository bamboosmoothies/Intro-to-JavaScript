// await = make an async function wait for a promise

async function loadFile() {
	let fileLoaded = false;

	if (fileLoaded) {
		return "File loaded";
	} else {
		throw "File NOT loaded";
	}
}

async function startProcess() {
	try {
		let message = await loadFile();
		console.log(message);
	} catch (error) {
		console.log(error);
	}
}

startProcess();

// loadFile()
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((error) => console.log("File NOT loaded"));
