const { Book, Library, User } = require("../models");

const createLibrary = async (library) => {
  const newLibrary = await Library.create(library);
  return newLibrary;
};

const getLibrary = async (libraryId) => {
  const library = await Library.findByPk(libraryId);
  return library;
};

const getLibraries = async () => {
  const libraries = await Library.findAll(this);
  return libraries;
};

const updateLibrary = async (libraryId, updates) => {
  await Library.update({ ...updates }, { where: { id: libraryId } });
  const updatedLibrary = await Library.findByPk(libraryId);
  return updatedLibrary;
};

const deleteLibrary = async (libraryId) => {
  await Library.destroy({ where: { id: libraryId } });
  return;
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
