import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppEnquiryCard } from "@/components/contact/WhatsAppEnquiryCard";
import { CoachingApplicationForm } from "@/components/contact/CoachingApplicationForm";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Start Your Journey — Apply for Coaching",
  description:
    "Start your fitness and lifestyle transformation with Patrick Jeremy (JAYPEEFLY). Apply for Online or In-Person Coaching or enquire via WhatsApp.",
};

interface ContactPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const rawFormat = params.format;
  const initialFormat = Array.isArray(rawFormat) ? rawFormat[0] : rawFormat;

  return (
    <section className="bg-[#08090B] pt-14 pb-24 sm:pt-20 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <SectionHeading
          as="h1"
          eyebrow="START YOUR JOURNEY"
          title="APPLY FOR COACHING WITH PATRICK JEREMY."
          description="Fitness is the starting point. Lifestyle transformation is the bigger goal. Complete the coaching application or reach out directly via WhatsApp."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: WhatsApp + Official Socials + What Happens Next */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <WhatsAppEnquiryCard />

            {/* Official Social Links */}
            <div className="border border-white/10 bg-[#111318] p-6 sm:p-8 flex flex-col gap-5">
              <div>
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                  Official Platforms
                </p>
                <h2 className="mt-2 font-heading text-xl font-semibold text-white">
                  Connect on Social Media
                </h2>
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
                        className="h-4 w-4 text-[#F2A0C0]"
                      />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-[#F2A0C0] transition-colors">
                          {profile.platform}
                        </p>
                        <p className="font-mono text-xs text-[#A7A9B0]">
                          {profile.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#A7A9B0] group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Expectations Box */}
            <div className="border border-white/10 bg-[#17191F] p-6 flex flex-col gap-3">
              <p className="font-heading text-xs uppercase tracking-[0.18em] text-white">
                Before You Submit
              </p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                <li>
                  · All experience levels, ages, and backgrounds are welcome.
                </li>
                <li>
                  · Pricing and session details are confirmed clearly during
                  consultation.
                </li>
                <li>
                  · Your personal details stay strictly confidential.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Full Coaching Application Form */}
          <div className="lg:col-span-7">
            <CoachingApplicationForm
              key={initialFormat ?? "default"}
              initialFormat={initialFormat}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
