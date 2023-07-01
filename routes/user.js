const express = require("express");
const userRouter = express.Router();
const { userController } = require("../controllers");
const { userIsAdminMdw } = require("../middleware");

userRouter.post("/", userIsAdminMdw, userController.createUser);
userRouter.get("/:userId", userIsAdminMdw, userController.getUser);
userRouter.put("/:userId", userIsAdminMdw, userController.updateUser);
userRouter.delete("/:userId", userIsAdminMdw, userController.deleteUser);

module.exports = { userRouter };
