const { Book } = require("./book");
const { Library } = require("./library");
const { User } = require("./user");

Library.hasMany(Book, {
  foreignKey: { allowNull: true },
  onDelete: "SET NULL",
  optional: true,
});

Book.belongsTo(Library, {
  foreignKey: { allowNull: true },
  onDelete: "SET NULL",
  optional: true,
});

module.exports = { Book, Library, User };
