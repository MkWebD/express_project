const express = require("express");

const friendController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
	console.log("ip address", req.ip);
	next();
});

friendsRouter.get("/", friendController.getFriends);
friendsRouter.get("/:friendId", friendController.getFriend);
friendsRouter.post("/", friendController.postFriend);

module.exports = friendsRouter;
