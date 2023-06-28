const { Book, Library, User } = require("../models");

const createBook = async (book, libraryId) => {
  let newBook;
  if (libraryId) {
    newBook = await Book.create({ ...book, libraryId });
  } else {
    newBook = Book.create(book);
  }
  return newBook;
};

const getBook = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const getAllBooks = async () => {
  const books = await Book.findAll(this);
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
