const { User } = require("../models");
const { Op } = require("sequelize");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};

const createFirstAdmin = async () => {
  try {
    const newAdmin = await User.findCreateFind({
      where: { name: "admin" },
      defaults: {
        name: "admin",
        password: "admin",
        email: "admin@admin.com",
      },
    });
    return newAdmin;
  } catch (err) {
    console.error("Error creating admin.", err);
    throw err;
  }
};

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      attributes: ["id", "name", "email"],
    });
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

const getUsersByCriteria = async (options) => {
  try {
    const users = await User.findAll({ where: options });
    return users;
  } catch (err) {
    console.error("Internal Error", err);
  }
};

const updateUser = async (userId, updates) => {
  try {
    await User.update({ ...updates }, { where: { id: userId } });
    const updatedUser = await User.findByPk(userId, {
      attributes: ["id", "name", "email", "password", "updatedAt"],
    });
    return updatedUser;
  } catch (err) {
    console.error("Error updating User.", err);
    throw err;
  }
};

const deleteUser = async (userId) => {
  try {
    await User.destroy({ where: { id: userId } });
  } catch (err) {
    console.error("Error deleting User.", err);
    throw err;
  }
};

const validateUser = async (options) => {
  try {
    const user = await User.findOne({
      where: {
        [Op.and]: [{ name: options.name }, { password: options.password }],
      },
    });
    return user;
  } catch (err) {
    console.error("Error when validating User.", err);
    return false;
  }
};

module.exports = {
  createUser,
  createFirstAdmin,
  getUser,
  updateUser,
  deleteUser,
  getUsersByCriteria,
  validateUser,
};
