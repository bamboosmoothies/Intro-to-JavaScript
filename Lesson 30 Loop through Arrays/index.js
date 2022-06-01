let prices = [5, 10, 15, 20];

//Default
// for (let i = 0; i < prices.length; i += 1) {
//     console.log(prices[i]);
// }

//Reverse

// for (let i = prices.length - 1; i >= 0; i -= 1) {
//     console.log(prices[i]);
// }

//For up statement (Works same way as traditional default loop method)

for (let i of prices) {
	console.log(i);
}
