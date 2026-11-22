import Image from "next/image";
import { Camera } from "lucide-react";
import type { EditorialMediaSlot } from "@/content/media";

interface EditorialPhotoProps {
  slot: EditorialMediaSlot;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

const aspectClassMap: Record<EditorialMediaSlot["aspectRatio"], string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
};

export function EditorialPhoto({
  slot,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}: EditorialPhotoProps) {
  const aspectClass = aspectClassMap[slot.aspectRatio];

  if (slot.isUploaded) {
    return (
      <figure
        className={`jpf-surface group relative overflow-hidden rounded-2xl ${className}`}
      >
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
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
          />
        </div>
        {slot.caption ? (
          <figcaption className="border-t border-white/10 bg-[#0B0B0D] px-5 py-3.5 text-xs tracking-wider uppercase text-white/90 flex items-center justify-between gap-2">
            <span>{slot.caption}</span>
            <span className="text-[11px] font-medium text-[#D63B47]">{slot.category}</span>
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={`jpf-surface relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        role="img"
        aria-label={slot.alt}
        className={`relative w-full ${aspectClass} bg-[#0B0B0D] flex flex-col justify-between p-5 sm:p-7 overflow-hidden`}
      >
        <div className="relative z-10 flex items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black px-3 py-1.5 text-[10px] sm:text-[11px] font-heading uppercase tracking-[0.16em] text-[#A7A9B0]">
            <Camera className="h-3.5 w-3.5 text-[#D63B47]" aria-hidden="true" />
            {slot.category}
          </span>
        </div>

        <div className="relative z-10 mt-auto flex flex-col gap-1.5 border-t border-white/10 pt-4">
          <p className="font-heading text-lg sm:text-xl font-medium text-white leading-snug">
            {slot.caption}
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-[#D63B47]">
            JAYPEEFLY · Patrick Jeremy
          </p>
        </div>
      </div>
    </figure>
  );
}
