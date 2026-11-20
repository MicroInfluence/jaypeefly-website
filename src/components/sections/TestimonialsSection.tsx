import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const confirmedTestimonials = testimonials.filter(
    (item) => item.permissionConfirmed
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-white/10 bg-[#08090B] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="CLIENT PERSPECTIVES"
            title="BUILT ON REAL ACCOUNTABILITY."
            description="Verified client reflections are published here solely with direct permission from the people Patrick coaches."
          />
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
          >
            Start Your Story
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {confirmedTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {confirmedTestimonials.map((item) => (
              <blockquote
                key={item.id}
                className="flex flex-col justify-between gap-6 border border-white/10 bg-[#111318] p-7"
              >
                <div className="flex flex-col gap-4">
                  <Quote
                    className="h-5 w-5 text-[#F2A0C0]"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <footer className="border-t border-white/10 pt-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    {item.clientName}
                  </p>
                  <p className="mt-1 text-xs text-[#A7A9B0]">
                    {item.coachingFormat} · {item.focusArea}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 border border-white/10 bg-[#111318] p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-[0.18em] text-[#F2A0C0]">
                <Quote className="h-4 w-4" aria-hidden="true" />
                Verified Testimonials Slot
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                Authentic Client Words Published Only With Explicit Consent
              </h3>
              <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                Rather than inventing placeholder quotes or attributing fake
                feedback, this section stays strictly honest until verified
                client testimonials are added in{" "}
                <code className="font-mono text-xs text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
                  src/content/testimonials.ts
                </code>
                .
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/coaching"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-[#F2A0C0]"
              >
                Review Coaching Formats
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
