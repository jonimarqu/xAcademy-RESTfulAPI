const { userProvider } = require("../providers");

const createUser = async (user) => {
  const newUser = await userProvider.createUser(user);
  return newUser;
};

const createFirstAdmin = async () => {
  const newAdmin = await userProvider.createFirstAdmin();
  return newAdmin;
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    return user;
  }
  return null;
};

const updateUser = async (userId, updates) => {
  const updatedUser = await userProvider.updateUser(userId, updates);
  return updatedUser;
};

const deleteUser = async (userId) => {
  await userProvider.deleteUser(userId);
  return;
};

module.exports = { createUser, getUser, updateUser, deleteUser, createFirstAdmin };
