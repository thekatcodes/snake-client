const net = require("net");

const connect = function () {
	const conn = net.createConnection({
		host: "165.227.47.243",
		port: 50541,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	conn.on("data", (data) => {
		console.log("Kicked you cuz you idled", data);
	});

	conn.on("connect", () => {
		console.log("Successfully connected to game server");
		conn.write("Name: KTL");
    });
    conn.on("connect", () => {
		console.log("Move: up");
	});


	return conn;
};

module.exports = { connect };