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
    <section className="bg-black py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="jpf-surface jpf-cta-glow rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#D63B47]">
                {siteConfig.brandName} COACHING
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.08] text-white">
                {headline}
              </h2>
              <p className="text-base sm:text-lg text-[#A7A9B0] max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5">
              <Link
                href="/about#contact"
                className="jpf-oxblood-btn inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                START YOUR JOURNEY
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={secondaryHref}
                className="jpf-glass-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
