const { z } = require("zod");

const ElectricianValidation = z.object({
  name: z
    .string({ required_error: "Electrician name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not exceed 255 characters" }),

  contact: z
    .string({ required_error: "Contact number is required" })
    .trim()
    .min(10, { message: "Contact number must be at least 10 digits long" })
    .max(10, { message: "Contact number must not exceed 10 digits" }),

  // electricianId: z
  //   .string({ required_error: "Electrician ID is required" })
  //   .refine((id) => isValidObjectId(id), { message: "Invalid Electrician ID format" }),

  electricianId: z
    .string({ required_error: "Electrician ID is required" })
    .refine((id) => mongoose.isValidObjectId(id), {
      message: "Invalid Electrician ID format",
    }),
});

module.exports = ElectricianValidation;
