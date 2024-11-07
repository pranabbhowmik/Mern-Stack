const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is my Backend home with controller");
  } catch (error) {
    console.log(error);
  }
};

// !! User registion method !!
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // create user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).json({
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

// !! User Login Method !!
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }
    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Password not matched" });
    }
    res.status(200).json({
      message: "Login Success",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
};

// !!User Methoid !!!
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};
module.exports = { home, register, login, user };
