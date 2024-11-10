const z = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be at lest of 5 characters" })
    .max(100, { message: "Maximun Number of 100 Charcters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least of 6 Characters" })
    .max(200, {
      message: "Password cannot be generate greater than 200 characters",
    }),
});
// creating signup zod schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 characters" })
    .max(100, { message: "Maximun Number of 100 Charcters" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone Number must be at lest of 10 characters" })
    .max(20, { message: "Maximun Number of 20 Charcters" }),
});

module.exports = { signupSchema, loginSchema };
