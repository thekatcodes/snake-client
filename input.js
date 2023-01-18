// // const { connect } = require("./client");

// // Stores the active TCP connection object.
// // pass the conn object returned by connect() to the setUpInput function
let connection;

const setupInput = function (conn) {
	connection = conn;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on("data", handleUserInput);
	return stdin;
};

const handleUserInput = function (key) {
	// check for the ctrl + c input and terminate the game
	if (key === "\u0003") {
		process.exit();
	}
	if (key === "w") {
		connection.write("Move: up");
	}
	if (key === "a") {
		connection.write("Move: left");
	}
	if (key === "s") {
		connection.write("Move: down");
	}
	if (key === "d") {
		connection.write("Move: right");
	}
	if (key === "q") {
		connection.write("Say: hi there :D");
    }
    if (key === "e") {
		connection.write("Say: wheeeeee!");
	}
};

module.exports = { setupInput };
