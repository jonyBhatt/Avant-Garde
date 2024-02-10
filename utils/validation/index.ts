import { z } from "zod";

/**
 * * User onboard schema
 */

export const userOnboardSchema = z.object({
  firstName: z.string().min(1, { message: "First name required" }),
  lastName: z.string().min(1, { message: "Last name required" }),
  email: z.string().email({ message: "Invalid email" }),
  institution: z.string().optional(),
  major: z.string().min(1, { message: "Major subject required" }),
  career: z
    .string()
    .min(5, { message: "Your career goal is required" })
    .max(5000),
  time: z.string(),
  s_time: z.string().optional(),
  c_technical: z
    .string()
    .min(1, { message: "Your current technical skills required!" }),
  s_technical: z.string().optional(),
});
