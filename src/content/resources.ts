export type ResourceCategory =
  | "YouTube Videos"
  | "Fitness Education"
  | "Fat Loss"
  | "Mindset"
  | "Habits"
  | "Lifestyle"
  | "Short-Form";

export const resourceFilters: readonly ("All" | ResourceCategory)[] = [
  "All",
  "YouTube Videos",
  "Fitness Education",
  "Fat Loss",
  "Mindset",
  "Habits",
  "Lifestyle",
  "Short-Form",
];

export interface YouTubeVideoResource {
  id: string;
  youtubeVideoId: string; // e.g., "dQw4w9WgXcQ" from youtube.com/watch?v=... or youtube.com/shorts/...
  title: string;
  description: string;
  category: Exclude<ResourceCategory, "Short-Form">;
  format: "Long-Form" | "YouTube Short";
}

export interface EducationalArticle {
  id: string;
  category: Exclude<ResourceCategory, "YouTube Videos" | "Short-Form">;
  title: string;
  summary: string;
  keyTakeaways: string[];
  readingTime: string;
}

/**
 * Configurable YouTube Video Catalogue.
 * Keep empty until Patrick supplies specific YouTube video IDs and exact titles
 * to embed from https://www.youtube.com/@Jaypeefly.
 *
 * Example entry:
 * {
 *   id: "yt-01",
 *   youtubeVideoId: "YOUR_VIDEO_ID",
 *   title: "Exact Video Title from @Jaypeefly",
 *   description: "Brief summary of what viewers learn in this video.",
 *   category: "Fitness Education",
 *   format: "YouTube Short",
 * }
 */
export const youtubeVideos: YouTubeVideoResource[] = [];

/**
 * Editorial Coaching Guides aligned with Patrick's core themes
 * (Fat Loss, Mindset, Habits, Lifestyle Modification, and Accessible Home/Gym Training).
 * Easily add, update, or remove guides here without changing layout components.
 */
export const educationalGuides: EducationalArticle[] = [
  {
    id: "sustainable-fat-loss-foundations",
    category: "Fat Loss",
    title: "Why Sustainable Fat Loss Starts With Structure, Not Starvation",
    summary:
      "Crash dieting creates short-term drops followed by rebound frustration. Learn how pairing practical nutrition awareness with daily movement creates fat loss you can actually keep.",
    keyTakeaways: [
      "Prioritise repeatable meal habits over short-lived extreme restrictions.",
      "Track weekly consistency and energy levels rather than reacting to single-day scale fluctuations.",
      "Combine structured training with realistic daily step and activity targets.",
    ],
    readingTime: "4 min guide",
  },
  {
    id: "home-and-gym-training-consistency",
    category: "Fitness Education",
    title: "Building Real Strength Across Home Workouts & Gym Sessions",
    summary:
      "Whether training at home with bodyweight and minimal gear or in a full gym, consistent effort and clean technique outperform complicated routines you cannot stick to.",
    keyTakeaways: [
      "Master foundational movement patterns—push, pull, hinge, squat, and core control.",
      "Schedule workouts like non-negotiable appointments rather than waiting for spare time.",
      "Increase challenge gradually through reps, tempo, control, and recovery.",
    ],
    readingTime: "4 min guide",
  },
  {
    id: "discipline-beyond-motivation",
    category: "Mindset",
    title: "The Mindset Shift: Replacing Temporary Motivation With Daily Standards",
    summary:
      "Motivation is unpredictable. Lasting body and lifestyle transformation comes from deciding who you want to become and acting on clear standards even on low-energy days.",
    keyTakeaways: [
      "Never turn one missed session or off-plan meal into a missed week.",
      "Lower the barrier to starting—commit to showing up and doing the minimum effective work.",
      "Build self-trust through small promises kept consistently.",
    ],
    readingTime: "3 min guide",
  },
  {
    id: "habit-architecture-for-busy-schedules",
    category: "Habits",
    title: "Habit Architecture: Designing Routines That Outlast Willpower",
    summary:
      "Your daily environment shapes your results. Structuring mornings, nutrition prep, sleep cues, and training triggers removes constant decision fatigue.",
    keyTakeaways: [
      "Anchor a new fitness habit directly after an existing daily routine.",
      "Prepare training clothes, water, and meals ahead of peak stress hours.",
      "Track adherence honestly every week so blind spots become visible early.",
    ],
    readingTime: "4 min guide",
  },
  {
    id: "lifestyle-modification-bigger-goal",
    category: "Lifestyle",
    title: "Fitness Is the Starting Point: Why Lifestyle Modification Is the Bigger Goal",
    summary:
      "Training changes how you look and feel in the gym; lifestyle modification transforms how you carry yourself at work, with family, and in everyday discipline.",
    keyTakeaways: [
      "Protect sleep and recovery as core pillars of fat loss and mental clarity.",
      "Align social life, travel, and busy seasons with flexible guardrails instead of all-or-nothing thinking.",
      "Use coaching accountability to turn short-term goals into permanent identity habits.",
    ],
    readingTime: "5 min guide",
  },
];

export const shortFormChannels = [
  {
    id: "tiktok-shorts",
    platform: "TikTok",
    handle: "@jaypee_superfly",
    url: "https://www.tiktok.com/@jaypee_superfly",
    title: "Short-Form Workouts, Tips & Daily Discipline",
    description:
      "Watch practical workout clips, form cues, and straightforward mindset reminders built to fit into your day.",
    tags: ["Short-Form", "Workouts", "Training Tips"],
  },
  {
    id: "youtube-shorts-channel",
    platform: "YouTube",
    handle: "@Jaypeefly",
    url: "https://www.youtube.com/@Jaypeefly",
    title: "Home Workouts, Core Conditioning & Fitness Motivation",
    description:
      "Explore Patrick's YouTube channel for home workouts, abs and athletic training sessions, fat-loss insights, and motivational Shorts.",
    tags: ["Home Workouts", "Weight Loss", "Motivation"],
  },
  {
    id: "instagram-reels-lifestyle",
    platform: "Instagram",
    handle: "@jerixih",
    url: "https://www.instagram.com/jerixih",
    title: "Lifestyle Discipline, Brand Updates & Community",
    description:
      "Follow Patrick on Instagram for behind-the-scenes consistency, lifestyle perspective, and direct community engagement.",
    tags: ["Lifestyle", "Mindset", "Community"],
  },
  {
    id: "snapchat-daily-updates",
    platform: "Snapchat",
    handle: "@jerry_patrick19",
    url: "https://www.snapchat.com/@jerry_patrick19",
    title: "Real-Time Daily Check-Ins & Behind-the-Scenes",
    description:
      "Follow Patrick on Snapchat for candid daily training updates, routine standards, and everyday discipline.",
    tags: ["Daily Routine", "Behind-the-Scenes", "Accountability"],
  },
] as const;
