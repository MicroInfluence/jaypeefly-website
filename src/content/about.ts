export interface GymExperienceItem {
  name: string;
  note: string;
}

export const aboutContent = {
  eyebrow: "ABOUT JAYPEEFLY",
  heroHeadline: "PATRICK JEREMY",
  heroSubheadline: "NASM Certified Trainer · Fitness & Lifestyle Modification Expert",
  certification: "NASM Certified Trainer",
  personalIntroduction: {
    title: "Built Around Sustainable Change, Not Temporary Extremes.",
    paragraphs: [
      "JAYPEEFLY is the personal coaching brand of Patrick Jeremy, a NASM Certified Trainer built for people ready to move past quick-fix programmes and short-lived results.",
      "Fitness is the starting point, while lifestyle transformation is the goal: combining structured training, mindset discipline, daily habits, and real accountability.",
    ],
  },
  coachingBase:
    "iFitness Abuja, Registered Gym Coach (In-Person) & Worldwide (Online)",
  gymExperience: [
    {
      name: "iFitness Abuja",
      note: "Current: Registered Gym Coach (In-Person Physical Classes)",
    },
    {
      name: "Caesar Gym",
      note: "Previous gym coaching experience",
    },
  ] as GymExperienceItem[],
};
