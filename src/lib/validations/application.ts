import { z } from "zod";

export const coachingFormatOptions = [
  "Online",
  "In-Person",
  "Not Sure",
] as const;

export const coachingApplicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(120, "Full name must be under 120 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number.")
    .max(35, "Phone or WhatsApp number is too long.")
    .regex(
      /^[+\d\s().-]+$/,
      "Phone number can only include digits, spaces, +, (), hyphens, and periods."
    ),
  location: z
    .string()
    .trim()
    .min(2, "Please share your city and country.")
    .max(140, "Location must be under 140 characters."),
  preferredFormat: z.enum(coachingFormatOptions, {
    errorMap: () => ({
      message: "Please select your preferred coaching format.",
    }),
  }),
  primaryGoal: z
    .string()
    .trim()
    .min(8, "Please describe your primary fitness goal (at least 8 characters).")
    .max(600, "Primary fitness goal must be under 600 characters."),
  currentChallenges: z
    .string()
    .trim()
    .min(8, "Please share your current challenges (at least 8 characters).")
    .max(1000, "Current challenges must be under 1000 characters."),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message:
        "Please confirm consent so Patrick Jeremy (JAYPEEFLY) can review your coaching application and contact you.",
    }),
  }),
  website: z.string().max(0).optional().default(""),
});

export type CoachingApplicationInput = z.input<
  typeof coachingApplicationSchema
>;
export type CoachingApplicationData = z.output<
  typeof coachingApplicationSchema
>;
