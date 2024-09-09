const { z } = require("zod");

const LoginValidation = z.object({
  email: z
    .string({ required_error: "Email must be reauired" })
    .trim()
    .email({ message: "Invalid email" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, {
      message: "Password must contain at least one numeric value",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    })
    .max(15, { message: "Password must not be greater than 15 characters" }),

  userType: z
    .string({ required_error: "User Type is required" })
    .trim()
    .refine((val) => ["Customer", "Electrician", "Admin"].includes(val), {
      message: "User Type must be choose 'Customer', 'Electrician', 'Admin' ",
    }),
});

module.exports = LoginValidation;
