const express = require("express");
const bookRouter = express.Router();
const { bookController } = require("../controllers");
const { jwtValidMdw, userIsAdminMdw } = require("../middleware");

bookRouter.post("/", jwtValidMdw, bookController.createBook);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:bookId", bookController.getBook);
bookRouter.put("/:bookId", jwtValidMdw, bookController.updateBook);
bookRouter.delete("/:bookId", jwtValidMdw, bookController.deleteBook);

module.exports = { bookRouter };
