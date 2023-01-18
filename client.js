const net = require("net");

const connect = function () {
	const conn = net.createConnection({
		host: "localhost",
		port: 50541,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	conn.on("data", (data) => {
		console.log("Kicked you cuz you idled", data);
	});

	conn.on("connect", () => {
		console.log("Successfully connected to game server");
		conn.write("Name: JXL");
    });
    conn.on("connect", () => {
		console.log("Move: up");
	});


	return conn;
};

module.exports = { connect };