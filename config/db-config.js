const { Sequelize } = require("sequelize"); // Take the Sequelize Class

// Make a unique instance of the class
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
  logging: false,
});

const initializeDB = async () => {
  try {
    await sequelize.authenticate(); // Tests connection by trying to authenticate
    console.log("Conection to DB established.");

    // Sync all defined models to the DB
    await sequelize.sync({ force: true }); // force: if true, each start deletes DB
  } catch (err) {
    console.error("Error initializing DB.", err.message);
    throw err;
  }
};

module.exports = { sequelize, initializeDB };
