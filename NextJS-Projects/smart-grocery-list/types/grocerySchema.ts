// id
// name
// quantity
// category: dairy, fruits, vegetable, other

import { z } from "zod";

export const groceryItemSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Name is Required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  category: z.enum(["fruit", "vegetable", "dairy", "other"]),
});

export const groceryFormSchema = groceryItemSchema.omit({ id: true });
export type GroceryItem = z.infer<typeof groceryItemSchema>;
export type GroceryFormData = z.infer<typeof groceryFormSchema>;
