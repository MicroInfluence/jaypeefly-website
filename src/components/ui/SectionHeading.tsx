import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const HeadingTag = as;
  const alignmentClasses =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignmentClasses} ${className}`}>
      <div className="inline-flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-[1px] w-7 bg-[#F2A0C0] inline-block"
        />
        <span className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-[#F2A0C0]">
          {eyebrow}
        </span>
      </div>

      <HeadingTag className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.08] text-white max-w-4xl">
        {title}
      </HeadingTag>

      {description ? (
        <p className="text-base sm:text-lg text-[#A7A9B0] leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
