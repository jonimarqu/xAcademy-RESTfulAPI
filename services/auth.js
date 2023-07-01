const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middleware");
const { validateUser } = require("./user");

const login = async (data) => {
  const { name, password } = data;
  if (name === "admin" && password === "admin") {
    const adminToken = jwt.sign({ name, role: "Admin" }, SERVER_SECRET);
    return adminToken;
  } else {
    const user = await validateUser(data);
    if (user) {
      const userToken = jwt.sign({ name, role: "User" }, SERVER_SECRET);
      return userToken;
    }
    return null;
  }
};

module.exports = { login };
