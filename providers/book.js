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
  const book = await Book.findByPk(bookId, {
    attributes: ["id", "isbn", "title", "author", "year"],
    include: { all: true, attributes: ["id", "name", "location", "phone"] },
  });
  return book;
};

const getAllBooks = async () => {
  const books = await Book.findAll({
    attributes: ["id", "isbn", "title", "author", "year"],
    include: { all: true, attributes: ["id", "name", "location", "phone"] },
  });
  return books;
};

const updateBook = async (bookId, updates) => {
  await Book.update({ ...updates }, { where: { id: bookId } });
  const updatedBook = await Book.findByPk(bookId);
  return updatedBook;
};

const deleteBook = async (bookId) => {
  await Book.destroy({ where: { id: bookId } });
  return;
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
