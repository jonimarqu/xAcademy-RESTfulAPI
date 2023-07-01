const { authService } = require("../services");

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    if (!token) {
      res.status(401).json({ error: "Invalid User." });
    } else {
      res.json({ token });
    }
  } catch (err) {
    res.status(500).json({ action: "Login", error: err.message });
  }
};

module.exports = { login };
