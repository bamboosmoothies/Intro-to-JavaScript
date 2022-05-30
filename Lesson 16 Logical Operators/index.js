// Gives us the ability to check more than 1 condition concurrently
// && AND (Both condiitons must be true)
// || OR (Either conditions can be true)
// ! NOT logical operator: typically used to reverse a condition's boolean value
// true -> false, false -> true;

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}

//instead of saying sunny == true, just sunny can be read as true

if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good and sunny!");
}
else{
    console.log("The weather is bad and its not sunny!");
}

if(!(temp == 0)){
    console.log("Good temperature.")
}
else{
    console.log("Bad Temperature.")
}