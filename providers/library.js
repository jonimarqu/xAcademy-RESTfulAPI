const { Library } = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (err) {
    console.error("Error creating Library.", err);
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId, {
      attributes: ["id", "name", "location", "phone"],
      include: {
        all: true,
        attributes: ["id", "isbn", "title", "author", "year"],
      },
    });
    return library;
  } catch (err) {
    console.error("Error getting Library.", err);
    throw err;
  }
};

const getLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      attributes: ["id", "name", "location", "phone"],
      include: {
        all: true,
        attributes: ["id", "isbn", "title", "author", "year"],
      },
    });
    return libraries;
  } catch (err) {
    console.error("Error getting all Libraries.", err);
    throw err;
  }
};

const updateLibrary = async (libraryId, updates) => {
  try {
    await Library.update({ ...updates }, { where: { id: libraryId } });
    const updatedLibrary = await Library.findByPk(libraryId);
    return updatedLibrary;
  } catch (err) {
    console.error("Error updating Library.", err);
    throw err;
  }
};

const deleteLibrary = async (libraryId) => {
  try {
    await Library.destroy({ where: { id: libraryId } });
    return;
  } catch (err) {
    console.error("Error deleting Library.", err);
    throw err;
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
};
