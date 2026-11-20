import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TransformationGallery } from "@/components/sections/TransformationGallery";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: "Transformations — Fat Loss, Mindset & Lifestyle Stories",
  description:
    "Explore authentic JAYPEEFLY client transformations across Fat Loss, Body Transformation, Lifestyle Changes, and Fitness Progress.",
};

export default function TransformationsPage() {
  return (
    <>
      <section className="bg-[#08090B] pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="CLIENT TRANSFORMATIONS"
            title="SUSTAINABLE PROGRESS, DOCUMENTED HONESTLY."
            description="Filter client journeys across fat loss, body transformation, lifestyle changes, and fitness progress. Only authentic, client-approved stories and photographs appear here."
          />

          <TransformationGallery />
        </div>
      </section>

      <TestimonialsSection />

      <FinalCtaSection
        headline="YOUR OWN STORY STARTS WITH ONE COMMITMENT."
        description="Apply for coaching with Patrick Jeremy and build habits, discipline, and physical strength that last."
      />
    </>
  );
}
