const express = require("express");
const {
  getAllUser,
  getAllContacts,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-Middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUser);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
module.exports = router;
