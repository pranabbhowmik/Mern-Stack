const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ message: "Token not provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: decoded.email }).select({
      password: 0,
    });
    console.log(userData);
    // Attach user data to req
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next(); // Continue to the next middleware/controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;