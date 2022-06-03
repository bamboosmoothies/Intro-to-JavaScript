/**
 * 	class = a blueprint for creating objects
 * 	define what properties and methods they have
 * 	use a constructor for unique properties
 */

class Player {
	score = 0;

	pause() {
		console.log("You paused the game.");
	}
	exit() {
		console.log("You exited the game.");
	}
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

console.log(player1.score);

player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();
