require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const authRouter = require("./router/auth_router");

// Import the auth controller
const { register, home } = require("./controllers/auth-controllers");
const errorMiddleware = require("./middleware/error-middelware");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
