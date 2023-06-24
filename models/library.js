const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');
const Book = require('./book');

const Library = sequelize.define("Libraries", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Library.hasMany(Book, { foreignKey: { allowNull: true }, onDelete: 'SET NULL', optional: true });

module.exports = Library;
