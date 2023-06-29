const { User } = require("../models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

module.exports = { createUser, getUser };
