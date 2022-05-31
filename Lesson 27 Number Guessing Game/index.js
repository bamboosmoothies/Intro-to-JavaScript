const answer = Math.floor(Math.random()* 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guesses = document.getElementById("guessField").value;
    guesses++;

    if(guesses == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses.`)
    }
    else if (guesses < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }



}