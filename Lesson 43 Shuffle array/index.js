let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

cards.forEach((card) => console.log(card));

function shuffle(array) {
	//began at the end bc need array length
	let currentIndex = array.length;

	while (currentIndex != 0) {
		//Store random index
		let randomIndex = Math.floor(Math.random() * array.length);
		//decrement array
		currentIndex -= 1;

		//"temporary array" created to store elements from array
		let temp = array[currentIndex];
		//refresh new array length
		array[currentIndex] = array[randomIndex];
		//store element into temp (array)
		array[randomIndex] = temp;
	}

	return array;
}
