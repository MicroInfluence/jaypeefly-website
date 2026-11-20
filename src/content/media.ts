export type PhotographyCategory =
  | "Professional Portrait"
  | "Workout & Training"
  | "Lifestyle Photograph"
  | "Coaching Photograph"
  | "Transformation Photograph"
  | "Behind-the-Scenes";

export interface EditorialMediaSlot {
  id: string;
  src: string;
  alt: string;
  category: PhotographyCategory;
  aspectRatio: "4/5" | "3/4" | "4/3" | "16/10" | "16/9" | "1/1";
  caption: string;
  guidance: string;
  objectPosition?: string;
  /**
   * Set to `true` only after placing Patrick's real photograph at `public${src}`.
   * Never set `true` with stock or AI-generated portraits.
   */
  isUploaded: boolean;
}

/**
 * Central Photography Configuration.
 * Replace each file under `public/images/patrick/` with Patrick Jeremy's real photography,
 * then switch `isUploaded` to `true` for that slot.
 */
export const editorialMedia = {
  heroPortrait: {
    id: "hero-portrait",
    src: "/images/patrick/patrick-hero-portrait.jpg",
    alt: "Patrick Jeremy (JAYPEEFLY) — Fitness and Lifestyle Modification Expert editorial portrait",
    category: "Professional Portrait",
    aspectRatio: "4/5",
    caption: "Patrick Jeremy — JAYPEEFLY",
    guidance:
      "High-contrast editorial portrait of Patrick in composed athletic or smart-minimal attire against a dark studio or architectural backdrop.",
    isUploaded: false,
  },
  brandLifestyle: {
    id: "brand-lifestyle",
    src: "/images/patrick/patrick-lifestyle-editorial.jpg",
    alt: "Patrick Jeremy outside the gym embodying sustainable lifestyle discipline",
    category: "Lifestyle Photograph",
    aspectRatio: "16/10",
    caption: "Discipline carried beyond the gym floor",
    guidance:
      "Candid lifestyle photograph showing Patrick in an everyday environment — morning routine, walking, meal prep, or reflective focus.",
    isUploaded: false,
  },
  aboutPortrait: {
    id: "about-portrait",
    src: "/images/patrick/patrick-about-portrait.jpg",
    alt: "Patrick Jeremy (JAYPEEFLY) standing in front of the i-Fitness banner",
    category: "Professional Portrait",
    aspectRatio: "3/4",
    caption: "Patrick Jeremy at iFitness Abuja",
    guidance:
      "Direct, calm, authoritative portrait of Patrick looking toward the camera with strong directional lighting.",
    objectPosition: "center top",
    isUploaded: true,
  },
  trainingAction: {
    id: "training-action",
    src: "/images/patrick/patrick-workout-training.jpg",
    alt: "Patrick Jeremy executing focused strength and conditioning training",
    category: "Workout & Training",
    aspectRatio: "4/3",
    caption: "Intentional training & physical standards",
    guidance:
      "Authentic training photograph capturing form, focus, and effort during a strength, conditioning, or athletic workout.",
    isUploaded: false,
  },
  onlineCoaching: {
    id: "online-coaching",
    src: "/images/patrick/patrick-online-coaching.jpg",
    alt: "Patrick Jeremy reviewing client progress and programming for online coaching",
    category: "Coaching Photograph",
    aspectRatio: "16/10",
    caption: "Structured remote guidance & check-in review",
    guidance:
      "Coaching photograph showing Patrick reviewing client plans, filming movement cues, or conducting a remote check-in.",
    isUploaded: false,
  },
  inPersonCoaching: {
    id: "in-person-coaching",
    src: "/images/patrick/patrick-in-person-coaching.jpg",
    alt: "Patrick Jeremy coaching a client hands-on during an in-person training session",
    category: "Coaching Photograph",
    aspectRatio: "16/10",
    caption: "Hands-on 1-on-1 execution & accountability",
    guidance:
      "Authentic coaching session photograph showing Patrick guiding technique, posture, and pacing in person (with client consent).",
    isUploaded: false,
  },
  behindTheScenes: {
    id: "behind-the-scenes",
    src: "/images/patrick/patrick-behind-the-scenes.jpg",
    alt: "Behind-the-scenes view of Patrick Jeremy filming educational fitness content",
    category: "Behind-the-Scenes",
    aspectRatio: "4/3",
    caption: "Filming home workouts & lifestyle education",
    guidance:
      "Behind-the-scenes photograph from YouTube or TikTok filming sessions or daily preparation.",
    isUploaded: false,
  },
} satisfies Record<string, EditorialMediaSlot>;
