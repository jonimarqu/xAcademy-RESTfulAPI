const { bookProvider } = require("../providers");

const createBook = async (book, libraryId) => {
  const newBook = await bookProvider.createBook(book, libraryId);
  return newBook;
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  return book;
};

const getAllBooks = async () => {
  const books = await bookProvider.getAllBooks();
  return books;
};

const updateBook = async (bookId, updates) => {
  const updatedBook = await bookProvider.updateBook(bookId, updates);
  return updatedBook;
};

const deleteBook = async (bookId) => {
  await bookProvider.deleteBook(bookId);
  return;
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
