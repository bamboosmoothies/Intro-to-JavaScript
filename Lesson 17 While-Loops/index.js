// while loop = repeat some code
// while some condition is true & potentially infinite.

    // let userName = " ";

    // while(userName == " " || userName == null){
    //     userName = window.prompt("Enter your name");
    // }
    // console.log("Hello", userName);

//Example of infinite loop
    // while(1 == 1){
    //     console.log("HELP");
    // }


//  do while loop = do something, then check the conditions, repeat if condition is true

let userName;

do{
    userName = window.prompt("Enter your name");
}
while(userName == "")
console.log("Hello", userName);