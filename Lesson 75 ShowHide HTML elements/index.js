const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

//Collapse and hide
// myButton.addEventListener("click", () => {
// 	console.log(myImg.style.display);
// 	if (myImg.style.display == "none") {
// 		myImg.style.display = "block";
// 	} else {
// 		myImg.style.display = "none";
// 	}
// });

//Reserve space for images/no collapsing
myButton.addEventListener("click", () => {
	if (myImg.style.visibility == "hidden") {
		myImg.style.visibility = "visible";
	} else {
		myImg.style.visibility = "hidden";
	}
});
