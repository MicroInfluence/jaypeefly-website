"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Architectural Split-Dumbbell Gate Intro.
 * Driven by CSS compositor keyframes (jpfGateLeft/Right, jpfDumbbellLeft/Right) so it plays reliably
 * from frame 0 on both mobile touch devices and desktop viewports.
 */
export function DumbbellGateIntro() {
  const [dismissed, setDismissed] = useState(false);
  const [skipping, setSkipping] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const fallbackTimerRef = useRef<number | null>(null);
  const skipTimerRef = useRef<number | null>(null);

  const triggerSkip = useCallback(() => {
    setSkipping(true);
    if (skipTimerRef.current !== null) {
      window.clearTimeout(skipTimerRef.current);
    }
    skipTimerRef.current = window.setTimeout(() => {
      setDismissed(true);
    }, 380);
  }, []);

  useEffect(() => {
    // Safety fallback unmount right after the 1.75s CSS gate animation finishes
    fallbackTimerRef.current = window.setTimeout(() => {
      setDismissed(true);
    }, 1900);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        triggerSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
      }
      if (skipTimerRef.current !== null) {
        window.clearTimeout(skipTimerRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cycleKey, triggerSkip]);

  useEffect(() => {
    // Replay cleanly if user switches between desktop and mobile breakpoints (e.g., DevTools Mobile Toggle)
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const handleViewportChange = () => {
      setSkipping(false);
      setDismissed(false);
      setCycleKey((prev) => prev + 1);
    };

    mobileQuery.addEventListener("change", handleViewportChange);
    return () => {
      mobileQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <div
      key={cycleKey}
      aria-hidden="true"
      className="jpf-gate-animated jpf-gate-container pointer-events-none fixed inset-0 h-dvh w-screen overflow-hidden z-[100]"
    >
      {/* LEFT GATE DOOR */}
      <div
        onAnimationEnd={(e) => {
          if (e.target === e.currentTarget) {
            setDismissed(true);
          }
        }}
        className={`jpf-gate-animated absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r border-white/15 bg-[#08090B] editorial-grid-bg ${
          skipping ? "jpf-gate-skip-left" : "jpf-gate-left"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#111318]/90 via-transparent to-[#08090B]" />

        {/* Vertical seam laser highlight on right edge */}
        <div className="jpf-gate-animated jpf-seam-pulse pointer-events-none absolute inset-y-0 right-0 w-[1.5px]" />

        {/* Top half wordmark aligned to center seam */}
        <div className="absolute right-2.5 sm:right-6 top-1/2 -translate-y-[74px] sm:-translate-y-[112px] text-right">
          <span className="font-heading text-lg sm:text-3xl font-bold uppercase tracking-[0.22em] sm:tracking-[0.26em] text-white">
            JAYPEE
          </span>
        </div>

        {/* Left Half of Dumbbell Lock flush to center seam */}
        <div className="jpf-gate-animated jpf-dumbbell-left absolute right-0 top-1/2">
          <svg
            viewBox="0 0 180 140"
            className="h-auto w-[116px] sm:w-[190px] block"
            fill="none"
          >
            {/* End Bolt / Cap */}
            <rect
              x="16"
              y="60"
              width="14"
              height="20"
              rx="2"
              fill="#17191F"
              stroke="#A7A9B0"
              strokeWidth="1.5"
            />
            <rect x="28" y="54" width="8" height="32" fill="#23262F" />

            {/* Outer Heavy Plate */}
            <rect
              x="36"
              y="22"
              width="24"
              height="96"
              rx="3"
              fill="#111318"
              stroke="#FFFFFF"
              strokeWidth="1.75"
            />
            <line
              x1="44"
              y1="30"
              x2="44"
              y2="110"
              stroke="#F2A0C0"
              strokeOpacity="0.65"
              strokeWidth="1.5"
            />

            {/* Inner Heavy Plate */}
            <rect
              x="65"
              y="10"
              width="28"
              height="120"
              rx="4"
              fill="#17191F"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <rect
              x="71"
              y="18"
              width="16"
              height="104"
              rx="2"
              stroke="#FFFFFF"
              strokeOpacity="0.18"
              strokeWidth="1"
            />

            {/* Locking Sleeve Collar */}
            <rect
              x="93"
              y="46"
              width="16"
              height="48"
              rx="2"
              fill="#111318"
              stroke="#F2A0C0"
              strokeWidth="1.5"
            />

            {/* Left Half of Knurled Steel Bar extending to seam (x=180) */}
            <rect
              x="109"
              y="59"
              width="71"
              height="22"
              fill="#17191F"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <line x1="126" y1="62" x2="126" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="134" y1="62" x2="134" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="142" y1="62" x2="142" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="150" y1="62" x2="150" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="158" y1="62" x2="158" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            {/* Center Lock Pin Edge */}
            <rect x="173" y="55" width="7" height="30" fill="#F2A0C0" />
          </svg>
        </div>

        {/* Bottom half tagline aligned to center seam */}
        <div className="absolute right-2.5 sm:right-6 top-1/2 translate-y-[62px] sm:translate-y-[88px] text-right">
          <span className="font-heading text-[9px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#A7A9B0]">
            Transform Your Body
          </span>
        </div>
      </div>

      {/* RIGHT GATE DOOR */}
      <div
        className={`jpf-gate-animated absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l border-white/15 bg-[#08090B] editorial-grid-bg ${
          skipping ? "jpf-gate-skip-right" : "jpf-gate-right"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111318]/90 via-transparent to-[#08090B]" />

        {/* Vertical seam laser highlight on left edge */}
        <div className="jpf-gate-animated jpf-seam-pulse pointer-events-none absolute inset-y-0 left-0 w-[1.5px]" />

        {/* Top half wordmark aligned to center seam */}
        <div className="absolute left-2.5 sm:left-6 top-1/2 -translate-y-[74px] sm:-translate-y-[112px] text-left">
          <span className="font-heading text-lg sm:text-3xl font-bold uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#F2A0C0]">
            FLY
          </span>
        </div>

        {/* Right Half of Dumbbell Lock flush to center seam */}
        <div className="jpf-gate-animated jpf-dumbbell-right absolute left-0 top-1/2">
          <svg
            viewBox="0 0 180 140"
            className="h-auto w-[116px] sm:w-[190px] block"
            fill="none"
          >
            {/* Center Lock Pin Edge */}
            <rect x="0" y="55" width="7" height="30" fill="#F2A0C0" />
            {/* Right Half of Knurled Steel Bar starting from seam (x=0) */}
            <rect
              x="0"
              y="59"
              width="71"
              height="22"
              fill="#17191F"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <line x1="22" y1="62" x2="22" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="30" y1="62" x2="30" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="38" y1="62" x2="38" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="46" y1="62" x2="46" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />
            <line x1="54" y1="62" x2="54" y2="78" stroke="#A7A9B0" strokeOpacity="0.45" strokeWidth="1" />

            {/* Locking Sleeve Collar */}
            <rect
              x="71"
              y="46"
              width="16"
              height="48"
              rx="2"
              fill="#111318"
              stroke="#F2A0C0"
              strokeWidth="1.5"
            />

            {/* Inner Heavy Plate */}
            <rect
              x="87"
              y="10"
              width="28"
              height="120"
              rx="4"
              fill="#17191F"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <rect
              x="93"
              y="18"
              width="16"
              height="104"
              rx="2"
              stroke="#FFFFFF"
              strokeOpacity="0.18"
              strokeWidth="1"
            />

            {/* Outer Heavy Plate */}
            <rect
              x="120"
              y="22"
              width="24"
              height="96"
              rx="3"
              fill="#111318"
              stroke="#FFFFFF"
              strokeWidth="1.75"
            />
            <line
              x1="136"
              y1="30"
              x2="136"
              y2="110"
              stroke="#F2A0C0"
              strokeOpacity="0.65"
              strokeWidth="1.5"
            />

            {/* End Bolt / Cap */}
            <rect x="144" y="54" width="8" height="32" fill="#23262F" />
            <rect
              x="150"
              y="60"
              width="14"
              height="20"
              rx="2"
              fill="#17191F"
              stroke="#A7A9B0"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Bottom half tagline aligned to center seam */}
        <div className="absolute left-2.5 sm:left-6 top-1/2 translate-y-[62px] sm:translate-y-[88px] text-left">
          <span className="font-heading text-[9px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#A7A9B0]">
            Rebuild Your Mindset
          </span>
        </div>
      </div>
    </div>
  );
}
