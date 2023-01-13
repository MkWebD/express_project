const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} request for ${req.baseUrl}${req.url} ${delta}ms}`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
