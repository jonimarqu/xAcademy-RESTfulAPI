const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
  const newLibrary = await libraryProvider.createLibrary(library);
  return newLibrary;
};

const getLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  return library;
};

const getLibraries = async (library) => {
  const libraries = await libraryProvider.getLibraries(library);
  return libraries;
};

const updateLibrary = async (libraryId, updates) => {
  const updatedBook = await libraryProvider.updateLibrary(libraryId, updates);
  return updatedBook;
};

const deleteLibrary = async (libraryId) => {
  await libraryProvider.deleteLibrary(libraryId);
  return;
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
