export interface PhilosophySection {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  principles: string[];
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  sourceNote: string;
  /**
   * Non-negotiable rule: Only publish credentials after Patrick confirms them.
   * Keep `confirmed: false` until verified directly by Patrick.
   */
  confirmed: boolean;
}

export interface EditableBioField {
  label: string;
  value: string | null;
  placeholderNote: string;
}

export interface GymExperienceItem {
  name: string;
  note: string;
}

/**
 * Editable configuration for Page 2 (/about).
 * No biographical dates, career timelines, or unconfirmed credentials are invented here.
 */
export const aboutContent = {
  eyebrow: "ABOUT JAYPEEFLY",
  heroHeadline: "PATRICK JEREMY",
  heroSubheadline: "Fitness & Lifestyle Modification Expert",
  personalIntroduction: {
    title: "Built Around Sustainable Change, Not Temporary Extremes.",
    paragraphs: [
      "JAYPEEFLY is the personal coaching brand of Patrick Jeremy—created for people who are ready to move past quick-fix programmes, inconsistent bursts of motivation, and short-lived physical results.",
      "The philosophy is grounded in a straightforward truth: fitness is the starting point, but lifestyle transformation is the bigger goal. Physical training reshapes your body; mindset, daily habits, and structured accountability determine whether those changes stay with you.",
      "Whether your focus is losing body fat, building strength, establishing consistent home or gym routines, or developing the personal discipline to follow through on your commitments, the objective remains the same: practical standards you can sustain in real life.",
    ],
  },
  /**
   * Confirmed gyms where Patrick Jeremy works / has worked.
   * Keep dates or extra branch details unlisted unless explicitly confirmed.
   */
  gymExperience: [
    {
      name: "iFitness Abuja",
      note: "Current — Registered Gym Coach (In-Person Physical Classes)",
    },
    {
      name: "Caesar Gym",
      note: "Previous gym coaching experience",
    },
  ] as GymExperienceItem[],
  /**
   * Fill in these optional personal background fields once Patrick supplies his exact wording.
   * Empty (`null`) fields remain hidden on the live site rather than showing invented history.
   */
  editableProfileDetails: [
    {
      label: "Personal Story & Background",
      value: null,
      placeholderNote:
        "Add Patrick's verified personal story and coaching journey in src/content/about.ts once provided.",
    },
    {
      label: "Primary Coaching Base",
      value:
        "iFitness Abuja — Registered Gym Coach for physical classes (plus Online Coaching remotely)",
      placeholderNote:
        "Confirmed coaching base for in-person physical classes.",
    },
  ] as EditableBioField[],
  credentials: [
    {
      id: "nasm-cpt",
      title: "NASM-Certified Trainer",
      issuer: "National Academy of Sports Medicine (Profile Reference)",
      sourceNote:
        "Referenced on Instagram (@jerixih). Keep confirmed: false until Patrick explicitly confirms publication on the website.",
      confirmed: false,
    },
  ] satisfies CredentialItem[],
  philosophies: [
    {
      id: "fitness-philosophy",
      number: "01",
      eyebrow: "FITNESS PHILOSOPHY",
      title: "Training That Serves Your Whole Life",
      lead: "Movement should build capability, confidence, and structure—not burn you out in three weeks.",
      paragraphs: [
        "Effective training does not require endless hours or unsustainable extremes. Across both structured gym sessions and accessible home workouts, the priority is consistent execution, progressive challenge, and movement quality.",
        "Training becomes the daily anchor where you practice showing up on schedule, even when energy or convenience fluctuates.",
      ],
      principles: [
        "Consistency over intensity spikes",
        "Accessible progressions for home or gym environments",
        "Strength and conditioning built for longevity",
      ],
    },
    {
      id: "fat-loss-approach",
      number: "02",
      eyebrow: "APPROACH TO FAT LOSS",
      title: "Fat Loss Without Crash Cycles",
      lead: "Real fat loss happens when nutrition habits, daily movement, and patience work together.",
      paragraphs: [
        "Restrictive diets and punishing routines create rebound cycles. Sustainable fat loss respects your lifestyle, energy needs, and recovery so you lose fat while learning how to keep it off.",
        "Instead of chasing overnight changes, focus shifts to repeatable food choices, consistent activity, and honest tracking.",
      ],
      principles: [
        "Clear, realistic adjustments you can maintain",
        "Zero reliance on extreme crash protocols",
        "Long-term body composition over short-term scale obsession",
      ],
    },
    {
      id: "mindset-discipline",
      number: "03",
      eyebrow: "MINDSET & DISCIPLINE",
      title: "Discipline Outlasts Motivation",
      lead: "Motivation starts the process; structured standards keep you moving when motivation fades.",
      paragraphs: [
        "Most people do not fail because they lack information—they struggle when life gets busy and old patterns return. Building a stronger mindset means simplifying decisions and keeping small promises to yourself daily.",
        "Confidence grows directly out of kept commitments.",
      ],
      principles: [
        "Action rooted in standards, not mood",
        "Calm resilience after missed days instead of quitting",
        "Self-respect built through daily follow-through",
      ],
    },
    {
      id: "habits-lifestyle",
      number: "04",
      eyebrow: "HEALTHY HABITS & LIFESTYLE MODIFICATION",
      title: "Architecture For Everyday Living",
      lead: "Your environment and daily routines quietly decide your outcomes.",
      paragraphs: [
        "Lifestyle modification means auditing sleep, movement, nutrition rhythm, stress triggers, and daily planning so healthy choices become your default path rather than a constant battle of willpower.",
      ],
      principles: [
        "Keystone routines designed for work and family schedules",
        "Friction reduction around training and nutrition",
        "Sustainable habits that fit every age, background, and starting point",
      ],
    },
    {
      id: "accountability-philosophy",
      number: "05",
      eyebrow: "ACCOUNTABILITY & COACHING PHILOSOPHY",
      title: "Supported, Measured, And Honest",
      lead: "You do not have to figure everything out alone—or let yourself quietly drift off track.",
      paragraphs: [
        "Accountability provides clear checkpoints, objective perspective, and a coaching relationship where progress is reviewed honestly and obstacles are solved in real time.",
        "Every person—regardless of gender, age, or current fitness level—receives clear expectations and steady guidance without judgement.",
      ],
      principles: [
        "Structured check-ins and clear feedback loops",
        "Honest reflection without perfectionism",
        "Shared commitment to meaningful, lasting change",
      ],
    },
  ] as PhilosophySection[],
};
