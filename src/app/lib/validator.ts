import * as z from "zod";

// this form can also work for buyer form (what size and price they are paying for)
// TODO:
// 1) Add 1 or 2 images to schema.
// 2) Size should be dropdown (we can use replace category)
// 2.1) Display size guide

// 3) price should be number
// price should be number

// BUYER-FORM: +order_size + order_price + added to cart?

export const wardrobeFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  size: z.string().min(3, "Size must be at least 3 characters"),
  price: z.string().min(3, "Price must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  image: z.string(),
  category: z.enum([
    "Head",
    "Coat",
    "Sweater",
    "Shirt",
    "Trousers",
    "Socks",
    "Shoes",
  ]),
});
