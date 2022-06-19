let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
fruits.forEach((fruit) => {
	if (fruit.checked) {
		console.log(fruit.value);
	}
});

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightblue";

//popular and most used but only select first element
// let element = document.querySelector("#myTitle");
// element.style.backgroundColor = "lightblue";

let vegetables = document.querySelectorAll("li");
vegetables.forEach((vegetables) => {
	vegetables.style.backgroundColor = "yellow";
});
