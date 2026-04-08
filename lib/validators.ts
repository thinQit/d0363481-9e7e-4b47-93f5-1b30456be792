import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must be 100 characters or fewer."),
  email: z.string().email("Please provide a valid email address."),
  phone: z
    .string()
    .min(7, "Phone number is too short.")
    .max(30, "Phone number is too long."),
  service: z
    .string()
    .min(2, "Service is required.")
    .max(120, "Service must be 120 characters or fewer."),
  preferredDate: z
    .string()
    .min(1, "Preferred date is required.")
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Preferred date must be a valid date string.",
    }),
  preferredTime: z
    .string()
    .min(2, "Preferred time is required.")
    .max(50, "Preferred time must be 50 characters or fewer."),
  notes: z
    .string()
    .max(2000, "Notes must be 2000 characters or fewer.")
    .optional()
    .or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
