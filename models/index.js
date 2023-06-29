const { Book } = require("./book");
const { Library } = require("./library");
const { User } = require("./user");

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = { Book, Library, User };
