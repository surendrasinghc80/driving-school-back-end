import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().int().positive(),
  phoneNumber: z.number().min(10),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const courseSchema = z.object({
  name: z.string(),
  duration: z.object(),
  fees: z.number().min(4),
  description: z.string(),
});
