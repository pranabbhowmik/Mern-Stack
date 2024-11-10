const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const { signupSchema, loginSchema } = require("../validator/user-validator");
const validate = require("../middleware/validator");
const authMiddleware = require("../middleware/auth-Middleware");

router.route("/").get(authControllers.home);

// !!Register Router😑 !!!
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

//!!! login Router 😎!!!!
router.route("/login").post(validate(loginSchema), authControllers.login);
// User Router 😊!!
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;
