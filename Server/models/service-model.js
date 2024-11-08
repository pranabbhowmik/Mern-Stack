const { Schema, mongoose, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    Service: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    provider: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
