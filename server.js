const express = require("express");

const friendController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} request for ${req.url} ${delta}ms}`);
});

app.use(express.json());

app.get("/friends", friendController.getFriends);
app.get("/friends/:friendId", friendController.getFriend);
app.post("/friends", friendController.postFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
