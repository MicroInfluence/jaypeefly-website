import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { editorialMedia } from "@/content/media";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { WhatsAppEnquiryCard } from "@/components/contact/WhatsAppEnquiryCard";
import { CoachingApplicationForm } from "@/components/contact/CoachingApplicationForm";

export const metadata: Metadata = {
  title: "About, Resources & Contact | Patrick Jeremy (JAYPEEFLY)",
  description:
    "Meet Patrick Jeremy (JAYPEEFLY), NASM Certified Trainer and Registered Gym Coach at iFitness Abuja. Access fitness resources on his official socials, message on WhatsApp, or apply for coaching.",
};

interface AboutPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const params = await searchParams;
  const rawFormat = params.format;
  const initialFormat = Array.isArray(rawFormat) ? rawFormat[0] : rawFormat;

  return (
    <>
      {/* 1. BIO & PERSONAL INTRODUCTION */}
      <section className="jpf-hero-glow bg-black -mt-[5.25rem] sm:-mt-[6rem] pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
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

              <div className="border-t border-white/10 pt-7 flex flex-col gap-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
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

              {/* Dual Identities: uniform dark surfaces */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.identities.map((identity) => (
                  <div
                    key={identity.index}
                    className="jpf-surface rounded-2xl p-5 flex flex-col gap-2"
                  >
                    <span className="font-mono text-xs font-semibold text-[#D63B47]">
                      {identity.index}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {identity.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                      {identity.summary}
                    </p>
                  </div>
                ))}
              </div>

              {/* Confirmed Credentials & Gym Experience */}
              <div className="jpf-surface rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
                    Credentials & Gym Experience
                  </p>
                  <span className="font-mono text-[11px] text-white/85">
                    {aboutContent.certification} · Registered Gym Coach
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aboutContent.gymExperience.map((gym, idx) => (
                    <div
                      key={gym.name}
                      className="rounded-xl border border-white/10 bg-black px-4 py-3.5 flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-heading text-base font-semibold text-white">
                          {gym.name}
                        </p>
                        <p className="text-xs text-[#A7A9B0] mt-0.5">
                          {gym.note}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#D63B47]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="border-t border-white/10 pt-3 text-xs sm:text-sm text-[#A7A9B0]">
                  <span className="text-white font-medium">Primary Base:</span>{" "}
                  {aboutContent.coachingBase}
                </p>
              </div>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#contact"
                  className="jpf-oxblood-btn inline-flex items-center gap-2 rounded-full px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Contact & Apply Now
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/coaching"
                  className="jpf-glass-btn inline-flex items-center gap-2 rounded-full px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  Coaching & Results
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT & RESOURCES VIA SOCIAL MEDIA */}
      <section
        id="resources"
        className="jpf-glow-left border-t border-white/10 bg-black py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <SectionHeading
            eyebrow="CONTENT & RESOURCES"
            title="FOR MORE CONTENT & RESOURCES, FOLLOW PATRICK ON SOCIAL MEDIA."
            description="Looking for workout videos, fat-loss education, daily habit tips, or behind-the-scenes gym updates from Patrick Jeremy (JAYPEEFLY)? All content and free resources are published directly on his official channels below."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.socialProfiles.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="jpf-surface group rounded-2xl flex flex-col justify-between gap-6 p-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-[#D63B47]">
                      <SocialIcon platform={profile.id} className="h-4 w-4" />
                      {profile.platform}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#A7A9B0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D63B47]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/60">
                      {profile.handle}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white group-hover:text-[#D63B47] transition-colors">
                      {profile.role}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3.5 flex items-center gap-1.5 font-heading text-xs uppercase tracking-[0.14em] text-white">
                  <Play className="h-3 w-3 text-[#D63B47]" aria-hidden="true" />
                  Visit {profile.platform}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT & COACHING APPLICATION */}
      <section
        id="contact"
        className="jpf-glow-right border-t border-white/10 bg-black py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <SectionHeading
            eyebrow="CONTACT & START YOUR JOURNEY"
            title="GET IN TOUCH WITH PATRICK JEREMY."
            description="Message directly on WhatsApp, connect on social media, or apply for Online or In-Person coaching below."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <WhatsAppEnquiryCard />

              <div className="jpf-surface rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
                    Direct Social Links
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white">
                    Message or Follow Official Profiles
                  </h3>
                </div>

                <div className="flex flex-col divide-y divide-white/10">
                  {siteConfig.socialProfiles.map((profile) => (
                    <a
                      key={profile.id}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <SocialIcon
                          platform={profile.id}
                          className="h-4 w-4 text-[#D63B47]"
                        />
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-[#D63B47] transition-colors">
                            {profile.platform}
                          </p>
                          <p className="font-mono text-xs text-[#A7A9B0]">
                            {profile.handle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 text-[#A7A9B0] group-hover:text-[#D63B47]"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CoachingApplicationForm
                key={initialFormat ?? "default"}
                initialFormat={initialFormat}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
