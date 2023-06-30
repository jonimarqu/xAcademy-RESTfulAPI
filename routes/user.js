const express = require("express");
const userRouter = express.Router();
const { userController } = require("../controllers");

userRouter.post("/new", userController.createUser);
userRouter.get("/:userId", userController.getUser);
userRouter.put("/:userId", userController.updateUser);
userRouter.delete("/:userId", userController.deleteUser);

module.exports = { userRouter };
