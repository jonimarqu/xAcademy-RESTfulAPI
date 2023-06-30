const { Book } = require("../models");

const createBook = async (book, libraryId) => {
  try {
    let newBook;
    if (libraryId) {
      newBook = await Book.create({ ...book, LibraryId: libraryId });
    } else {
      newBook = await Book.create(book);
    }
    return newBook;
  } catch (err) {
    console.error("Error creating Book.", err);
    throw err;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId, {
      attributes: ["id", "isbn", "title", "author", "year"],
      include: { all: true, attributes: ["id", "name", "location", "phone"] },
    });
    return book;
  } catch (err) {
    console.error("Error getting Book.", err);
    throw err;
  }
};

const getAllBooks = async () => {
  try {
    const books = await Book.findAll({
      attributes: ["id", "isbn", "title", "author", "year"],
      include: { all: true, attributes: ["id", "name", "location", "phone"] },
    });
    return books;
  } catch (err) {
    console.error("Error getting all Books.", err);
    throw err;
  }
};

const updateBook = async (bookId, updates) => {
  try {
    await Book.update({ ...updates }, { where: { id: bookId } });
    const updatedBook = await Book.findByPk(bookId);
    return updatedBook;
  } catch (err) {
    console.error("Error updating Book.", err);
    throw err;
  }
};

const deleteBook = async (bookId) => {
  try {
    await Book.destroy({ where: { id: bookId } });
    return;
  } catch (err) {
    console.error("Error deleting Book.", err);
    throw err;
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
