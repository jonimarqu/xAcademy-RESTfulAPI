const { userService } = require("../services");

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res.status(404).json({ action: "getUser", error: "User not found." });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ action: "getUser", error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.userId, req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ action: "updateUser", error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.userId);
    console.log(deleted)
    if (deleted === 403) {
      res.status(403).end();
    } else if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ action: "deleteUser", error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ action: "deleteUser", error: err.message });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
