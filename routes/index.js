const { bookRouter } = require("./book");
const { libraryRouter } = require("./library");
const { userRouter } = require("./user");
const { authRouter } = require("./auth");

module.exports = { bookRouter, libraryRouter, userRouter, authRouter };
