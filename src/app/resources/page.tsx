import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResourceHub } from "@/components/sections/ResourceHub";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: "Resources — Fitness Education, Fat Loss, Mindset & Videos",
  description:
    "Educational fitness guides, sustainable fat-loss frameworks, mindset and habit architecture, plus YouTube and short-form video resources from JAYPEEFLY.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#08090B] pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="EDUCATIONAL HUB"
            title="RESOURCES FOR TRAINING, FAT LOSS & DISCIPLINE."
            description="Practical fitness education, mindset principles, habit guides, and direct video hubs from Patrick Jeremy across YouTube, TikTok, and Instagram."
          />

          <ResourceHub />
        </div>
      </section>

      <FinalCtaSection
        headline="NEED ACCOUNTABILITY TO APPLY WHAT YOU LEARN?"
        description="Information is available everywhere; consistent execution changes lives. Explore coaching with Patrick Jeremy."
      />
    </>
  );
}
