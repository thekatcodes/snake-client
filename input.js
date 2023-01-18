const setupInput = function () {
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
};

setupInput();

module.exports = {setupInput}