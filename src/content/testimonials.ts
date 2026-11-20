export interface TestimonialItem {
  id: string;
  clientName: string;
  coachingFormat: "Online Coaching" | "In-Person Coaching" | "Coaching Client";
  focusArea: string;
  quote: string;
  permissionConfirmed: boolean;
}

/**
 * Verified Client Testimonials.
 * NON-NEGOTIABLE RULE: Do not invent quotes or attribute fabricated words to real people.
 * Add entries here once Patrick supplies verified client feedback with permission.
 *
 * Example entry:
 * {
 *   id: "testimonial-01",
 *   clientName: "Client Name or Initials",
 *   coachingFormat: "Online Coaching",
 *   focusArea: "Fat Loss & Accountability",
 *   quote: "Exact testimonial text approved by the client.",
 *   permissionConfirmed: true,
 * }
 */
export const testimonials: TestimonialItem[] = [];
