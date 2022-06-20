/**
 * 	Canvas API = a means for drawing graphics
 * 	used for animations, games, data visualization
 */

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.stroke();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.fillStyle = "lightblue";
context.fill();
