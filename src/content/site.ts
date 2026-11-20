export type SocialPlatformId = "instagram" | "tiktok" | "youtube" | "snapchat";

export interface SocialProfile {
  id: SocialPlatformId;
  platform: string;
  handle: string;
  url: string;
  role: string;
  description: string;
  contentFocus: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Central Brand & Site Configuration for JAYPEEFLY.
 * Update social URLs, WhatsApp number, or SEO defaults here without touching UI components.
 */
export const siteConfig = {
  brandName: "JAYPEEFLY",
  founderName: "Patrick Jeremy",
  positioning: "Fitness & Lifestyle Modification Expert",
  corePillars: ["Fat Loss", "Mindset", "Habits", "Accountability"] as const,
  supportingMessage: "Helping You Transform And Stay Accountable.",
  closingThesis:
    "Fitness is the starting point. Lifestyle transformation is the bigger goal.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jaypeefly.com",
  defaultTitle:
    "JAYPEEFLY | Patrick Jeremy — Fitness & Lifestyle Modification Expert",
  defaultDescription:
    "Personal fitness coaching, sustainable fat loss, mindset development, habit building, and accountability with Patrick Jeremy (JAYPEEFLY). Online and in-person coaching for lasting lifestyle transformation.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Coaching", href: "/coaching" },
    { label: "Transformations", href: "/transformations" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  primaryCta: {
    label: "START YOUR JOURNEY",
    href: "/contact",
  },
  identities: [
    {
      index: "01",
      title: "Fitness Coach",
      summary:
        "Structured training, strength development, sustainable fat loss, and measurable physical transformation built around your real schedule.",
      focus: [
        "Training & Strength Progression",
        "Sustainable Fat Loss",
        "Physical Transformation",
        "Fitness Development",
      ],
    },
    {
      index: "02",
      title: "Lifestyle Mentor",
      summary:
        "Clarity of mindset, daily discipline, self-confidence, repeatable habits, and personal accountability that outlast any short-term programme.",
      focus: [
        "Mindset & Discipline",
        "Confidence Building",
        "Healthy Daily Habits",
        "Long-Term Personal Development",
      ],
    },
  ],
  socialProfiles: [
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@jerixih",
      url: "https://www.instagram.com/jerixih",
      role: "Brand Personality & Lifestyle",
      description:
        "Daily lifestyle routines, brand perspective, transformation highlights, and direct community connection.",
      contentFocus: [
        "Lifestyle & Routine Standards",
        "Transformation Highlights",
        "Community Accountability",
      ],
    },
    {
      id: "tiktok",
      platform: "TikTok",
      handle: "@jaypee_superfly",
      url: "https://www.tiktok.com/@jaypee_superfly",
      role: "Short-Form Workouts & Tips",
      description:
        "Fast, actionable fitness videos, home and gym training clips, and straightforward habit insights.",
      contentFocus: [
        "Short-Form Training Clips",
        "Practical Exercise Tips",
        "Daily Discipline Moments",
      ],
    },
    {
      id: "youtube",
      platform: "YouTube",
      handle: "@Jaypeefly",
      url: "https://www.youtube.com/@Jaypeefly",
      role: "Education, Workouts & Discussions",
      description:
        "Accessible home workouts, core and athletic conditioning, fat-loss education, and deeper lifestyle conversations.",
      contentFocus: [
        "Home & Athletic Workouts",
        "Fat-Loss Education",
        "Mindset & Motivation",
      ],
    },
    {
      id: "snapchat",
      platform: "Snapchat",
      handle: "@jerry_patrick19",
      url: "https://www.snapchat.com/@jerry_patrick19",
      role: "Daily Updates & Behind-the-Scenes",
      description:
        "Day-to-day training moments, routine discipline check-ins, and direct behind-the-scenes glimpses.",
      contentFocus: [
        "Daily Check-Ins",
        "Behind-the-Scenes Training",
        "Lifestyle Accountability",
      ],
    },
  ] satisfies SocialProfile[],
  whatsapp: {
    // Configurable via NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local;
    // defaults to Patrick Jeremy's confirmed WhatsApp coaching line.
    number: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2349151208241").replace(
      /\D/g,
      ""
    ),
    displayNumber: "+234 915 120 8241",
    prefilledMessage:
      "Hello Jaypeefly, I'm interested in your fitness and lifestyle coaching. I'd like to learn more about your programmes.",
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string | null {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  if (!digits) {
    return null;
  }
  const text = encodeURIComponent(
    customMessage || siteConfig.whatsapp.prefilledMessage
  );
  return `https://wa.me/${digits}?text=${text}`;
}
