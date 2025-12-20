import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(10, "Name should be at least 3 characters long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(10, "Name should at least 3 characters long."),
  email: z.string().email("Email is required"),
  age: z
    .number()
    .min(18, "You must be 18 years old.")
    .max(99, "you must not be older than 99 years."),

  gender: z.enum(["Male", "Female", "Others"], {
    message: "Gender is required",
  }),
  address: z.object({
    city: z
      .string()
      .min(3, "At least 3 characters long")
      .max(20, "city should not be more than 10 characters long"),

    state: z
      .string()
      .min(1, "state is required")
      .max(10, "state should not more than 10 characters long"),
  }),

  hobbies: z
    .array(
      z.object({
        name: z
          .string()
          .min(1, "name is required")
          .max(10, "Not more than 10 characters are allowed"),
      })
    )
    .min(1, "At least one hobby should be added")
    .max(10, "Should not exceed more than 10 hobbies"),
  startDate: z.date(),
  subscribe: z.boolean(),
  referral: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;
