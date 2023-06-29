const { userProvider } = require("../providers");

const createUser = async (user) => {
  const newUser = await userProvider.createUser(user);
  return newUser;
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    //logica de negocio
  }
  return user;
};

module.exports = { createUser, getUser };
