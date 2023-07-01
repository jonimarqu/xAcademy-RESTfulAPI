const { bookService } = require("../services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(
      req.body,
      req.params.libraryId
    );
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "getBook", error: "Book not found." });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    if (!books) {
      res
        .status(404)
        .json({ action: "getAllBooks", error: "Books not found." });
    } else {
      res.json(books);
    }
  } catch (err) {
    res.status(500).json({ action: "getBooks", error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(
      req.params.bookId,
      req.body
    );
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.bookId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err.message });
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
};
