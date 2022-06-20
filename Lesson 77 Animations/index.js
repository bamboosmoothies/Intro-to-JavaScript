const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin() {
	let timerId = null;
	let x = 0;
	let y = 0;

	timerId = setInterval(frame, 5);

	function frame() {
		if (x >= 200) {
			clearInterval(timerId);
		} else {
			x += 1;
			myAnimation.style.left = x + "px";
		}
	}
}
