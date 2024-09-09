const { z } = require("zod");

const AuthValidation = z.object({
  userName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(10, {
      message: "Phone number must not be greater than 10 characters",
    }),

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
      message:
        "User Type must be Choose either 'Customer', 'Electrician', 'Admin' ",
    }),
});

module.exports = AuthValidation;
