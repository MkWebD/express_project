const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/messages", (req, res) => {
	res.send("<ul><li>Hello Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
	console.log("updating messages");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
