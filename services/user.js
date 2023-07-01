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

/**
 * Delete user if userId != 1 (first Admin)
 * Should be improved to delete user if User is not last admin in DB.
 */
const deleteUser = async (userId) => {
  if (userId == 1) {
    return 403;
  } else {
    const user = await userProvider.getUser(userId);
    if (user) {
      await userProvider.deleteUser(userId);
      return true;
    } else {
      return false;
    }
  }
};

const validateUser = async (data) => {
  const user = await userProvider.validateUser(data);
  return user;
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  createFirstAdmin,
  validateUser,
};
