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
  username: z.string().optional(),
});

/**
 * * User 1:1 live session post
 */

export const liveHelpSchema = z.object({
  helpType: z.enum(["1:1 help", "long-term"]),
  title: z.string().min(1, { message: "This is required" }).max(1000),
  description: z.string().min(1).max(5000),
  sessionLength: z.string(),
  budget: z.string(),
});

/**
 * * job schema
 */

export const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  type: z.enum(["FULL_TIME", "PART_TIME", "REMOTE", "CONTRACT"]),
  location: z.string(),
  vacancies: z.string(),
  experience: z.string(),
  description: z.string(),
  position: z.string(),
  salary: z.string(),
});

/**
 * * company schema
 */

export const companySchema = z.object({
  name: z.string().min(1, { message: "Company name required!" }),
  email: z.string().email({ message: "Invalid email!" }),
  company_logo: z.string().optional(),
  about: z.string(),
  location: z.string(),
  company_url: z.string().url({ message: "Please provide your website url!" }),
});

/**
 * * apply job schema
 */

export const applyJobSchema = z.object({
  cv: z.string(),
  letter: z.string().min(1, { message: "Cover letter required" }),
});

export type applyJobSchemaType = z.infer<typeof applyJobSchema>;
