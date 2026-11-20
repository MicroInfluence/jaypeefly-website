"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Play, Video } from "lucide-react";
import {
  educationalGuides,
  resourceFilters,
  shortFormChannels,
  youtubeVideos,
  type ResourceCategory,
} from "@/content/resources";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/content/site";

export function ResourceHub() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ResourceCategory
  >("All");

  const showYouTubeSection =
    activeCategory === "All" ||
    activeCategory === "YouTube Videos" ||
    youtubeVideos.some((v) => v.category === activeCategory);

  const filteredVideos =
    activeCategory === "All" || activeCategory === "YouTube Videos"
      ? youtubeVideos
      : youtubeVideos.filter((v) => v.category === activeCategory);

  const showGuidesSection =
    activeCategory !== "YouTube Videos" && activeCategory !== "Short-Form";

  const filteredGuides =
    activeCategory === "All"
      ? educationalGuides
      : educationalGuides.filter((g) => g.category === activeCategory);

  const showShortFormSection =
    activeCategory === "All" || activeCategory === "Short-Form";

  return (
    <div className="flex flex-col gap-16">
      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter coaching resources by topic"
        className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-visible items-center gap-2 border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-6"
      >
        {resourceFilters.map((filter) => {
          const isSelected = activeCategory === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(filter)}
              className={`shrink-0 border px-4 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                isSelected
                  ? "border-[#F2A0C0] bg-[#F2A0C0] text-[#08090B]"
                  : "border-white/10 bg-[#111318] text-[#A7A9B0] hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* YouTube Videos Showcase */}
      {showYouTubeSection ? (
        <section aria-labelledby="youtube-resources-heading" className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
                YouTube Channel — @Jaypeefly
              </p>
              <h2
                id="youtube-resources-heading"
                className="mt-2 font-heading text-2xl sm:text-3xl font-semibold text-white"
              >
                Workout & Educational Video Library
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@Jaypeefly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 bg-[#111318] px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
            >
              <SocialIcon platform="youtube" className="h-4 w-4 text-[#F2A0C0]" />
              Visit YouTube Channel
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredVideos.map((video) => (
                <article
                  key={video.id}
                  className="flex flex-col border border-white/10 bg-[#111318] overflow-hidden"
                >
                  <div className="relative aspect-video w-full bg-[#08090B]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeVideoId}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-heading uppercase tracking-[0.18em]">
                      <span className="text-[#F2A0C0]">{video.category}</span>
                      <span className="text-[#A7A9B0]">{video.format}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {video.title}
                    </h3>
                    <p className="text-sm text-[#A7A9B0] leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 bg-[#111318] p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center gap-2 border border-white/15 bg-[#17191F] px-3 py-1 font-heading text-[11px] uppercase tracking-[0.18em] text-[#F2A0C0]">
                    <Video className="h-3.5 w-3.5" aria-hidden="true" />
                    Direct Channel Integration
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    Home Workouts, Athletic Conditioning & Motivation on @Jaypeefly
                  </h3>
                  <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                    Patrick shares home workouts, core/abs routines, fat-loss
                    training sessions, and daily motivation directly on his
                    YouTube channel. Specific video embeds can be curated at any
                    time by adding verified YouTube video IDs and titles in{" "}
                    <code className="font-mono text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
                      src/content/resources.ts
                    </code>
                    .
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://www.youtube.com/@Jaypeefly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-[#F2A0C0]"
                    >
                      <Play className="h-3.5 w-3.5" aria-hidden="true" />
                      Watch on @Jaypeefly
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-5 border border-dashed border-white/15 bg-[#08090B] p-6 editorial-grid-bg flex flex-col justify-between gap-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#A7A9B0]">
                    <span>YouTube Embed Ready</span>
                    <span className="text-[#F2A0C0]">16:9</span>
                  </div>
                  <p className="text-sm text-[#A7A9B0] leading-relaxed">
                    Zero fabricated video titles or statistics are shown. Add
                    real video IDs to display native YouTube players directly in
                    this grid.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : null}

      {/* Educational Guides */}
      {showGuidesSection ? (
        <section aria-labelledby="educational-guides-heading" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
              Coaching Education
            </p>
            <h2
              id="educational-guides-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold text-white"
            >
              Foundational Frameworks: Fat Loss, Mindset & Habits
            </h2>
          </div>

          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredGuides.map((guide, index) => (
                <article
                  key={guide.id}
                  className="flex flex-col justify-between gap-6 border border-white/10 bg-[#111318] p-6 sm:p-8 transition-colors hover:border-white/25"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {guide.category}
                      </span>
                      <span className="font-mono text-xs text-[#A7A9B0]">
                        0{index + 1} · {guide.readingTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white leading-snug">
                      {guide.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-white/70 mb-3">
                      Key Coaching Takeaways
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {guide.keyTakeaways.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-[#A7A9B0]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#F2A0C0]"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 bg-[#111318] p-8 text-sm text-[#A7A9B0]">
              No guides currently match this filter. Select{" "}
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="text-white underline decoration-[#F2A0C0] underline-offset-4"
              >
                All
              </button>{" "}
              to browse all resources.
            </div>
          )}
        </section>
      ) : null}

      {/* Short-Form Video & Social Hub */}
      {showShortFormSection ? (
        <section aria-labelledby="short-form-heading" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
              Short-Form & Daily Channels
            </p>
            <h2
              id="short-form-heading"
              className="font-heading text-2xl sm:text-3xl font-semibold text-white"
            >
              Follow Across YouTube, TikTok, Instagram & Snapchat
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shortFormChannels.map((channel) => {
              const profileMatch = siteConfig.socialProfiles.find(
                (p) => p.url === channel.url
              );
              const platformId = profileMatch?.id ?? "youtube";

              return (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-6 border border-white/10 bg-[#17191F] p-6 sm:p-7 transition-all duration-300 hover:border-[#F2A0C0]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.18em] text-[#F2A0C0]">
                        <SocialIcon platform={platformId} className="h-4 w-4" />
                        {channel.platform}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-[#A7A9B0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="font-mono text-xs text-white/60">
                        {channel.handle}
                      </p>
                      <h3 className="mt-1.5 font-heading text-lg font-semibold text-white group-hover:text-[#F2A0C0] transition-colors">
                        {channel.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#A7A9B0] leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {channel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-[#111318] px-2.5 py-1 text-[11px] text-[#A7A9B0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Direct Coaching Bridge */}
      <div className="border border-white/10 bg-[#111318] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
            Ready For Structured Support?
          </p>
          <p className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-white">
            Turn knowledge into daily execution with personal accountability.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#F2A0C0] px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] transition-colors hover:bg-white"
        >
          Apply For Coaching
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
