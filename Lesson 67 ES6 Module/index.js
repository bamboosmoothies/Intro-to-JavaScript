/**
 * 	The idea behind a module is that it's a file of reusable code.
 * 	WE can import sections of pre-written code to use whenver.
 * 	Great for any general utility alues and functions.
 * 	Helps to make your code more resusable and maintable.
 * 	Think of modules as separate chapters of a book.
 *
 * 	In html, include tag 'type = module'
 */

// import { PI, getCircumference, getArea } from "./math_util.js";
// console.log(PI);

import * as MathUtil from "./math_util.js";
console.log(MathUtil.PI);
