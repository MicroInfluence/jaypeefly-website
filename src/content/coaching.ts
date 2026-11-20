import { editorialMedia, type EditorialMediaSlot } from "./media";

export interface CoachingProgramme {
  id: "online" | "in-person";
  name: string;
  tagline: string;
  formatLabel: string;
  idealFor: string;
  description: string;
  /**
   * Leave as `null` until Patrick confirms exact duration.
   */
  duration: string | null;
  /**
   * Leave as `null` until Patrick confirms exact pricing.
   * UI displays "Enquire for Pricing" whenever null.
   */
  pricing: string | null;
  focusAreas: {
    title: string;
    detail: string;
  }[];
  enquiryHref: string;
  ctaLabel: string;
  media: EditorialMediaSlot;
}

export const coachingContent = {
  eyebrow: "COACHING PROGRAMMES",
  headline: "STRUCTURED COACHING BUILT FOR REAL LIFE.",
  subheadline:
    "Two coaching formats designed around fitness development, fat loss, daily habit architecture, and consistent accountability—confirmed around your goals during consultation.",
  deliverablesDisclaimer:
    "Exact coaching deliverables, session schedules, duration, and investment are confirmed directly with Patrick Jeremy following your enquiry so your plan matches your goals and commitments without guesswork.",
  programmes: [
    {
      id: "online",
      name: "Online Coaching",
      tagline: "Remote Coaching, Structure & Accountability",
      formatLabel: "Remote / Online Format",
      idealFor:
        "Individuals anywhere seeking structured fitness direction, sustainable fat-loss support, habit building, and ongoing accountability.",
      description:
        "Designed for people who want clear training and lifestyle structure they can execute from home or their local gym, supported by remote coaching communication and consistent progress monitoring.",
      duration: null,
      pricing: null,
      focusAreas: [
        {
          title: "Fitness Guidance",
          detail:
            "Structured training direction tailored to your equipment access, current level, and weekly schedule.",
        },
        {
          title: "Fat-Loss Support",
          detail:
            "Practical, sustainable strategies to improve body composition without extreme restriction.",
        },
        {
          title: "Habit Development",
          detail:
            "Step-by-step lifestyle adjustments covering daily movement, routines, and consistency.",
        },
        {
          title: "Accountability",
          detail:
            "Regular accountability checkpoints to keep focus high when life gets demanding.",
        },
        {
          title: "Progress Monitoring",
          detail:
            "Ongoing tracking and adjustment based on real feedback and measurable consistency.",
        },
        {
          title: "Remote Coaching Communication",
          detail:
            "Clear communication channels arranged upon onboarding to review progress and resolve roadblocks.",
        },
      ],
      enquiryHref: "/contact?format=online",
      ctaLabel: "Enquire About Online Coaching",
      media: editorialMedia.onlineCoaching,
    },
    {
      id: "in-person",
      name: "In-Person Coaching",
      tagline: "Hands-On Training at iFitness Abuja & Direct Accountability",
      formatLabel: "Physical / In-Person · iFitness Abuja",
      idealFor:
        "Clients in Abuja seeking direct, face-to-face physical classes with a Registered Gym Coach at iFitness Abuja for exercise execution, progression, and accountability.",
      description:
        "Conducted in person at iFitness Abuja, where Patrick works as a Registered Gym Coach leading physical classes—combining hands-on coaching guidance, real-time feedback, progress monitoring, and holistic lifestyle support.",
      duration: null,
      pricing: null,
      focusAreas: [
        {
          title: "Personal Training",
          detail:
            "Direct in-person physical classes at iFitness Abuja focused on safe technique, proper pacing, and purposeful effort.",
        },
        {
          title: "Fitness Guidance",
          detail:
            "Coached strength, conditioning, and movement development adapted to your starting point.",
        },
        {
          title: "Physical Progress Monitoring",
          detail:
            "Consistent observation of strength, stamina, posture, and overall physical progression.",
        },
        {
          title: "Accountability",
          detail:
            "Committed session structure and direct follow-through that remove guesswork and hesitation.",
        },
        {
          title: "Lifestyle Support",
          detail:
            "Guidance extending beyond the training hour to reinforce discipline, mindset, and daily habits.",
        },
      ],
      enquiryHref: "/contact?format=in-person",
      ctaLabel: "Enquire About In-Person Coaching",
      media: editorialMedia.inPersonCoaching,
    },
  ] as CoachingProgramme[],
  processSteps: [
    {
      step: "01",
      title: "Submit Your Application",
      description:
        "Share your primary goal, current experience, daily challenges, and preferred coaching format via the application form or WhatsApp.",
    },
    {
      step: "02",
      title: "Consultation & Alignment",
      description:
        "Patrick reviews your application and discusses availability, physical class scheduling at iFitness Abuja (for in-person) or remote setup (for online), programme scope, and pricing.",
    },
    {
      step: "03",
      title: "Establish Your Structure",
      description:
        "Begin with clear fitness guidance, fat-loss fundamentals, and practical daily habit targets suited to your reality.",
    },
    {
      step: "04",
      title: "Monitor & Stay Accountable",
      description:
        "Review progress consistently, refine what is needed, and build the discipline that turns early momentum into a permanent lifestyle.",
    },
  ],
  faqs: [
    {
      question: "Do I need prior gym experience before applying?",
      answer:
        "No. JAYPEEFLY welcomes beginners as well as experienced individuals—regardless of gender, age, or starting fitness level. Training and habit progression start from where you are today.",
    },
    {
      question: "Why does the website say 'Enquire for Pricing'?",
      answer:
        "Coaching details and investment depend on your chosen format, support needs, and schedule. Patrick confirms exact pricing and availability transparently during your enquiry before any commitment is made.",
    },
    {
      question: "What if I am unsure between Online and In-Person Coaching?",
      answer:
        "Select 'Not Sure' on the coaching application form. Based on your location, goals, and schedule, Patrick will advise which format fits best.",
    },
    {
      question: "Are results guaranteed in a fixed number of weeks?",
      answer:
        "Honest coaching never promises unrealistic overnight shortcuts. Outcomes depend on consistent training, nutrition habits, and follow-through—and Patrick is there to keep you structured and accountable throughout.",
    },
  ],
} as const;
