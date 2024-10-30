const mongoose = require("mongoose");

// Load MongoDB URI from environment variable
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with error
  }
};

module.exports = connectDB;
