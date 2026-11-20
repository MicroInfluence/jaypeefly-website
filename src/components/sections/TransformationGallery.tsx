"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import {
  transformationFilters,
  transformations,
  type TransformationCategory,
} from "@/content/transformations";

export function TransformationGallery() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | TransformationCategory
  >("All");

  const verifiedItems = transformations.filter(
    (item) => item.permissionConfirmed
  );

  const filteredItems =
    activeFilter === "All"
      ? verifiedItems
      : verifiedItems.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Strip */}
      <div
        role="tablist"
        aria-label="Filter transformations by category"
        className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-visible items-center gap-2 border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-6"
      >
        {transformationFilters.map((filter) => {
          const isSelected = activeFilter === filter;
          const count =
            filter === "All"
              ? verifiedItems.length
              : verifiedItems.filter((item) => item.category === filter).length;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 inline-flex items-center gap-2 border px-4 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 ${
                isSelected
                  ? "border-[#F2A0C0] bg-[#F2A0C0] text-[#08090B]"
                  : "border-white/10 bg-[#111318] text-[#A7A9B0] hover:border-white/30 hover:text-white"
              }`}
            >
              <span>{filter}</span>
              <span
                className={`font-mono text-[10px] ${
                  isSelected ? "text-[#08090B]/70" : "text-white/40"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results or Authentic Empty State */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                {/* Before / After Comparison Column */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-[#A7A9B0]">
                      Before
                    </span>
                    <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 bg-[#17191F]">
                      {item.beforeImage ? (
                        <Image
                          src={item.beforeImage.src}
                          alt={item.beforeImage.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 25vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-4 text-center text-xs text-[#A7A9B0]">
                          Starting photo pending
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-[#F2A0C0]">
                      After
                    </span>
                    <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 bg-[#17191F]">
                      {item.afterImage ? (
                        <Image
                          src={item.afterImage.src}
                          alt={item.afterImage.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 25vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-4 text-center text-xs text-[#A7A9B0]">
                          Progress photo pending
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Story Column */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border border-[#F2A0C0]/40 bg-[#F2A0C0]/10 px-3 py-1 font-heading text-[11px] uppercase tracking-[0.18em] text-[#F2A0C0]">
                      {item.category}
                    </span>
                    <span className="border border-white/10 bg-[#17191F] px-3 py-1 text-xs text-[#A7A9B0]">
                      {item.coachingFormat}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#A7A9B0]">
                      {item.clientLabel}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-semibold text-white">
                      {item.headline}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                    {item.story}
                  </p>

                  {item.keyFocus.length > 0 ? (
                    <ul className="flex flex-wrap gap-2">
                      {item.keyFocus.map((focus) => (
                        <li
                          key={focus}
                          className="inline-flex items-center gap-1.5 border border-white/10 bg-[#17191F] px-3 py-1.5 text-xs text-white"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[#F2A0C0]"
                            aria-hidden="true"
                          />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.clientQuote ? (
                    <blockquote className="border-l-2 border-[#F2A0C0] pl-4 text-sm italic text-white/90 leading-relaxed">
                      &ldquo;{item.clientQuote}&rdquo;
                    </blockquote>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-white/10 bg-[#111318] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex w-fit items-center gap-2 border border-white/15 bg-[#17191F] px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.2em] text-[#F2A0C0]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Authentic Results Policy
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white leading-tight">
                {activeFilter === "All"
                  ? "Client Transformation Gallery Ready for Verified Stories"
                  : `No Verified "${activeFilter}" Stories Published Yet`}
              </h2>

              <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                JAYPEEFLY publishes strictly authentic client before-and-after
                photographs, progress milestones, and personal stories shared
                with explicit client permission. No fabricated metrics, stock
                fitness transformations, or invented testimonials are displayed
                here.
              </p>

              <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
                To add verified client transformations, update{" "}
                <code className="font-mono text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
                  src/content/transformations.ts
                </code>{" "}
                with real client images and stories. You can also explore
                ongoing highlights on Patrick&apos;s official{" "}
                <a
                  href="https://www.instagram.com/jerixih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-[#F2A0C0] underline-offset-4 hover:text-[#F2A0C0]"
                >
                  Instagram (@jerixih)
                </a>
                .
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F2A0C0] px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-white"
                >
                  Start Your Transformation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {activeFilter !== "All" ? (
                  <button
                    type="button"
                    onClick={() => setActiveFilter("All")}
                    className="inline-flex items-center border border-white/15 px-5 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white"
                  >
                    Reset Filter
                  </button>
                ) : null}
              </div>
            </div>

            {/* Blueprint Preview Card */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] border border-dashed border-white/15 bg-[#08090B] editorial-grid-bg p-4 flex flex-col justify-between">
                <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-[#A7A9B0]">
                  Slot 01 — Before
                </span>
                <p className="text-xs text-[#A7A9B0] leading-relaxed">
                  Verified starting point photograph (with client consent).
                </p>
              </div>
              <div className="aspect-[3/4] border border-dashed border-[#F2A0C0]/35 bg-[#08090B] editorial-grid-bg p-4 flex flex-col justify-between">
                <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-[#F2A0C0]">
                  Slot 02 — Progress
                </span>
                <p className="text-xs text-[#A7A9B0] leading-relaxed">
                  Verified transformation photograph & lifestyle story.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
