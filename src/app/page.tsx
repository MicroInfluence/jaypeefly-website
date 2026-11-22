import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { editorialMedia } from "@/content/media";
import { coachingContent } from "@/content/coaching";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative jpf-hero-glow bg-black -mt-[5.25rem] sm:-mt-[6rem] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-7">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#D63B47]">
                {siteConfig.founderName} · {siteConfig.positioning}
              </p>

              <h1 className="font-editorial text-[2rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.015em] leading-[1.12] text-white">
                <span className="italic text-[#D63B47]">Transform</span> Your Body.
                <br />
                Rebuild Your <span className="italic">Mindset.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A7A9B0] leading-relaxed max-w-xl">
                Fat loss is only the beginning. Build better habits, develop
                discipline and create a lifestyle you can sustain.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/about#contact"
                  className="jpf-oxblood-btn inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Start Your Journey
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/coaching"
                  className="jpf-glass-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Explore Coaching
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {siteConfig.corePillars.map((pillar, index) => (
                  <div key={pillar} className="flex flex-col gap-1">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#D63B47]">
                      0{index + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white/90">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialPhoto
                slot={editorialMedia.heroPortrait}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="bg-black py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-6 flex flex-col gap-8">
              <SectionHeading
                eyebrow="THE JAYPEEFLY APPROACH"
                title="MORE THAN FITNESS. A LIFESTYLE TRANSFORMATION."
                description="Structured training paired with mindset discipline, everyday habits, and real accountability."
              />

              <EditorialPhoto
                slot={editorialMedia.brandLifestyle}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-5 lg:pt-4">
              {siteConfig.identities.map((identity) => (
                <div
                  key={identity.index}
                  className="jpf-surface rounded-2xl p-6 sm:p-7 flex flex-col gap-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {identity.title}
                    </h3>
                    <span className="font-mono text-xs font-semibold text-[#D63B47]">
                      {identity.index}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                    {identity.summary}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {identity.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs sm:text-sm text-white/90"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-[#D63B47]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white border-b-2 border-[#9B1C26] pb-1.5 transition-colors hover:text-[#D63B47]"
                >
                  About Patrick, Resources & Contact
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COACHING PREVIEW */}
      <section className="bg-black py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="COACHING FORMATS"
              title="TWO WAYS TO WORK WITH PATRICK."
            />
            <Link
              href="/coaching"
              className="jpf-glass-btn inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Coaching & Transformations
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {coachingContent.programmes.map((programme) => (
              <article
                key={programme.id}
                className="jpf-surface rounded-2xl flex flex-col justify-between p-7 sm:p-9"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
                      {programme.formatLabel}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black px-3.5 py-1 font-mono text-[11px] text-[#A7A9B0]">
                      Enquire for Pricing
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      {programme.name}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                      {programme.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {programme.focusAreas.map((area) => (
                      <li
                        key={area.title}
                        className="flex items-center gap-2.5 text-sm text-white/90"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-[#D63B47]"
                          aria-hidden="true"
                        />
                        {area.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/coaching#${programme.id}`}
                    className="text-xs font-heading uppercase tracking-[0.14em] text-[#A7A9B0] transition-colors hover:text-white"
                  >
                    Programme Details →
                  </Link>
                  <Link
                    href={programme.enquiryHref}
                    className="jpf-oxblood-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                  >
                    {programme.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMATION PREVIEW */}
      <section className="bg-black py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="jpf-surface rounded-2xl p-7 sm:p-10 lg:p-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="TRANSFORMATIONS"
              title="REAL STORIES. REAL CONSISTENCY."
              description="Authentic client results across fat loss, body transformation, and lifestyle habits."
            />
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/coaching#transformations"
                className="jpf-oxblood-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                View Results on Coaching
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href="https://www.instagram.com/jerixih"
                target="_blank"
                rel="noopener noreferrer"
                className="jpf-glass-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                Highlights @jerixih
                <ArrowUpRight className="h-3.5 w-3.5 text-[#D63B47]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}
