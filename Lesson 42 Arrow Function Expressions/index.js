//	arrow function = compact alternative to traditional function expression
// 	ex: =>

const greeting = (userName) => console.log(`Hello ${userName}`);
greeting("bro");

//EX
const percent = (x, y) => (x / y) * 100;

console.log(`${percent(75, 100)}%`);

//EX
let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);

grades.forEach((element) => console.log(element));
