import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { editorialMedia } from "@/content/media";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Patrick Jeremy (JAYPEEFLY)",
  description:
    "Meet Patrick Jeremy, Fitness & Lifestyle Modification Expert behind JAYPEEFLY. Explore the philosophy uniting fat loss, mindset, healthy habits, and personal accountability.",
};

export default function AboutPage() {
  const confirmedCredentials = aboutContent.credentials.filter(
    (c) => c.confirmed
  );
  const populatedBioFields = aboutContent.editableProfileDetails.filter(
    (f) => f.value && f.value.trim().length > 0
  );

  return (
    <>
      {/* 1. ABOUT HERO & PERSONAL INTRODUCTION */}
      <section className="bg-[#08090B] pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <EditorialPhoto
                slot={editorialMedia.aboutPortrait}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-7">
              <SectionHeading
                as="h1"
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.heroHeadline}
                description={aboutContent.heroSubheadline}
              />

              <div className="border-t border-white/10 pt-7 flex flex-col gap-5">
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white leading-snug">
                  {aboutContent.personalIntroduction.title}
                </h2>
                {aboutContent.personalIntroduction.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base text-[#A7A9B0] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Dual Identities Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {siteConfig.identities.map((identity) => (
                  <div
                    key={identity.index}
                    className="border border-white/10 bg-[#111318] p-5 flex flex-col gap-2"
                  >
                    <span className="font-mono text-xs text-[#F2A0C0]">
                      {identity.index}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {identity.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                      {identity.summary}
                    </p>
                  </div>
                ))}
              </div>

              {/* Confirmed Gym Experience */}
              {aboutContent.gymExperience.length > 0 ? (
                <div className="border border-white/10 bg-[#111318] p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
                      Gym Background & Experience
                    </p>
                    <span className="font-mono text-[11px] text-[#A7A9B0]">
                      Registered Gym Coach
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {aboutContent.gymExperience.map((gym, idx) => (
                      <div
                        key={gym.name}
                        className="border border-white/10 bg-[#08090B] px-4 py-3.5 flex items-center justify-between gap-3"
                      >
                        <div>
                          <p className="font-heading text-base font-semibold text-white">
                            {gym.name}
                          </p>
                          <p className="text-xs text-[#A7A9B0] mt-0.5">
                            {gym.note}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-[#F2A0C0]">
                          0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Confirmed Credentials & Editable Biography Details */}
              {confirmedCredentials.length > 0 || populatedBioFields.length > 0 ? (
                <div className="border border-white/10 bg-[#111318] p-6 flex flex-col gap-5">
                  {confirmedCredentials.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      <p className="font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
                        Verified Credentials
                      </p>
                      <ul className="flex flex-col gap-2">
                        {confirmedCredentials.map((cred) => (
                          <li
                            key={cred.id}
                            className="flex items-center gap-2.5 text-sm text-white"
                          >
                            <ShieldCheck
                              className="h-4 w-4 text-[#F2A0C0]"
                              aria-hidden="true"
                            />
                            <span>
                              {cred.title} — {cred.issuer}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {populatedBioFields.map((field) => (
                    <div key={field.label} className="flex flex-col gap-1">
                      <p className="font-heading text-xs uppercase tracking-[0.16em] text-[#F2A0C0]">
                        {field.label}
                      </p>
                      <p className="text-sm text-[#A7A9B0] leading-relaxed">
                        {field.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-white/15 bg-[#111318] p-5 flex flex-col gap-2">
                  <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#F2A0C0]">
                    Editable Biography & Credential Verification
                  </p>
                  <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                    Personal career timeline, background milestones, and public
                    credential badges (such as NASM-Certified Trainer noted on{" "}
                    <a
                      href="https://www.instagram.com/jerixih"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-[#F2A0C0] underline-offset-4"
                    >
                      @jerixih
                    </a>
                    ) are cleanly isolated in{" "}
                    <code className="font-mono text-xs text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
                      src/content/about.ts
                    </code>{" "}
                    so only verified details confirmed by Patrick are displayed
                    publicly.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/coaching"
                  className="inline-flex items-center gap-2 bg-[#F2A0C0] px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors hover:bg-white"
                >
                  Explore Coaching Programmes
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIVE CORE PHILOSOPHY CHAPTERS */}
      <section className="border-t border-white/10 bg-[#111318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          <SectionHeading
            eyebrow="PRINCIPLES & METHODOLOGY"
            title="THE FIVE PILLARS OF PATRICK'S COACHING."
            description="Every coaching relationship balances physical execution with sustainable daily habits and personal responsibility."
          />

          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {aboutContent.philosophies.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="py-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <span className="font-mono text-xs text-[#F2A0C0]">
                    {section.number} · {section.eyebrow}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed">
                    {section.lead}
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  {section.paragraphs.map((text) => (
                    <p
                      key={text}
                      className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>

                <div className="lg:col-span-3 border border-white/10 bg-[#08090B] p-5">
                  <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#A7A9B0] mb-3">
                    Core Focus
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {section.principles.map((principle) => (
                      <li
                        key={principle}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F2A0C0]"
                        />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Training & Behind-the-Scenes Visual Slots */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <EditorialPhoto
              slot={editorialMedia.trainingAction}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <EditorialPhoto
              slot={editorialMedia.behindTheScenes}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <FinalCtaSection
        headline="READY TO BUILD A LIFESTYLE YOU CAN SUSTAIN?"
        description="Explore Online or In-Person Coaching with Patrick Jeremy, or submit your coaching application today."
        secondaryHref="/coaching"
        secondaryLabel="View Coaching Formats"
      />
    </>
  );
}
