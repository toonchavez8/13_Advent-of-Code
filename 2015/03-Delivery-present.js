// import fs
const fs = require("fs");

const INPUT = fs
	.readFileSync("./03-PresentDelivery-input.txt", "utf-8")
	.split("");

// create a set to store the houses
const houses = new Set().add("0x0");

// create a variable to store the current position
let position = { x: 0, y: 0 };

// create a function to move the position
INPUT.reduce((currentCords, Direction) => {
	// move the position
	let newPosition = { x: 0, y: 0 };

	// switch case to move
	switch (Direction) {
		case "^":
			newPosition = { x: currentCords.x, y: currentCords.y + 1 };
			break;
		case "v":
			newPosition = { x: currentCords.x, y: currentCords.y - 1 };
			break;
		case ">":
			newPosition = { x: currentCords.x + 1, y: currentCords.y };
			break;
		case "<":
			newPosition = { x: currentCords.x - 1, y: currentCords.y };
			break;
	}

	// add the new position to the set
	houses.add(`${newPosition.x}x${newPosition.y}`);

	// return the new position
	return newPosition;
}, position);

// log the result
console.log(houses.size + " houses will receive at least one present");

// Answer: 2081

// declare santas directions
const santasDirections = INPUT.filter((_, index) => index % 2 === 0);
// declar robo santas directions
const roboSantasDirections = INPUT.filter((_, index) => index % 2 !== 0);

// create a set to store the houses
const houses2 = new Set().add("0x0");

// create a variable to store the current position
let position2 = { x: 0, y: 0 };

// create a function to move the position
santasDirections.reduce((currentCords, Direction) => {
	// move the position
	let newPosition = { x: 0, y: 0 };

	// switch case to move
	switch (Direction) {
		case "^":
			newPosition = { x: currentCords.x, y: currentCords.y + 1 };
			break;
		case "v":
			newPosition = { x: currentCords.x, y: currentCords.y - 1 };
			break;
		case ">":
			newPosition = { x: currentCords.x + 1, y: currentCords.y };
			break;
		case "<":
			newPosition = { x: currentCords.x - 1, y: currentCords.y };
			break;
	}

	// add the new position to the set
	houses2.add(`${newPosition.x}x${newPosition.y}`);

	// return the new position
	return newPosition;
}, position2);

// create a variable to store the current position
let position3 = { x: 0, y: 0 };

// create a function to move the position

roboSantasDirections.reduce((currentCords, Direction) => {
	// move the position
	let newPosition = { x: 0, y: 0 };

	// switch case to move
	switch (Direction) {
		case "^":
			newPosition = { x: currentCords.x, y: currentCords.y + 1 };
			break;
		case "v":
			newPosition = { x: currentCords.x, y: currentCords.y - 1 };
			break;
		case ">":
			newPosition = { x: currentCords.x + 1, y: currentCords.y };
			break;
		case "<":
			newPosition = { x: currentCords.x - 1, y: currentCords.y };
			break;
	}

	// add the new position to the set
	houses2.add(`${newPosition.x}x${newPosition.y}`);

	// return the new position
	return newPosition;
}, position3);

// log the result
console.log(houses2.size + " houses will receive at least one present");

// Answer: 2341
