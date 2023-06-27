const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // library: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  // },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = { Book };
