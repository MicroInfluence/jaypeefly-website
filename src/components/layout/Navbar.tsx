"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scrolling & listen for Escape when drawer is open
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 pointer-events-none">
        <div className="jpf-liquid-nav pointer-events-auto mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between rounded-full px-5 sm:px-7">
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex flex-col leading-none"
            aria-label="JAYPEEFLY | Patrick Jeremy Home"
          >
            <span className="font-heading text-sm sm:text-lg font-bold tracking-[0.14em] text-white">
              JAYPEE<span className="text-[#D63B47]">FLY</span>
            </span>
            <span className="mt-0.5 text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.22em] text-white/60">
              {siteConfig.founderName}
            </span>
          </Link>

          {/* Desktop Navigation: consistent pill-bar links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-2">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]"
                      : "text-white/75 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary Oxblood Liquid Pill CTA + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href={siteConfig.primaryCta.href}
              className="jpf-oxblood-btn hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-heading text-xs font-semibold uppercase tracking-[0.12em]"
            >
              {siteConfig.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`relative z-[70] inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-full transition-colors lg:hidden ${
                mobileOpen
                  ? "jpf-oxblood-btn"
                  : "jpf-glass-btn"
              }`}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer rendered outside <header> so backdrop-blur never traps fixed positioning */}
      {mobileOpen ? (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[4.75rem] sm:top-[5.5rem] bottom-0 z-[60] h-[calc(100dvh-4.75rem)] sm:h-[calc(100dvh-5.5rem)] overflow-y-auto border-t border-white/15 bg-black/95 backdrop-blur-2xl px-5 py-6 sm:px-6 sm:py-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {siteConfig.navItems.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 font-heading text-lg font-medium tracking-tight transition-colors ${
                      isActive
                        ? "bg-white/12 border border-white/20 text-white"
                        : "border border-transparent text-white/80 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-white/50">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 pt-5">
              <Link
                href={siteConfig.primaryCta.href}
                onClick={() => setMobileOpen(false)}
                className="jpf-oxblood-btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                {siteConfig.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
