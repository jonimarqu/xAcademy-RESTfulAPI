const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body);
    res.status(201).json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    if (!library) {
      res
        .status(404)
        .json({ action: "getLibrary", error: "Library not found." });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.message });
  }
};

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getLibraries(req.body);
    if (!libraries) {
      res
        .status(404)
        .json({ action: "getLibraries", error: "Libraries not found." });
    } else {
      res.json(libraries);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibraries", error: err.message });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const updatedLibrary = await libraryService.updateLibrary(
      req.params.libraryId,
      req.body
    );
    res.json(updatedLibrary);
  } catch (err) {
    res.status(500).json({ action: "updateLibrary", error: err.message });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    await libraryService.deleteLibrary(req.params.libraryId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err.message });
  }
};

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  updateLibrary,
  deleteLibrary,
};
