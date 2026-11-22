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
    <div className={`flex flex-col gap-3.5 ${alignmentClasses} ${className}`}>
      <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#D63B47]">
        {eyebrow}
      </span>

      <HeadingTag className="font-heading text-2xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.1] text-white max-w-4xl">
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
