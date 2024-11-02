const Contact = require("../models/contact-model");

const contactFrom = async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    await Contact.create(response);
    return res
      .status(200)
      .json({ message: "Contact form submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = contactFrom;
