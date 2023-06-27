const { bookProvider } = require("../providers");

const createBook = async (book, libraryId) => {
  const newBook = await bookProvider.createBook(book, libraryId);
  return newBook;
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  return book;
};

const getBooks = async () => {
  const books = await bookProvider.getBooks();
  return books;
};

const updateBook = async (bookId) => {
  const updatedBook = await bookProvider.updateBook(bookId);
  return updatedBook;
};

const deleteBook = async (bookId) => {
  const deletedBook = await bookProvider.deleteBook(bookId);
  return deletedBook;
};

module.exports = {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
};
