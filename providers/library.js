const { Book, Library, User } = require("../models");

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

const updateLibrary = async (libraryId) => {
  const updatedLibrary = await libraryProvider.updateLibrary(libraryId);
  return updatedLibrary;
};

const deleteLibrary = async (libraryId) => {
  await Library.destroy(libraryId);
  return;
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
