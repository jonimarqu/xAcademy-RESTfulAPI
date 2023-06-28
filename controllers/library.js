const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.messae });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    res.json(library);
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.messae });
  }
};

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getLibraries(req.body);
    res.json(libraries);
  } catch (err) {
    res.status(500).json({ action: "getLibraries", error: err.messae });
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
    res.status(500).json({ action: "updateLibrary", error: err.messae });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    await libraryService.deleteLibrary(req.params.libraryId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err.messae });
  }
};

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  updateLibrary,
  deleteLibrary,
};
