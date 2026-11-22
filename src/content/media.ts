export type PhotographyCategory =
  | "Professional Portrait"
  | "Lifestyle Photograph"
  | "Coaching Photograph";

export interface EditorialMediaSlot {
  id: string;
  src: string;
  alt: string;
  category: PhotographyCategory;
  aspectRatio: "4/5" | "3/4" | "4/3" | "16/10" | "16/9" | "1/1";
  caption: string;
  objectPosition?: string;
  isUploaded: boolean;
}

/**
 * Central Photography Configuration.
 * Temporary dark-editorial stock photos are stored in `public/images/stock/`.
 * Replace with Patrick Jeremy's real photographs under `public/images/patrick/` when ready.
 */
export const editorialMedia = {
  heroPortrait: {
    id: "hero-portrait",
    src: "/images/stock/hero-portrait.jpg",
    alt: "Patrick Jeremy (JAYPEEFLY), Fitness and Lifestyle Modification Expert",
    category: "Professional Portrait",
    aspectRatio: "4/5",
    caption: "Patrick Jeremy · JAYPEEFLY",
    objectPosition: "center top",
    isUploaded: true,
  },
  brandLifestyle: {
    id: "brand-lifestyle",
    src: "/images/stock/brand-lifestyle.jpg",
    alt: "Structured daily discipline and training preparation",
    category: "Lifestyle Photograph",
    aspectRatio: "16/10",
    caption: "Discipline carried beyond the gym floor",
    isUploaded: true,
  },
  aboutPortrait: {
    id: "about-portrait",
    src: "/images/patrick/patrick-about-portrait.jpg",
    alt: "Patrick Jeremy (JAYPEEFLY) standing in front of the i-Fitness banner",
    category: "Professional Portrait",
    aspectRatio: "3/4",
    caption: "Patrick Jeremy at iFitness Abuja",
    objectPosition: "center top",
    isUploaded: true,
  },
  onlineCoaching: {
    id: "online-coaching",
    src: "/images/stock/online-coaching.jpg",
    alt: "Remote training programming and progress tracking for online coaching",
    category: "Coaching Photograph",
    aspectRatio: "16/10",
    caption: "Remote guidance & structured accountability",
    isUploaded: true,
  },
  inPersonCoaching: {
    id: "in-person-coaching",
    src: "/images/stock/in-person-coaching.jpg",
    alt: "Hands-on in-person personal training session",
    category: "Coaching Photograph",
    aspectRatio: "16/10",
    caption: "Hands-on coaching at iFitness Abuja",
    isUploaded: true,
  },
} satisfies Record<string, EditorialMediaSlot>;
