const net = require("net");

const connect = function () {
	const conn = net.createConnection({
		host: "165.227.47.243",
		port: 50541,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	//event handler to handle incoming data and console log it for me, the playerå
	conn.on("data", (data) => {
		console.log("Server message:", data);
	});

	conn.on("connect", () => {
		console.log("Successfully connected to game server");
		conn.write("Name: KTL");
	});

	return conn;
};

module.exports = { connect };
