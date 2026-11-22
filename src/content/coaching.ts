import { editorialMedia, type EditorialMediaSlot } from "./media";

export interface CoachingProgramme {
  id: "online" | "in-person";
  name: string;
  tagline: string;
  formatLabel: string;
  idealFor: string;
  description: string;
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
    "Two coaching formats built around fitness development, fat loss, daily habit architecture, and direct accountability.",
  programmes: [
    {
      id: "online",
      name: "Online Coaching",
      tagline: "Remote Coaching, Structure & Accountability",
      formatLabel: "Remote / Online Format",
      idealFor:
        "Individuals anywhere seeking structured training direction, fat-loss support, and remote accountability.",
      description:
        "Clear training and lifestyle structure you can follow from home or your local gym, supported by remote check-ins and consistent progress monitoring.",
      focusAreas: [
        {
          title: "Fitness Guidance",
          detail:
            "Structured training direction tailored to your equipment access and weekly schedule.",
        },
        {
          title: "Fat-Loss Support",
          detail:
            "Practical, sustainable strategies to improve body composition without extreme restriction.",
        },
        {
          title: "Habit Development",
          detail:
            "Daily movement and routine targets designed to stick through busy weeks.",
        },
        {
          title: "Remote Accountability",
          detail:
            "Consistent progress tracking and direct check-ins to resolve roadblocks early.",
        },
      ],
      enquiryHref: "/about?format=online#contact",
      ctaLabel: "Enquire About Online Coaching",
      media: editorialMedia.onlineCoaching,
    },
    {
      id: "in-person",
      name: "In-Person Coaching",
      tagline: "Hands-On Training at iFitness Abuja & Direct Accountability",
      formatLabel: "Physical / In-Person · iFitness Abuja",
      idealFor:
        "Clients in Abuja seeking face-to-face physical classes with a Registered Gym Coach at iFitness Abuja.",
      description:
        "Conducted in person at iFitness Abuja, where Patrick works as a Registered Gym Coach, combining live technique coaching, physical progression, and lifestyle accountability.",
      focusAreas: [
        {
          title: "Personal Training",
          detail:
            "Direct physical classes at iFitness Abuja focused on safe technique and purposeful effort.",
        },
        {
          title: "Strength & Conditioning",
          detail:
            "Coached strength, stamina, and movement development adapted to your starting point.",
        },
        {
          title: "Progress Monitoring",
          detail:
            "Live observation of form, posture, work capacity, and physical progression.",
        },
        {
          title: "Lifestyle Accountability",
          detail:
            "Guidance beyond the gym hour to reinforce discipline and daily consistency.",
        },
      ],
      enquiryHref: "/about?format=in-person#contact",
      ctaLabel: "Enquire About In-Person Coaching",
      media: editorialMedia.inPersonCoaching,
    },
  ] as CoachingProgramme[],
  processSteps: [
    {
      step: "01",
      title: "Submit Your Application",
      description:
        "Share your goal, current challenges, and preferred coaching format via the application form or WhatsApp.",
    },
    {
      step: "02",
      title: "Consultation & Alignment",
      description:
        "Patrick reviews your application and aligns on physical class scheduling at iFitness Abuja or remote coaching setup and pricing.",
    },
    {
      step: "03",
      title: "Establish Your Structure",
      description:
        "Start with clear training guidance, fat-loss fundamentals, and daily habit targets built around your schedule.",
    },
    {
      step: "04",
      title: "Track & Stay Accountable",
      description:
        "Review progress consistently and build the discipline that turns momentum into a lasting lifestyle.",
    },
  ],
};
