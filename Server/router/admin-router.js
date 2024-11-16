const express = require("express");
const {
  getAllUser,
  getAllContacts,
} = require("../controllers/admin-controller");
const router = express.Router();

router.route("/users").get(getAllUser);
router.route("/contacts").get(getAllContacts);
module.exports = router;
