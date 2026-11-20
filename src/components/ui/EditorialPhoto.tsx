import Image from "next/image";
import { Camera } from "lucide-react";
import type { EditorialMediaSlot } from "@/content/media";

interface EditorialPhotoProps {
  slot: EditorialMediaSlot;
  priority?: boolean;
  sizes?: string;
  className?: string;
  compactPlaceholder?: boolean;
}

const aspectClassMap: Record<EditorialMediaSlot["aspectRatio"], string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
};

/**
 * Renders Patrick Jeremy's authentic photograph once `slot.isUploaded` is set to true.
 * Until supplied, renders a clearly marked, aspect-locked editorial placeholder—
 * never substituting stock models or AI portraits.
 */
export function EditorialPhoto({
  slot,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  compactPlaceholder = false,
}: EditorialPhotoProps) {
  const aspectClass = aspectClassMap[slot.aspectRatio];

  if (slot.isUploaded) {
    return (
      <figure className={`group relative overflow-hidden bg-[#111318] border border-white/10 ${className}`}>
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes={sizes}
            style={{ objectPosition: slot.objectPosition ?? "center" }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/50 via-transparent to-transparent"
          />
        </div>
        {slot.caption ? (
          <figcaption className="border-t border-white/10 bg-[#111318] px-4 py-3 text-xs tracking-wider uppercase text-[#A7A9B0] flex items-center justify-between gap-2">
            <span>{slot.caption}</span>
            <span className="text-[11px] text-[#F2A0C0]">{slot.category}</span>
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={`relative overflow-hidden border border-white/10 bg-[#111318] ${className}`}
    >
      <div
        role="img"
        aria-label={`Photograph placeholder for ${slot.alt}`}
        className={`relative w-full ${aspectClass} editorial-grid-bg flex flex-col justify-between p-4 sm:p-7 overflow-hidden`}
      >
        {/* Subtle editorial corner registration marks */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-[#F2A0C0]/60"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t border-r border-white/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/20"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#F2A0C0]/60"
        />

        {/* Top metadata bar */}
        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 border border-white/15 bg-[#08090B]/80 px-2.5 py-1 text-[10px] sm:text-[11px] font-heading uppercase tracking-[0.18em] text-[#F2A0C0]">
            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            {slot.category}
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#A7A9B0]">
            Aspect {slot.aspectRatio}
          </span>
        </div>

        {/* Center directional photography prompt */}
        <div className="relative z-10 my-auto py-4 flex flex-col items-start gap-2.5">
          <p className="font-heading text-[11px] uppercase tracking-[0.22em] text-[#A7A9B0]">
            PHOTOGRAPH PLACEHOLDER — PATRICK JEREMY
          </p>
          <p className="font-heading text-lg sm:text-xl font-medium text-white leading-snug max-w-md">
            {slot.caption}
          </p>
          {!compactPlaceholder ? (
            <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed max-w-md">
              {slot.guidance}
            </p>
          ) : null}
        </div>

        {/* Bottom replacement target path */}
        <div className="relative z-10 border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#A7A9B0]">
          <span>Replace with authentic photo:</span>
          <code className="font-mono text-[10px] sm:text-[11px] break-all sm:break-normal text-white bg-[#17191F] px-2 py-0.5 border border-white/10">
            public{slot.src}
          </code>
        </div>
      </div>
    </figure>
  );
}
