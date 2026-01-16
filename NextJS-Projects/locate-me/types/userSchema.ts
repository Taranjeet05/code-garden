import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  imageUrl: z.string().url().optional(),
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must be at most 10 characters"),
  email: z.string().email("Must be a valid Email"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{7,15}$/, "Invalid phone number")
    .optional(),
  firstName: z
    .string()
    .min(3, "Full name must be 3 characters long")
    .max(20, "Full Name must less than 20 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 character long."),
  age: z
    .number()
    .min(1, "Age must be at least 1")
    .max(150, "Age must be less than 150 years Old"),
  gender: z.enum(["male", "female", "other"]),
  description: z
    .string()
    .max(500, "Description must not be more than 500 characters long")
    .optional(),
  address: z.object({
    street: z
      .string()
      .min(3, "Must not be less than 3 Characters long")
      .max(100, "Must not be more than 20 characters long"),
    state: z
      .string()
      .min(3, "Must be at least 3 Character long")
      .max(50, "Must not more than 20 characters long"),
    country: z
      .string()
      .min(3, "Must be more than 3 characters long")
      .max(50, "Must be less than 20 characters long"),
    pin: z
      .string()
      .length(6, "PIN code must be exactly 6 digits")
      .regex(/^\d+$/, "PIN must contain only numbers"),
  }),
});

// Form Input type without(id, which is auto generated).
export const userFormSchema = userSchema.omit({ id: true });
export type UserFormData = z.infer<typeof userFormSchema>;

// type derived from zod schema
export type User = z.infer<typeof userSchema>;
