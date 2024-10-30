require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");

// Import the auth controller
const { register, home } = require("./controllers/auth-controllers");

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", home); // Use the home controller for the root route
app.post("/register", register); // Use the register controller for registration

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
