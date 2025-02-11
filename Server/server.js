require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const authRouter = require("./router/auth_router");
const contactRouter = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const cors = require("cors");
// Import the auth controller

const errorMiddleware = require("./middleware/error-middelware");
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true, // Fix typo here
};

const app = express();
const port = process.env.PORT || 5000;
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/from", contactRouter);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
