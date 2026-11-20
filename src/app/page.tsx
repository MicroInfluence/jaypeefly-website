import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Play } from "lucide-react";
import { siteConfig } from "@/content/site";
import { aboutContent } from "@/content/about";
import { editorialMedia } from "@/content/media";
import { coachingContent } from "@/content/coaching";
import { transformations } from "@/content/transformations";
import { youtubeVideos } from "@/content/resources";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/ui/FinalCtaSection";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
};

export default function HomePage() {
  const verifiedTransformations = transformations.filter(
    (item) => item.permissionConfirmed
  );

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#08090B] pt-8 pb-14 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/3 h-96 w-96 rounded-full bg-[#F2A0C0]/[0.04] blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* Hero Copy Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-7">
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#F2A0C0]" aria-hidden="true" />
                <p className="font-heading text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#F2A0C0]">
                  {siteConfig.founderName} · {siteConfig.positioning}
                </p>
              </div>

              <h1 className="font-heading text-[2.15rem] sm:text-6xl lg:text-[4.25rem] font-bold uppercase tracking-[-0.03em] leading-[1.0] text-white">
                TRANSFORM YOUR BODY.
                <br />
                <span className="text-white/85">REBUILD YOUR MINDSET.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#A7A9B0] leading-relaxed max-w-xl">
                Fat loss is only the beginning. Build better habits, develop
                discipline and create a lifestyle you can sustain.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F2A0C0] px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors duration-300 hover:bg-white"
                >
                  Start Your Journey
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/coaching"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-[#111318] px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white"
                >
                  Explore Coaching
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Core Brand Pillars Strip */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 pt-6 gap-4">
                {siteConfig.corePillars.map((pillar, index) => (
                  <div key={pillar} className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] text-[#F2A0C0]">
                      0{index + 1}
                    </span>
                    <span className="font-heading text-sm font-medium uppercase tracking-[0.1em] text-white">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Portrait Column */}
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
      <section className="border-t border-white/10 bg-[#111318] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-6 flex flex-col gap-8">
              <SectionHeading
                eyebrow="THE JAYPEEFLY APPROACH"
                title="MORE THAN FITNESS. A LIFESTYLE TRANSFORMATION."
                description="Helping you transform and stay accountable—whether you are training for fat loss, strength, or a steadier daily rhythm."
              />

              <EditorialPhoto
                slot={editorialMedia.brandLifestyle}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-8 lg:pt-4">
              <p className="text-base sm:text-lg text-[#A7A9B0] leading-relaxed">
                Physical workouts alone do not sustain lasting change. True
                transformation happens when structured fitness meets clear
                mindset standards, realistic everyday habits, and accountability
                that keeps you moving forward when life gets busy.
              </p>

              {/* Dual Connected Identities — Editorial Hairline Rows */}
              <div className="border-t border-white/10 divide-y divide-white/10">
                {siteConfig.identities.map((identity) => (
                  <div key={identity.index} className="py-7 flex flex-col gap-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-heading text-2xl font-semibold text-white">
                        {identity.title}
                      </h3>
                      <span className="font-mono text-xs text-[#F2A0C0]">
                        {identity.index}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                      {identity.summary}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {identity.focus.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs sm:text-sm text-white/85"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 bg-[#F2A0C0]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Gym Background */}
              {aboutContent.gymExperience.length > 0 ? (
                <div className="border border-white/10 bg-[#08090B] px-5 py-4 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-[#A7A9B0]">
                      Coaching & Gym Experience
                    </span>
                    <span className="text-[11px] text-[#F2A0C0]">
                      Registered Gym Coach · iFitness Abuja
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {aboutContent.gymExperience.map((gym) => (
                      <span
                        key={gym.name}
                        className="border border-white/15 bg-[#111318] px-3 py-1 font-heading text-xs font-medium tracking-wide text-white"
                      >
                        {gym.name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white border-b border-[#F2A0C0] pb-1.5 transition-colors hover:text-[#F2A0C0]"
                >
                  Read About Patrick Jeremy
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS — FOUR VISUALLY DISTINCT EDITORIAL SECTIONS */}
      <section
        aria-labelledby="four-pillars-heading"
        className="border-t border-white/10 bg-[#08090B] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          <SectionHeading
            eyebrow="THE FOUR PILLARS"
            title="FOUR STANDARDS BEHIND LASTING TRANSFORMATION."
            description="Built for everyone seeking meaningful change—regardless of starting fitness level, age, or background."
          />

          <div className="flex flex-col gap-10">
            {/* Pillar 01: Fat Loss — Asymmetric Wide Editorial Statement */}
            <article className="border-t border-white/15 pt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#F2A0C0]">
                  01
                </span>
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#A7A9B0]">
                  Pillar
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                  Fat Loss
                </h3>
                <p className="mt-3 text-base sm:text-lg text-[#A7A9B0] leading-relaxed">
                  Build a healthier body through sustainable lifestyle changes.
                </p>
              </div>
              <div className="lg:col-span-5 border-l border-white/10 pl-0 lg:pl-8 flex flex-col gap-3">
                <p className="text-sm text-[#A7A9B0] leading-relaxed">
                  Move away from crash dieting and short-term extremes. Combine
                  purposeful training with practical nutrition and daily
                  movement targets designed for long-term body composition.
                </p>
                <span className="font-heading text-[11px] uppercase tracking-[0.18em] text-white/70">
                  Sustainable Energy · Consistent Progression
                </span>
              </div>
            </article>

            {/* Pillar 02: Mindset — High-Contrast Charcoal Manifesto Block */}
            <article className="border border-white/10 bg-[#111318] p-7 sm:p-10 lg:p-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                  02 · Pillar
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                  Mindset
                </h3>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                  Develop the mentality required to stay consistent.
                </p>
              </div>
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-sm text-[#A7A9B0] leading-relaxed">
                  Discipline matters most when motivation is low. Learn to
                  replace all-or-nothing cycles with composed execution,
                  resilience after busy weeks, and stronger self-belief.
                </p>
              </div>
            </article>

            {/* Pillar 03: Habits — Numbered Architectural Step Bar */}
            <article className="border border-white/10 bg-[#17191F] p-7 sm:p-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                  03 · Pillar
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                  Habits
                </h3>
                <p className="text-base text-[#A7A9B0] leading-relaxed">
                  Create routines that support long-term progress.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "Daily Rhythm",
                    detail: "Training times & daily steps locked around real obligations.",
                  },
                  {
                    label: "Nutrition Ease",
                    detail: "Simple meal structure that reduces guesswork under pressure.",
                  },
                  {
                    label: "Recovery",
                    detail: "Sleep and stress habits that protect training consistency.",
                  },
                ].map((habit) => (
                  <div
                    key={habit.label}
                    className="border border-white/10 bg-[#08090B] p-4 flex flex-col gap-2"
                  >
                    <p className="font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {habit.label}
                    </p>
                    <p className="text-xs text-[#A7A9B0] leading-relaxed">
                      {habit.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* Pillar 04: Accountability — Focused Commitment Strip */}
            <article className="border-y border-white/15 py-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 flex flex-col gap-3">
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                  04 · Pillar
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
                  Accountability
                </h3>
                <p className="text-base sm:text-lg text-[#A7A9B0] leading-relaxed">
                  Stay focused, supported and responsible throughout the
                  journey.
                </p>
              </div>
              <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-white/10 bg-[#111318] p-6">
                <ul className="flex flex-col gap-2.5 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F2A0C0]" aria-hidden="true" />
                    Clear checkpoints & honest review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F2A0C0]" aria-hidden="true" />
                    Direct course-correction when obstacles arise
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 bg-white px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-[#F2A0C0]"
                >
                  Apply Now
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. COACHING PREVIEW */}
      <section className="border-t border-white/10 bg-[#111318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="COACHING FORMATS"
              title="TWO WAYS TO WORK WITH PATRICK."
              description="Whether you want remote structure anywhere in the world or direct hands-on training sessions, coaching starts with clear alignment."
            />
            <Link
              href="/coaching"
              className="inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
            >
              Compare Full Programmes
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {coachingContent.programmes.map((programme) => (
              <article
                key={programme.id}
                className="flex flex-col justify-between border border-white/10 bg-[#08090B] p-7 sm:p-9"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                      {programme.formatLabel}
                    </span>
                    <span className="border border-white/15 bg-[#111318] px-3 py-1 font-mono text-[11px] text-white">
                      {programme.pricing ?? "Enquire for Pricing"}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
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
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 bg-[#F2A0C0]"
                        />
                        {area.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/coaching#${programme.id}`}
                    className="text-xs font-heading uppercase tracking-[0.16em] text-[#A7A9B0] transition-colors hover:text-white"
                  >
                    Programme Details →
                  </Link>
                  <Link
                    href={programme.enquiryHref}
                    className="inline-flex items-center gap-2 bg-white px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-[#F2A0C0]"
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

      {/* 5. TRANSFORMATION PREVIEW */}
      <section className="border-t border-white/10 bg-[#08090B] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="TRANSFORMATIONS"
              title="REAL STORIES. REAL CONSISTENCY."
              description="Authentic client transformations and lifestyle milestones—never fabricated statistics or stock comparisons."
            />
            <Link
              href="/transformations"
              className="inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
            >
              View Transformation Gallery
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {verifiedTransformations.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {verifiedTransformations.slice(0, 2).map((item) => (
                <article
                  key={item.id}
                  className="border border-white/10 bg-[#111318] p-7 flex flex-col gap-4"
                >
                  <span className="font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
                    {item.category} · {item.coachingFormat}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-[#A7A9B0] leading-relaxed">
                    {item.story}
                  </p>
                  <Link
                    href="/transformations"
                    className="mt-auto pt-2 text-xs font-heading uppercase tracking-[0.16em] text-white hover:text-[#F2A0C0]"
                  >
                    Explore Full Story →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 border border-white/10 bg-[#111318] p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                  Client Proof Integrity
                </p>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
                  Reserved Exclusively for Client-Approved Transformations
                </h3>
                <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                  Real body and lifestyle transformations are added once
                  clients grant explicit permission. Visit the Transformations
                  page to preview supported categories—Fat Loss, Body
                  Transformation, Lifestyle Changes, and Fitness Progress—or
                  follow highlights directly on{" "}
                  <a
                    href="https://www.instagram.com/jerixih"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline decoration-[#F2A0C0] underline-offset-4 hover:text-[#F2A0C0]"
                  >
                    @jerixih
                  </a>
                  .
                </p>
              </div>
              <div className="lg:col-span-5">
                <EditorialPhoto
                  slot={editorialMedia.trainingAction}
                  compactPlaceholder
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. VIDEO & SOCIAL SHOWCASE */}
      <section className="border-t border-white/10 bg-[#111318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="VIDEO & SOCIAL CHANNELS"
              title="TRAIN & LEARN ACROSS EVERY PLATFORM."
              description="Home workouts, practical exercise coaching, fat-loss fundamentals, and daily lifestyle mindset across YouTube, TikTok, Instagram, and Snapchat."
            />
            <Link
              href="/resources"
              className="inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
            >
              Open Resources Hub
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Optional Embedded YouTube Preview if configured */}
          {youtubeVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {youtubeVideos.slice(0, 2).map((video) => (
                <div
                  key={video.id}
                  className="border border-white/10 bg-[#08090B] overflow-hidden"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeVideoId}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-heading text-xs uppercase tracking-[0.16em] text-[#F2A0C0]">
                      {video.category}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* Strategic Platform Showcase */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.socialProfiles.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-6 border border-white/10 bg-[#08090B] p-7 transition-all duration-300 hover:border-[#F2A0C0]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5 text-[#F2A0C0]">
                      <SocialIcon platform={profile.id} className="h-5 w-5" />
                      <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em]">
                        {profile.platform}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#A7A9B0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-white/60">
                      {profile.handle}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-white group-hover:text-[#F2A0C0] transition-colors">
                      {profile.role}
                    </h3>
                  </div>

                  <p className="text-sm text-[#A7A9B0] leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white">
                  <span className="inline-flex items-center gap-1.5 font-heading uppercase tracking-[0.16em]">
                    <Play className="h-3 w-3 text-[#F2A0C0]" aria-hidden="true" />
                    Open {profile.platform}
                  </span>
                  <span className="text-[#A7A9B0]">Official Profile</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 8. FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}
