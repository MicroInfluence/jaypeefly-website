"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
      <div
        role="tablist"
        aria-label="Filter transformations by category"
        className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-visible items-center gap-2.5 border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-6"
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
              className={`shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                isSelected ? "jpf-oxblood-btn" : "jpf-glass-btn"
              }`}
            >
              <span>{filter}</span>
              <span
                className={`font-mono text-[10px] ${
                  isSelected ? "text-white/90" : "text-white/55"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="jpf-surface rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#A7A9B0]">
                      Before
                    </span>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                      {item.beforeImage ? (
                        <Image
                          src={item.beforeImage.src}
                          alt={item.beforeImage.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 25vw"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#D63B47]">
                      After
                    </span>
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                      {item.afterImage ? (
                        <Image
                          src={item.afterImage.src}
                          alt={item.afterImage.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 45vw, 25vw"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#9B1C26]/50 bg-[#9B1C26]/15 px-3.5 py-1 font-heading text-[11px] uppercase tracking-[0.16em] text-[#D63B47]">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black px-3.5 py-1 text-xs text-[#A7A9B0]">
                      {item.coachingFormat}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#A7A9B0]">
                      {item.clientLabel}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-white">
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
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black px-3.5 py-1.5 text-xs text-white"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[#D63B47]"
                            aria-hidden="true"
                          />
                          {focus}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.clientQuote ? (
                    <blockquote className="border-l-2 border-[#9B1C26] pl-4 text-sm italic text-white/90 leading-relaxed">
                      &ldquo;{item.clientQuote}&rdquo;
                    </blockquote>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="jpf-surface rounded-2xl p-7 sm:p-10 flex flex-col gap-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            {activeFilter === "All"
              ? "Verified Client Stories Coming Soon"
              : `No "${activeFilter}" Stories Published Yet`}
          </h2>
          <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed max-w-2xl">
            Only authentic client-approved transformations appear here. Explore
            live updates on Patrick&apos;s Instagram{" "}
            <a
              href="https://www.instagram.com/jerixih"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#9B1C26] underline-offset-4 hover:text-[#D63B47]"
            >
              @jerixih
            </a>{" "}
            or apply to start your own journey.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/about#contact"
              className="jpf-oxblood-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Start Your Transformation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {activeFilter !== "All" ? (
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="jpf-glass-btn inline-flex items-center rounded-full px-6 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                Reset Filter
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
