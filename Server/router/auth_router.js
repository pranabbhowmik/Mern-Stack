const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hi I am A router from auth_router.js");
});

module.exports = router;
