import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { coachingContent } from "@/content/coaching";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TransformationGallery } from "@/components/sections/TransformationGallery";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: "Coaching & Transformations | Online & In-Person",
  description:
    "Online Coaching worldwide, In-Person physical classes at iFitness Abuja, and real client transformations with Patrick Jeremy (JAYPEEFLY).",
};

export default function CoachingPage() {
  return (
    <>
      {/* 1. HEADER */}
      <section className="jpf-hero-glow bg-black -mt-[5.25rem] sm:-mt-[6rem] pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow={coachingContent.eyebrow}
            title={coachingContent.headline}
            description={coachingContent.subheadline}
          />
        </div>
      </section>

      {/* 2. PROGRAMME PRESENTATIONS (ONLINE & IN-PERSON) */}
      <section className="bg-black pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
          {coachingContent.programmes.map((programme, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={programme.id}
                id={programme.id}
                className="jpf-surface rounded-3xl p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <EditorialPhoto
                      slot={programme.media}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  <div
                    className={`lg:col-span-7 flex flex-col gap-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
                        Programme 0{idx + 1} · {programme.formatLabel}
                      </span>
                      <span className="rounded-full border border-white/15 bg-black px-3.5 py-1 font-mono text-xs text-[#A7A9B0]">
                        Enquire for Pricing
                      </span>
                    </div>

                    <div>
                      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                        {programme.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                        {programme.tagline}
                      </p>
                    </div>

                    <p className="text-base text-[#A7A9B0] leading-relaxed">
                      {programme.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {programme.focusAreas.map((area) => (
                        <div
                          key={area.title}
                          className="rounded-xl border border-white/10 bg-black p-4 flex flex-col gap-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 text-[#D63B47]"
                              aria-hidden="true"
                            />
                            <h3 className="font-heading text-sm font-semibold text-white">
                              {area.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                            {area.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-[#A7A9B0] max-w-md">
                        {programme.idealFor}
                      </p>
                      <Link
                        href={programme.enquiryHref}
                        className="jpf-oxblood-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                      >
                        {programme.ctaLabel}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. HOW COACHING WORKS */}
      <section className="border-t border-white/10 bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            eyebrow="THE PROCESS"
            title="FROM ENQUIRY TO DAILY ACCOUNTABILITY."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coachingContent.processSteps.map((item) => (
              <div
                key={item.step}
                className="jpf-surface rounded-2xl p-6 flex flex-col gap-3.5"
              >
                <span className="font-heading text-2xl font-bold text-[#D63B47]">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A7A9B0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATIONS & CLIENT RESULTS */}
      <section
        id="transformations"
        className="border-t border-white/10 bg-black py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            eyebrow="TRANSFORMATIONS"
            title="RESULTS & CLIENT PROGRESS."
            description="Authentic, client-approved stories across fat loss, body transformation, and lifestyle habits."
          />

          <TransformationGallery />
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <FinalCtaSection
        headline="READY TO START YOUR COACHING JOURNEY?"
        description="Apply directly or reach Patrick on WhatsApp to find the best format for your schedule and goals."
        secondaryHref="/about"
        secondaryLabel="About Patrick"
      />
    </>
  );
}
