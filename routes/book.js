const { bookController } = require("../controllers");

const express = require("express");
const bookRouter = express.Router();

bookRouter.post("/new", bookController.createBook);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:bookId", bookController.getBook);
bookRouter.put("/:bookId", bookController.updateBook);
bookRouter.delete("/:bookId", bookController.deleteBook);

module.exports = { bookRouter };
