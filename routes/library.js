const { libraryController, bookController } = require("../controllers");

const express = require("express");
const libraryRouter = express.Router();

libraryRouter.post("/new", libraryController.createLibrary);
libraryRouter.post("/:libraryId/book", bookController.createBook);
libraryRouter.get("/", libraryController.getLibraries);
libraryRouter.get("/:libraryId", libraryController.getLibrary);
libraryRouter.put("/:libraryId", libraryController.updateLibrary);
libraryRouter.delete("/:libraryId", libraryController.deleteLibrary);

module.exports = { libraryRouter };
