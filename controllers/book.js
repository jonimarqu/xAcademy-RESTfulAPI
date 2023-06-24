const createBook = (req, res) => {
  console.log("Creates Book");
  res.end();
};

const getBook = (req, res) => {
  console.log("Gets the book");
  res.end();
};

const getBooks = (req, res) => {
  console.log("Gets all books");
  res.end();
};

const updateBook = (req, res) => {
  console.log("Updates Book");
  res.end();
};

const deleteBook = (req, res) => {
  console.log("Marks Book as deleted");
  res.end();
};

module.exports = {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
};
