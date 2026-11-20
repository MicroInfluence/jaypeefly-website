import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";

interface FinalCtaSectionProps {
  headline?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function FinalCtaSection({
  headline = "YOUR TRANSFORMATION STARTS WITH A DECISION.",
  description = siteConfig.closingThesis,
  secondaryHref = "/coaching",
  secondaryLabel = "Explore Coaching",
}: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#111318] py-14 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-[#F2A0C0]/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-7 bg-[#F2A0C0]" aria-hidden="true" />
              <span className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-[#F2A0C0]">
                {siteConfig.brandName} COACHING
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-white">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-[#A7A9B0] max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F2A0C0] px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors duration-300 hover:bg-white"
            >
              START YOUR JOURNEY
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 border border-white/15 px-7 py-4 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
