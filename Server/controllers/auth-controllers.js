const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is my Backend home with controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // // hashing password
    // const salt_round = 10;
    // const hashingPassword = await bcrypt.hash(password, salt_round);

    // create user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).json({ message: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
