import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import { coachingContent } from "@/content/coaching";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: "Coaching Programmes — Online & In-Person",
  description:
    "Explore Online Coaching and In-Person Coaching with Patrick Jeremy (JAYPEEFLY). Structured fitness guidance, fat-loss support, habit development, and personal accountability.",
};

export default function CoachingPage() {
  return (
    <>
      {/* 1. HEADER */}
      <section className="bg-[#08090B] pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <SectionHeading
            as="h1"
            eyebrow={coachingContent.eyebrow}
            title={coachingContent.headline}
            description={coachingContent.subheadline}
          />
          <p className="border-l-2 border-[#F2A0C0] pl-4 text-sm text-[#A7A9B0] max-w-3xl leading-relaxed">
            {coachingContent.deliverablesDisclaimer}
          </p>
        </div>
      </section>

      {/* 2. PROGRAMME PRESENTATIONS (ONLINE & IN-PERSON) */}
      <section className="border-t border-white/10 bg-[#111318] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {coachingContent.programmes.map((programme, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={programme.id}
                id={programme.id}
                className="border border-white/10 bg-[#08090B] p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                  {/* Visual Column */}
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

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col gap-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                        Programme 0{idx + 1} · {programme.formatLabel}
                      </span>
                      <span className="border border-white/15 bg-[#111318] px-3 py-1 font-mono text-xs text-white">
                        {programme.pricing ?? "Enquire for Pricing"}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                        {programme.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                        {programme.tagline}
                      </p>
                    </div>

                    <p className="text-base text-[#A7A9B0] leading-relaxed">
                      {programme.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/10 py-5">
                      <div>
                        <p className="font-heading text-[11px] uppercase tracking-[0.16em] text-[#A7A9B0]">
                          Coaching Format
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {programme.formatLabel}
                        </p>
                      </div>
                      <div>
                        <p className="font-heading text-[11px] uppercase tracking-[0.16em] text-[#A7A9B0]">
                          Duration
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {programme.duration ?? "Confirmed during enquiry"}
                        </p>
                      </div>
                      <div>
                        <p className="font-heading text-[11px] uppercase tracking-[0.16em] text-[#A7A9B0]">
                          Investment
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#F2A0C0]">
                          {programme.pricing ?? "Enquire for Pricing"}
                        </p>
                      </div>
                    </div>

                    {/* Focus Areas */}
                    <div>
                      <p className="font-heading text-xs uppercase tracking-[0.18em] text-white mb-4">
                        Key Focus Areas
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {programme.focusAreas.map((area) => (
                          <div
                            key={area.title}
                            className="border border-white/10 bg-[#111318] p-4 flex flex-col gap-1.5"
                          >
                            <div className="flex items-center gap-2">
                              <CheckCircle2
                                className="h-4 w-4 shrink-0 text-[#F2A0C0]"
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
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-[#A7A9B0] max-w-md">
                        Ideal for: {programme.idealFor}
                      </p>
                      <Link
                        href={programme.enquiryHref}
                        className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#F2A0C0] px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors hover:bg-white"
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

      {/* 3. HOW THE COACHING PROCESS WORKS */}
      <section className="border-t border-white/10 bg-[#08090B] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            eyebrow="THE PROCESS"
            title="FROM ENQUIRY TO DAILY ACCOUNTABILITY."
            description="A transparent onboarding flow built so you always know what comes next."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coachingContent.processSteps.map((item) => (
              <div
                key={item.step}
                className="border border-white/10 bg-[#111318] p-6 flex flex-col gap-4"
              >
                <span className="font-heading text-2xl font-bold text-[#F2A0C0]">
                  {item.step}
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
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

      {/* 4. FAQ */}
      <section className="border-t border-white/10 bg-[#111318] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="CLARITY BEFORE YOU APPLY."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {coachingContent.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 bg-[#08090B] p-6 sm:p-7 flex flex-col gap-3"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A0C0]"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-sm text-[#A7A9B0] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <FinalCtaSection
        headline="STILL DECIDING BETWEEN ONLINE AND IN-PERSON?"
        description="Submit your coaching application and choose 'Not Sure'—Patrick will help determine the right format for your lifestyle and goals."
        secondaryHref="/transformations"
        secondaryLabel="View Transformations"
      />
    </>
  );
}
