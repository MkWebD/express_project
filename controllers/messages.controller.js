const path = require("path");

function getMessages(req, res) {
	path.join(__dirname, "..", "public", "skimountain.jpg");
	res.sendFile(path.join(__dirname, "..", "public", "images", "skimountain.jpg"));
}

function postMessage(req, res) {
	console.log("updating messages");
}

module.exports = {
	getMessages,
	postMessage,
};
