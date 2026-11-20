export type TransformationCategory =
  | "Fat Loss"
  | "Body Transformation"
  | "Lifestyle Changes"
  | "Fitness Progress";

export const transformationFilters: readonly (
  | "All"
  | TransformationCategory
)[] = [
  "All",
  "Fat Loss",
  "Body Transformation",
  "Lifestyle Changes",
  "Fitness Progress",
];

export interface TransformationItem {
  id: string;
  clientLabel: string; // e.g., Verified client name or initials with consent
  category: TransformationCategory;
  coachingFormat: "Online Coaching" | "In-Person Coaching";
  headline: string;
  story: string;
  keyFocus: string[];
  beforeImage?: {
    src: string;
    alt: string;
  };
  afterImage?: {
    src: string;
    alt: string;
  };
  clientQuote?: string;
  permissionConfirmed: boolean;
}

/**
 * Authentic Client Transformations.
 * NON-NEGOTIABLE RULE: Keep empty until Patrick supplies real, client-approved
 * before-and-after photography and verified transformation stories.
 *
 * Example entry when real materials are ready:
 * {
 *   id: "client-example",
 *   clientLabel: "Client Initials / Verified Name",
 *   category: "Fat Loss",
 *   coachingFormat: "Online Coaching",
 *   headline: "Consistent training & sustainable daily structure",
 *   story: "Real client story supplied with explicit permission.",
 *   keyFocus: ["Fat Loss", "Daily Routine", "Accountability"],
 *   beforeImage: { src: "/images/transformations/client-before.jpg", alt: "Client before coaching" },
 *   afterImage: { src: "/images/transformations/client-after.jpg", alt: "Client after coaching" },
 *   clientQuote: "Verified quote from the client.",
 *   permissionConfirmed: true,
 * }
 */
export const transformations: TransformationItem[] = [];
