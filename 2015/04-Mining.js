// impor crypto
const crypto = require("crypto");

// declare input
const INPUT = "ckczppom";

// declare a variable to store the number
let number = 0;

// create a function to find the number
const findNumber = () => {
	// create a variable to store the hash
	let hash = "";

	// while the hash does not start with 5 zeros
	while (!hash.startsWith("000000")) {
		// increment the number
		number++;

		// create a hash
		hash = crypto
			.createHash("md5")
			.update(INPUT + number)
			.digest("hex");

		// log the number and hash
		console.log(number, hash);
	}
};

// call the function
findNumber();

// log the number
console.log(number);

// Answer: 3938038
