const { bookService } = require("../services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body, req.params.libraryId);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.messae });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    res.json(book);
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.messae });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks(req.body);
    res.json(books);
  } catch (err) {
    res.status(500).json({ action: "getBooks", error: err.messae });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.bookId);
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err.messae });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookService.deleteBook(req.params.bookId);
    res.json(deletedBook);
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err.messae });
  }
};

module.exports = {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
};
