// import fs to read file
const fs = require("fs");

// read file and split
const Boxes = fs.readFileSync("02-Boxes.txt", "utf8").split("\n");

// function to calculate the paper needed

const wrappingPaper = Boxes.reduce((total, LWH) => {
	// split LWH into array from boxes.txt
	const [L, W, H] = LWH.split("x").map(Number);

	// calculate surface area
	const Area = 2 * (L * W + L * H + W * H);

	// calculate smallest side
	const smallest = Math.min(L * W, W * H, H * L);

	// calculate total
	const totalArea = Area + smallest;

	// return total
	return total + totalArea;
}, 0);

// print wrappingPaper
console.log(
	"the total amount of wrapping papaer needed is " +
		wrappingPaper +
		" square feet"
);

// function to calculate the ribbon needed

const ribbon = Boxes.reduce((total, LWH) => {
	// split LWH into array from boxes.txt
	const [L, W, H] = LWH.split("x").map(Number);

	// calculate smallest side
	const smallest = Math.min(L + L + W + W, W + W + H + H, H + H + L + L);

	// calculate bow
	const bow = L * W * H;

	// calculate total
	const totalRibbon = smallest + bow;

	// return total
	return total + totalRibbon;
}, 0);

// print ribbon
console.log("the total amount of ribbon needed is " + ribbon + " feet");
