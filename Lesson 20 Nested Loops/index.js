//  nested loop = a loop inside of another loop

    // for(let i = 1; i <= 3; i+=1){
    //     for(let j = 1; j <= 3; j+=1){
    //         console.log(j);
    //     }
    // }

let rows = window.prompt("Enter # of rows");
let columns = window.prompt("enter # of columns");

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myRectan4gle").innerHTML += j;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}1