const express = require("express");
const libraryRouter = express.Router();
const { libraryController, bookController } = require("../controllers");
const { jwtValidMdw, userIsAdminMdw } = require("../middleware");

libraryRouter.post("/", jwtValidMdw, libraryController.createLibrary);
libraryRouter.post("/:libraryId", jwtValidMdw, bookController.createBook);
libraryRouter.get("/", libraryController.getLibraries);
libraryRouter.get("/:libraryId", libraryController.getLibrary);
libraryRouter.put("/:libraryId", jwtValidMdw, libraryController.updateLibrary);
libraryRouter.delete("/:libraryId", jwtValidMdw, libraryController.deleteLibrary);

module.exports = { libraryRouter };
