const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login), (module.exports = router);
