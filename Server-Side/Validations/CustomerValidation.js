const { z } = require("zod");

const CustomerValidation = z.object({
  customerName: z
    .string({ required_error: "Customer name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not exceed 255 characters" }),

  customerAddress: z.object({
    street: z
      .string({ required_error: "Street is required" })
      .min(1, { message: "Street cannot be empty" }),
    city: z
      .string({ required_error: "City is required" })
      .min(1, { message: "City cannot be empty" }),
    postalCode: z
      .string({ required_error: "Postal code is required" })
      .min(1, { message: "Postal code cannot be empty" }),
    state: z
      .string({ required_error: "State is required" })
      .min(1, { message: "State cannot be empty" }),
    country: z
      .string({ required_error: "Country is required" })
      .min(1, { message: "Country cannot be empty" }),
  }),

  category: z
    .enum(["Electrical", "Plumbing", "HVAC"], {
      required_error: "Category is required",
    })
    .refine((val) => ["Electrical", "Plumbing", "HVAC"].includes(val), {
      message: "Category must be 'Electrical', 'Plumbing', or 'HVAC'",
    }),

  description: z
    .string({ required_error: "Description is required" })
    .trim()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must not exceed 1000 characters" }),

  mobile: z
    .string({ required_error: "Mobile number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(10, {
      message: "Phone number must not be greater than 10 characters",
    }),
});

module.exports = CustomerValidation;
